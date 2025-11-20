import { motion } from 'framer-motion';
import { Clock, BadgePercent, Ticket } from 'lucide-react';

const deals = [
  {
    title: 'Early Bird',
    subtitle: 'Book 30+ days ahead',
    tag: '-15%',
    icon: BadgePercent,
  },
  {
    title: 'Weekender',
    subtitle: 'Fri-Mon return',
    tag: 'Save $45',
    icon: Clock,
  },
  {
    title: 'Flex Ticket',
    subtitle: '1 free change',
    tag: 'Best value',
    icon: Ticket,
  },
];

export default function Deals() {
  return (
    <section id="deals" className="relative py-20 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(251,146,60,0.12),transparent_40%),radial-gradient(circle_at_80%_100%,rgba(251,191,36,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Smart deals for your route</h2>
          <p className="mt-2 text-white/70">Pick a vibe and we’ll tune prices around it.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {deals.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 hover:border-white/20 transition"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-white">
                  <d.icon className="h-5 w-5 text-orange-300" />
                  <p className="font-medium">{d.title}</p>
                </div>
                <span className="text-xs rounded-full px-2 py-1 bg-orange-400/20 text-orange-200 border border-orange-300/20">{d.tag}</span>
              </div>
              <p className="mt-3 text-white/70 text-sm">{d.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
