import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Package,
  ChevronDown,
  FileText,
  MapPin,
  CheckCircle2,
  Truck,
  Box,
  ClipboardCheck,
  ShoppingBag,
} from "lucide-react";
import { products } from "../data/products";
import { BottleSilhouette } from "../components/ProductCard";

const trackSteps = [
  { id: "placed", label: "Placed", icon: ClipboardCheck },
  { id: "packed", label: "Packed", icon: Box },
  { id: "out-for-delivery", label: "Out for Delivery", icon: Truck },
  { id: "delivered", label: "Delivered", icon: CheckCircle2 },
];

const dummyOrders = [
  {
    id: "QN482913",
    date: "8 Jul 2026",
    status: "out-for-delivery",
    items: [
      { id: "e1", qty: 2 },
      { id: "j1", qty: 1 },
    ],
    total: 355,
  },
  {
    id: "QN471820",
    date: "3 Jul 2026",
    status: "packed",
    items: [{ id: "h1", qty: 1 }],
    total: 249,
  },
  {
    id: "QN458217",
    date: "22 Jun 2026",
    status: "delivered",
    items: [
      { id: "s1", qty: 3 },
      { id: "c1", qty: 1 },
    ],
    total: 305,
  },
  {
    id: "QN440519",
    date: "10 Jun 2026",
    status: "delivered",
    items: [{ id: "p1", qty: 2 }],
    total: 441,
  },
];

const statusMeta = {
  placed: { label: "Order Placed", color: "text-sky-600 bg-sky-50" },
  packed: { label: "Packed", color: "text-amber-600 bg-amber-50" },
  "out-for-delivery": { label: "Out for Delivery", color: "text-primary-700 bg-primary-50" },
  delivered: { label: "Delivered", color: "text-emerald-700 bg-emerald-50" },
};

