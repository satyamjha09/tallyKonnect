"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Button({ children, href, secondary = false, className = "", type = "button" }) {
  const classes = `button ${secondary ? "button-secondary" : "button-primary"} ${className}`;
  const content = <>{children}<ArrowRight size={16} aria-hidden="true" /></>;

  if (href) {
    return (
      <motion.span whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex">
        <Link href={href} className={classes}>{content}</Link>
      </motion.span>
    );
  }

  return <motion.button type={type} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className={classes}>{content}</motion.button>;
}
