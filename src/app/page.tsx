'use client';

import Link from 'next/link';

const FEATURES = [
  { icon: '🌐', title: 'Any Website', desc: 'Playwright automates browsers — no API needed. If a human can click it, Babuserf can automate it.' },
  { icon: '👁️', title: 'Full Observability', desc: 'See every step in n8n\'s visual editor. Debug, replay, customize. No more black boxes.' },
  { icon: '☁️', title: 'Cloud-Native', desc: 'Runs on Google Cloud Run — permanent, serverless, scales automatically. Zero server management.' },
  { icon: '🤖', title: 'AI-Powered', desc: 'Intelligent error recovery, adaptive selectors, self-healing workflows. Built for the real web.' },
  { icon: '📦', title: 'Preset Marketplace', desc: 'Pre-built automations for TradingView, Binance, CoinGecko, and more. Install in seconds.' },
  { icon: '📱', title: 'Telegram Alerts', desc: 'Real-time notifications on success, failure, or when human approval is needed. Stay in control.' },
];

const PRESETS = [
  { name: 'TradingView', desc: 'Auto-create alerts, sync indicators, chart archiving', icon: '📊', status: 'Live', color: '#2962FF' },
  { name: 'n8n Workflows', desc: 'Deploy, monitor, and manage automation workflows', icon: '⚡', status: 'Live', color: '#FF6D5A' },
  { name: 'CoinGecko', desc: 'Token listing, price monitoring, portfolio tracking', icon: '🦎', status: 'Live', color: '#8DC63F' },
  { name: 'Binance', desc: 'Account monitoring, balance alerts, trade execution', icon: '💰', status: 'Beta', color: '#F0B90B' },
  { name: 'LinkedIn', desc: 'Connection management, post scheduling, analytics', icon: '💼', status: 'Coming', color: '#0A66C2' },
  { name: 'Custom', desc: 'Build your own preset with our SDK — any website', icon: '🔧', status: 'SDK', color: '#7c3aed' },
];

const PRICING = [
  { name: 'Free', price: '$0', period: '/forever', features: ['1 preset', '100 runs/month', 'Community support', 'Cloud Logging'], cta: 'Start Free', popular: false },
  { name: 'Starter', price: '$49', period: '/month', features: ['3 presets', '1,000 runs/month', 'Telegram alerts', 'Priority support', 'Custom webhooks'], cta: 'Get Started', popular: false },
  { name: 'Pro', price: '$149', period: '/month', features: ['All presets', '10,000 runs/month', 'Custom presets (SDK)', 'Dedicated support', 'SLA guarantee', 'Team access'], cta: 'Go Pro', popular: true },
];

