import { motion } from "framer-motion";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/9719203955?text=Hi%20DeVTAL!%20I%20have%20a%20question%20about%20your%20services."
      target="_blank"
      rel="noreferrer"
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 18 }}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-hairline bg-surface/90 px-4 py-3 backdrop-blur-md shadow-card hover:border-cyan/60"
    >
      <span className="grid h-6 w-6 place-items-center rounded-full bg-[#25D366] text-xs">💬</span>
      <span className="font-display text-sm">WhatsApp</span>
      <span className="text-xs text-muted-foreground">· Not a bot. Real human.</span>
    </motion.a>
  );
}
