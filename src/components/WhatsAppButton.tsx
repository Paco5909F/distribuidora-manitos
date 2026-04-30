"use client";

import { motion } from "framer-motion";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { getWhatsAppLink } from "@/config/constants";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 10 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-[env(safe-area-inset-bottom,1.5rem)] right-6 md:bottom-10 md:right-10 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] flex items-center justify-center cursor-pointer hover:bg-[#20bd5a] transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon size={32} />
    </motion.a>
  );
}