export default function LandingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden grid-bg">
      {/* Glow orbs */}
      <div className="glow-orb" style={{ width: 600, height: 600, background: '#7c3aed', top: -200, right: -200 }} />
      <div className="glow-orb" style={{ width: 400, height: 400, background: '#06b6d4', bottom: 200, left: -100 }} />

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-5">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🏇</span>
          <span className="text-xl font-bold gradient-text">Babuserf</span>
          <span className="text-xs text-[var(--text-muted)] ml-1">by Alibabu</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-[var(--text-secondary)]">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#presets" className="hover:text-white transition-colors">Presets</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <Link href="/login" className="btn-ghost text-sm !py-2 !px-5">Sign In</Link>
          <Link href="/login" className="btn-accent text-sm !py-2 !px-5">Start Free</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 text-center px-6 pt-20 pb-28 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 glass-card !rounded-full px-4 py-2 mb-8 text-sm">
          <span className="status-dot" />
          <span className="text-[var(--text-secondary)]">3 presets live — TradingView, n8n, CoinGecko</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
          Automate <span className="gradient-text">Any Website</span>.<br />
          See Every Step.
        </h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
          The observable automation platform. No APIs needed — Babuserf drives real browsers, 
          orchestrated by n8n, powered by Google Cloud. Built for traders, developers, and businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/login" className="btn-accent text-lg">
            Start Free →
          </Link>
          <a href="#features" className="btn-ghost text-lg">
            See How It Works
          </a>
        </div>

        {/* Live stats */}
        <div className="flex justify-center gap-12 mt-16 text-center">
          {[
            { value: '6/6', label: 'Services Healthy' },
            { value: '10', label: 'n8n Workflows' },
            { value: '27', label: 'CLI Commands' },
            { value: '$0', label: 'License Cost' },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-3xl font-bold gradient-text">{s.value}</span>
              <span className="text-sm text-[var(--text-muted)] mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="relative z-10 px-6 md:px-12 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why <span className="gradient-text">Babuserf</span>?
        </h2>
        <p className="text-center text-[var(--text-secondary)] mb-12 max-w-lg mx-auto">
          MCP is a black box. Zapier needs APIs. Babuserf automates anything — and you see every click.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="glass-card p-6">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Architecture */}
      <section className="relative z-10 px-6 md:px-12 py-20 max-w-4xl mx-auto">
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Observable Architecture</h2>
          <pre className="text-sm text-[var(--text-secondary)] leading-relaxed overflow-x-auto whitespace-pre font-mono">
{`  You (Dashboard)
    ↓
  🏇 Babuserf Engine          ← Configure + Monitor
    ↓
  ⚡ n8n Workflows             ← Visual workflow editor
    ↓
  🌐 Playwright Browser       ← Every click visible
    ↓
  ☁️ Google Cloud Run          ← Permanent, serverless
    ↓
  📊 TradingView / Binance / Any Website

  Every step logged → Cloud Logging
  Every error → Telegram alert
  Every workflow → Editable in n8n`}
          </pre>
        </div>
      </section>

      {/* Presets */}
      <section id="presets" className="relative z-10 px-6 md:px-12 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Preset <span className="gradient-text">Marketplace</span>
        </h2>
        <p className="text-center text-[var(--text-secondary)] mb-12">Install an automation in seconds. Or build your own.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRESETS.map((p) => (
            <div key={p.name} className="glass-card p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{p.icon}</span>
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <span
                  className="ml-auto text-xs font-medium px-2 py-1 rounded-full"
                  style={{
                    background: p.status === 'Live' ? 'rgba(34,197,94,0.15)' : p.status === 'Beta' ? 'rgba(245,158,11,0.15)' : 'rgba(124,58,237,0.15)',
                    color: p.status === 'Live' ? '#22c55e' : p.status === 'Beta' ? '#f59e0b' : '#7c3aed',
                  }}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-sm text-[var(--text-secondary)] flex-1">{p.desc}</p>
              <div className="mt-4 h-1 rounded-full" style={{ background: `${p.color}30` }}>
                <div className="h-full rounded-full" style={{ background: p.color, width: p.status === 'Live' ? '100%' : p.status === 'Beta' ? '60%' : '20%' }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative z-10 px-6 md:px-12 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-center text-[var(--text-secondary)] mb-12">Start free. Scale when you need to.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRICING.map((p) => (
            <div key={p.name} className={`glass-card p-8 flex flex-col ${p.popular ? 'price-popular' : ''}`}>
              <h3 className="text-xl font-bold mb-2">{p.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-[var(--text-muted)]">{p.period}</span>
              </div>
              <ul className="space-y-3 flex-1 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <span className="text-[var(--success)]">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link href="/login" className={p.popular ? 'btn-accent text-center' : 'btn-ghost text-center'}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="glass-card max-w-3xl mx-auto p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to automate?</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Join the developers who chose observability over black boxes.
          </p>
          <Link href="/login" className="btn-accent text-lg inline-block">
            Start Free — No Credit Card →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-[var(--border-color)] px-6 md:px-12 py-8 mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span>🏇</span>
            <span className="font-semibold">Babuserf</span>
            <span className="text-[var(--text-muted)] text-sm">by Alibabu Group</span>
          </div>
          <div className="flex gap-6 text-sm text-[var(--text-muted)]">
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
            <a href="https://github.com/datogveta/Babuserf" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>
          <p className="text-sm text-[var(--text-muted)]">© 2026 Alibabu Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
