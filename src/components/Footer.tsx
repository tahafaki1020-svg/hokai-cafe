import { Instagram, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenWorld: () => void;
}

const FOOTER_LINKS = [
  { label: 'Brand Story', href: '#story' },
  { label: 'Our Coffee', href: '#collection' },
  { label: 'The Art of Coffee', href: '#craft' },
  { label: 'Coffee Origins', href: '#origins' },
  { label: 'HOKAI Journal', href: '#journal' },
];

export function Footer({ onOpenWorld }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#D6C1A1]/15 bg-[#151515] text-[#F3EDE3]">
      <div className="mx-auto max-w-[1360px] px-6 py-20 md:px-12 md:py-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-10">
          {/* Brand Signature Column */}
          <div className="md:col-span-5">
            <a
              href="#top"
              className="inline-block font-serif text-3xl font-medium tracking-[0.28em] text-[#F3EDE3] transition-colors hover:text-[#D6C1A1]"
            >
              HOKAI
            </a>
            <p className="mt-2 font-serif text-lg italic text-[#D6C1A1]/80">
              Beyond the Ordinary Brew.
            </p>
            <p className="mt-5 max-w-sm text-sm leading-[1.85] font-light text-[#F3EDE3]/65">
              An international luxury coffee house devoted to rare high-altitude
              terroir, small-batch cast-iron roasting, and timeless rituals of
              quiet contemplation.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3">
            <h3 className="font-sans text-[11px] font-medium tracking-[0.24em] text-[#92734C] uppercase">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-[#F3EDE3]/75 transition-colors duration-200 hover:text-[#D6C1A1]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Salons Column */}
          <div className="md:col-span-4">
            <h3 className="font-sans text-[11px] font-medium tracking-[0.24em] text-[#92734C] uppercase">
              Concierge & Salons
            </h3>
            <div className="mt-5 space-y-3.5 text-sm font-light text-[#F3EDE3]/75">
              <p>
                <a
                  href="mailto:concierge@hokai-coffee.com"
                  className="transition-colors hover:text-[#D6C1A1]"
                >
                  concierge@hokai-coffee.com
                </a>
              </p>
              <p className="text-[#F3EDE3]/60">
                Bandra West, Mumbai
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-6 border-t border-[#D6C1A1]/12 pt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-[0.18em] text-[#D6C1A1] uppercase transition-colors hover:text-[#F3EDE3]"
              >
                <Instagram className="h-3.5 w-3.5" aria-hidden="true" />
                <span>@hokai.coffee</span>
                <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
              </a>

              <button
                type="button"
                onClick={onOpenWorld}
                className="cursor-pointer text-xs tracking-[0.18em] text-[#F3EDE3]/70 uppercase transition-colors hover:text-[#D6C1A1]"
              >
                Private Inquiry
              </button>
            </div>
          </div>
        </div>

        {/* Quiet Copyright Bar */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[#D6C1A1]/12 pt-8 text-xs font-light tracking-[0.12em] text-[#F3EDE3]/45 sm:flex-row sm:items-center">
          <p>© {currentYear} HOKAI Coffee House. All rights reserved.</p>
          <p>Kyoto Roasting House · Crafted with Restraint</p>
        </div>
      </div>
    </footer>
  );
}
