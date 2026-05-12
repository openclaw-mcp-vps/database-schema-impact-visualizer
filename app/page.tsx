export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Visualize how schema changes{' '}
          <span className="text-[#58a6ff]">break your app</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload your database schema and codebase. Get an interactive dependency graph showing exactly which queries, models, and API endpoints are affected — before you run a single migration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start for $19/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Learn more
          </a>
        </div>
        {/* Mock graph preview */}
        <div className="mt-16 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
            <span className="ml-2 text-xs text-[#8b949e]">impact-graph — users table: rename email → email_address</span>
          </div>
          <div className="grid grid-cols-3 gap-4 text-xs">
            <div className="bg-[#0d1117] border border-[#f85149] rounded-lg p-3">
              <div className="text-[#f85149] font-bold mb-1">HIGH RISK</div>
              <div className="text-[#c9d1d9] font-mono">auth/login.ts</div>
              <div className="text-[#8b949e] mt-1">SELECT email FROM users</div>
            </div>
            <div className="bg-[#0d1117] border border-[#d29922] rounded-lg p-3">
              <div className="text-[#d29922] font-bold mb-1">MEDIUM</div>
              <div className="text-[#c9d1d9] font-mono">models/User.ts</div>
              <div className="text-[#8b949e] mt-1">email: string field</div>
            </div>
            <div className="bg-[#0d1117] border border-[#3fb950] rounded-lg p-3">
              <div className="text-[#3fb950] font-bold mb-1">LOW RISK</div>
              <div className="text-[#c9d1d9] font-mono">api/profile.ts</div>
              <div className="text-[#8b949e] mt-1">indirect reference</div>
            </div>
          </div>
          <div className="mt-4 text-xs text-[#8b949e] text-center">12 files affected · 3 high risk · estimated migration effort: 2h</div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8">
          <div className="flex items-end gap-1 mb-2">
            <span className="text-4xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] mb-6">Everything you need to ship schema changes safely.</p>
          <ul className="space-y-3 mb-8">
            {[
              'Interactive dependency graph',
              'Unlimited schema uploads',
              'Affected file highlighting',
              'Migration risk scoring',
              'SQL & ORM support (Prisma, TypeORM, Drizzle)',
              'Export reports as PDF',
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#3fb950] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-center transition-colors"
          >
            Get started — $19/mo
          </a>
          <p className="text-xs text-[#8b949e] text-center mt-3">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Which databases and ORMs are supported?</h3>
            <p className="text-[#8b949e] text-sm">PostgreSQL, MySQL, and SQLite schemas are supported. For ORMs, we parse Prisma, TypeORM, Drizzle, and Sequelize model definitions automatically.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">Is my code stored on your servers?</h3>
            <p className="text-[#8b949e] text-sm">No. Analysis runs entirely in your browser using WebAssembly. Your schema and source files never leave your machine.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-white mb-2">How accurate is the impact detection?</h3>
            <p className="text-[#8b949e] text-sm">We use static analysis with AST parsing to trace column and table references across your codebase. Accuracy is typically 90–95% for typed codebases; dynamic query builders may require manual review.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} Schema Impact Visualizer. Built for backend developers and DBAs.
      </footer>
    </main>
  )
}
