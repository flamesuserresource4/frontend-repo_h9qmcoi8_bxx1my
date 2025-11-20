export default function Footer() {
  return (
    <footer id="why" className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-white/70">
        <div>
          <p className="text-white font-semibold">Why SkyRoute</p>
          <p className="mt-2 text-sm">Built around a boarding-pass aesthetic, with a frictionless flow from search to checkout.</p>
        </div>
        <div>
          <p className="text-white font-semibold">Support</p>
          <ul className="mt-2 text-sm space-y-1">
            <li>24/7 chat</li>
            <li>No hidden fees</li>
            <li>Instant e‑ticket</li>
          </ul>
        </div>
        <div>
          <p className="text-white font-semibold">Legal</p>
          <ul className="mt-2 text-sm space-y-1">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-white/50 pb-8">© {new Date().getFullYear()} SkyRoute</div>
    </footer>
  );
}
