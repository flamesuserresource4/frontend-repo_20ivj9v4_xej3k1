import { useState } from 'react'
import Spline from '@splinetool/react-spline'
// Icons from lucide-react (preinstalled)
import { Link as LinkIcon, Copy, Check, Phone, Globe, Youtube, Gamepad2 } from 'lucide-react'

function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(String(value))
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch (e) {
      // Fallback prompt
      window.prompt('Copy this value:', String(value))
    }
  }

  return (
    <div className="flex items-center justify-between gap-4 bg-white/70 backdrop-blur rounded-xl border border-white/40 p-4 shadow-sm">
      <div className="min-w-0">
        <p className="text-sm text-gray-500">{label}</p>
        <p className="font-mono text-gray-800 truncate">{value}</p>
      </div>
      <button
        onClick={onCopy}
        className={`shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors
          ${copied ? 'bg-green-500 text-white' : 'bg-gray-900 text-white hover:bg-gray-800'}`}
        aria-label={`Copy ${label}`}
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}

function SocialButton({ href, title, subtitle, icon: Icon, colorClasses }) {
  const disabled = !href || href === '#'
  const content = (
    <div className={`w-full flex items-center gap-4 p-4 rounded-xl border border-white/40 bg-white/70 backdrop-blur shadow-sm transition transform hover:-translate-y-0.5 ${disabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-md'}`}>
      <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${colorClasses}`}>
        {Icon ? <Icon className="text-white" size={20} /> : <LinkIcon className="text-white" size={20} />}
      </div>
      <div className="min-w-0">
        <p className="font-semibold text-gray-900 truncate">{title}</p>
        {subtitle && <p className="text-sm text-gray-600 truncate">{subtitle}</p>}
      </div>
    </div>
  )

  return disabled ? (
    <div title="Provide a link to enable this button">{content}</div>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer" className="block">
      {content}
    </a>
  )
}

function App() {
  // Provided links
  const facebookUrl = 'https://www.facebook.com/share/17XVVp2sLQ/'
  const tiktokUrl = 'https://tiktok.com/@umair1ahmed0'
  // Not provided by user yet – placeholders (can be updated anytime)
  const websiteUrl = '#'
  const youtubeUrl = '#'

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-sky-50 to-white text-gray-900">
      {/* Hero with Spline */}
      <section className="relative h-[48vh] sm:h-[56vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/ezRAY9QD27kiJcur/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* Soft gradient overlay to improve contrast; pointer-events-none per guidance */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white" />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-3xl">
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
              Umair Ahmed — Social Links & Gaming IDs
            </h1>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              Connect with me, explore my content, and grab my IDs to team up in-game.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <main className="relative z-10 mx-auto max-w-4xl px-6 -mt-10 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Left column: Social links */}
          <div className="md:col-span-3 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Social Links</h2>

            <SocialButton
              href={facebookUrl}
              title="Facebook"
              subtitle="Follow and share"
              icon={Globe}
              colorClasses="bg-blue-600"
            />

            <SocialButton
              href={tiktokUrl}
              title="TikTok"
              subtitle="Shorts and highlights"
              icon={Globe}
              colorClasses="bg-black"
            />

            <h2 className="pt-4 text-lg font-semibold text-gray-800">Content & Website</h2>
            <SocialButton
              href={websiteUrl}
              title="Website"
              subtitle={websiteUrl === '#' ? 'Add your website URL to enable' : 'Visit my site'}
              icon={Globe}
              colorClasses="bg-teal-600"
            />
            <SocialButton
              href={youtubeUrl}
              title="YouTube Purchases / Content"
              subtitle={youtubeUrl === '#' ? 'Add your YouTube link to enable' : 'Watch and support'}
              icon={Youtube}
              colorClasses="bg-red-600"
            />
          </div>

          {/* Right column: Gaming IDs + Contact */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold text-gray-800">Gaming Profiles (IDs)</h2>
            <div className="space-y-3">
              <CopyField label="Peace Elite (和平精英) ID" value="3846186531" />
              <CopyField label="PUBG Mobile ID" value="61475301250" />
              <CopyField label="PUBG LITE ID" value="7320080079" />
            </div>

            <div className="pt-5">
              <h2 className="text-lg font-semibold text-gray-800">Contact</h2>
              <a
                href="tel:03128310019"
                className="mt-3 flex items-center gap-3 p-4 rounded-xl border border-white/40 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                  <Phone className="text-white" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Call / WhatsApp</p>
                  <p className="font-semibold">03128310019</p>
                </div>
              </a>
            </div>

            <div className="pt-3 text-xs text-gray-500 flex items-center gap-2">
              <Gamepad2 size={14} />
              Tip: Use the copy buttons to quickly share my IDs with friends.
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
