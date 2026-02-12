'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary px-8 py-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl text-center"
      >
        <h1 className="text-5xl font-bold">Automate Customer Replies with AI</h1>
        <p className="mt-4 text-lg text-slate-100">
          ReplyAI unifies WhatsApp, Instagram, and Email into one AI-powered inbox.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button className="bg-accent text-secondary">Start Free Trial</Button>
          <Button variant="outline" className="border-white text-white hover:bg-white/10">
            Watch Demo
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-10 max-w-xl rounded-2xl bg-white/10 p-6 backdrop-blur"
      >
        <p className="text-sm">🤖 AI: Hi! Need pricing for our premium package?</p>
        <p className="mt-2 text-right text-sm">Customer: Yes, please send details.</p>
      </motion.div>
    </section>
  );
}
