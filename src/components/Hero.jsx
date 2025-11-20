import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden" id="search">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            Nonstop vibes, modern travel
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Dhaka to Dubai — book your route in minutes
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            A sleek, modern experience inspired by fintech and boarding-pass design. Explore flexible dates, compare fares, and get there in style.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="md:col-span-2 rounded-xl bg-white/10 backdrop-blur border border-white/10 p-4">
              <label className="text-xs text-white/60">From</label>
              <p className="text-white font-medium">Dhaka (DAC)</p>
            </div>
            <div className="md:col-span-2 rounded-xl bg-white/10 backdrop-blur border border-white/10 p-4">
              <label className="text-xs text-white/60">To</label>
              <p className="text-white font-medium">Dubai (DXB)</p>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur border border-white/10 p-4">
              <label className="text-xs text-white/60">Depart</label>
              <p className="text-white font-medium">Choose date</p>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur border border-white/10 p-4">
              <label className="text-xs text-white/60">Return</label>
              <p className="text-white font-medium">Optional</p>
            </div>
            <div className="rounded-xl bg-white/10 backdrop-blur border border-white/10 p-4">
              <label className="text-xs text-white/60">Passengers</label>
              <p className="text-white font-medium">1 Adult</p>
            </div>
            <button className="rounded-xl bg-gradient-to-r from-orange-400 to-yellow-300 text-black font-semibold px-6 py-4">
              Search flights
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