export default function Orders() {
  const [tab, setTab] = useState("current");
  const [expandedId, setExpandedId] = useState(null);
  const [invoiceToast, setInvoiceToast] = useState(null);

  const currentOrders = dummyOrders.filter((o) => o.status !== "delivered");
  const previousOrders = dummyOrders.filter((o) => o.status === "delivered");
  const list = tab === "current" ? currentOrders : previousOrders;

  const handleInvoice = (orderId) => {
    setInvoiceToast(orderId);
    setTimeout(() => setInvoiceToast(null), 2500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
      <h1 className="text-2xl sm:text-3xl font-bold text-ink mb-1">My Orders</h1>
      <p className="text-ink/50 text-sm mb-6">Track, manage and review your orders</p>

      {/* Tabs */}
      <div className="inline-flex bg-white rounded-xl3 shadow-softer p-1 mb-6">
        {[
          { id: "current", label: "Current Orders" },
          { id: "previous", label: "Previous Orders" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-4 sm:px-5 py-2.5 rounded-xl2 text-sm font-semibold transition-colors ${
              tab === t.id ? "bg-primary-500 text-white" : "text-ink/50 hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <div className="bg-white rounded-xl4 shadow-softer p-12 text-center">
          <ShoppingBag size={32} className="text-ink/20 mx-auto mb-4" />
          <h2 className="text-lg font-bold text-ink">
            No {tab === "current" ? "current" : "previous"} orders
          </h2>
          <p className="text-ink/50 text-sm mt-1.5">
            {tab === "current"
              ? "Orders you place will show up here."
              : "Your order history will appear here."}
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-1.5 mt-5 px-6 py-2.5 rounded-xl2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold shadow-softer transition-colors"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {list.map((order) => {
            const orderItems = order.items
              .map((it) => {
                const product = products.find((p) => p.id === it.id);
                return product ? { ...product, qty: it.qty } : null;
              })
              .filter(Boolean);
            const isExpanded = expandedId === order.id;
            const meta = statusMeta[order.status];

            return (
              <motion.div
                key={order.id}
                layout
                className="bg-white rounded-xl4 shadow-softer overflow-hidden"
              >
                {/* Header row */}
                <button
                  onClick={() => setExpandedId(isExpanded ? null : order.id)}
                  className="w-full flex items-center justify-between gap-3 p-4 sm:p-5 text-left"
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <span className="grid place-items-center w-11 h-11 rounded-xl2 bg-primary-50 text-primary-600 shrink-0">
                      <Package size={19} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-ink truncate">
                        #{order.id}
                      </p>
                      <p className="text-xs text-ink/45">
                        {order.date} · {orderItems.length}{" "}
                        {orderItems.length === 1 ? "item" : "items"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-4 shrink-0">
                    <span
                      className={`hidden sm:inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${meta.color}`}
                    >
                      {meta.label}
                    </span>
                    <span className="text-sm font-bold text-ink">₹{order.total}</span>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      className="text-ink/40"
                    >
                      <ChevronDown size={18} />
                    </motion.span>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-5 pb-5 border-t border-primary-100/60 pt-5">
                        <span
                          className={`sm:hidden inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-4 ${meta.color}`}
                        >
                          {meta.label}
                        </span>

                        {/* Track order stepper */}
                        <div className="flex items-center mb-6">
                          {trackSteps.map((step, i) => {
                            const stepIndex = trackSteps.findIndex(
                              (s) => s.id === order.status
                            );
                            const isDone = i <= stepIndex;
                            const Icon = step.icon;
                            return (
                              <div key={step.id} className="flex-1 flex items-center">
                                <div className="flex flex-col items-center gap-1.5">
                                  <span
                                    className={`grid place-items-center w-8 h-8 rounded-full transition-colors ${
                                      isDone
                                        ? "bg-primary-500 text-white"
                                        : "bg-primary-50 text-ink/30"
                                    }`}
                                  >
                                    <Icon size={14} />
                                  </span>
                                  <span
                                    className={`text-[10px] font-medium text-center leading-tight ${
                                      isDone ? "text-ink/70" : "text-ink/30"
                                    }`}
                                  >
                                    {step.label}
                                  </span>
                                </div>
                                {i < trackSteps.length - 1 && (
                                  <div
                                    className={`flex-1 h-0.5 -mt-4 ${
                                      i < stepIndex ? "bg-primary-500" : "bg-primary-50"
                                    }`}
                                  />
                                )}
                              </div>
                            );
                          })}
                        </div>

                        {/* Items */}
                        <div className="space-y-2.5 mb-5">
                          {orderItems.map((item) => (
                            <div key={item.id} className="flex items-center gap-3">
                              <span
                                className={`grid place-items-center w-11 h-11 rounded-xl2 bg-gradient-to-br ${item.color} shrink-0`}
                              >
                                <BottleSilhouette className="w-5" />
                              </span>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-ink truncate">
                                  {item.name}
                                </p>
                                <p className="text-xs text-ink/40">
                                  {item.size} × {item.qty}
                                </p>
                              </div>
                              <span className="text-sm font-semibold text-ink shrink-0">
                                ₹{item.price * item.qty}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-primary-100/60">
                          <div className="flex items-center gap-1.5 text-xs text-ink/45 mr-auto">
                            <MapPin size={13} /> House 24, Sector 45, Gurugram
                          </div>
                          <button
                            onClick={() => handleInvoice(order.id)}
                            className="flex items-center gap-1.5 text-xs font-semibold text-ink/60 bg-primary-50 hover:bg-primary-100 px-3.5 py-2 rounded-xl2 transition-colors"
                          >
                            <FileText size={13} /> Invoice
                          </button>
                          <Link
                            to={`/product/${orderItems[0]?.id}`}
                            className="text-xs font-semibold text-primary-700 bg-white border border-primary-200 hover:bg-primary-50 px-3.5 py-2 rounded-xl2 transition-colors"
                          >
                            Buy Again
                          </Link>
                        </div>

                        <AnimatePresence>
                          {invoiceToast === order.id && (
                            <motion.p
                              initial={{ opacity: 0, y: -6 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0 }}
                              className="flex items-center gap-1.5 text-xs text-primary-600 font-medium mt-3"
                            >
                              <CheckCircle2 size={13} /> Invoice sent to your email
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
}
