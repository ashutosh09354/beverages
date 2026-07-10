import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: "By accessing or using the Quenchly website and app, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our platform.",
  },
  {
    title: "2. Using Our Service",
    body: "You must be at least 18 years old, or have permission from a parent or guardian, to place an order. You agree to provide accurate, current information when creating an account or placing an order, and to keep your login credentials secure.",
  },
  {
    title: "3. Orders & Payments",
    body: "All orders are subject to product availability. Prices displayed at checkout are final and include any applicable taxes and delivery fees shown on that page. Payment is processed securely at the time of order placement through your chosen payment method.",
  },
  {
    title: "4. Delivery",
    body: "We aim to deliver within the estimated time shown at checkout, but delivery windows are estimates and not guarantees. Delays caused by weather, traffic, or circumstances outside our control are not the responsibility of Quenchly.",
  },
  {
    title: "5. Returns & Refunds",
    body: "If an item arrives damaged, incorrect, or not as described, please contact our support team within 48 hours of delivery for a replacement or refund. Perishable beverages that have been opened cannot be returned for hygiene reasons.",
  },
  {
    title: "6. Account Termination",
    body: "We reserve the right to suspend or terminate accounts that violate these terms, engage in fraudulent activity, or misuse the platform in any way that harms Quenchly or other users.",
  },
  {
    title: "7. Limitation of Liability",
    body: "Quenchly is not liable for any indirect, incidental, or consequential damages arising from your use of the service, to the maximum extent permitted by law.",
  },
  {
    title: "8. Changes to These Terms",
    body: "We may update these Terms of Service from time to time. Continued use of the platform after changes are posted constitutes your acceptance of the revised terms.",
  },
  {
    title: "9. Contact Us",
    body: "If you have any questions about these Terms of Service, reach out to us at hello@quenchly.com.",
  },
];

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10 text-center"
      >
        <span className="grid place-items-center w-12 h-12 rounded-xl2 bg-primary-50 text-primary-600 mx-auto mb-4">
          <FileText size={22} />
        </span>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink">
          Terms of Service
        </h1>
        <p className="text-ink/50 text-sm mt-2">Last updated: July 1, 2026</p>
      </motion.div>

      <div className="bg-white rounded-xl4 shadow-softer p-6 sm:p-9 space-y-7">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.35, delay: Math.min(i * 0.04, 0.3) }}
          >
            <h2 className="text-base sm:text-lg font-bold text-ink mb-2">
              {section.title}
            </h2>
            <p className="text-sm text-ink/60 leading-relaxed">{section.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
