import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

interface NavbarProps {
  onOpenWorld: () => void;
}

const NAV_LINKS = [
  { label: 'Story', href: '#story' },
  { label: 'Collection', href: '#collection' },
  { label: 'Craft', href: '#craft' },
  { label: 'Origins', href: '#origins' },
  { label: 'Journal', href: '#journal' },
];

export function Navbar({ onOpenWorld }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 48);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
          scrolled
            ? 'border-b border-[#D6C1A1]/15 bg-[#151515]/92 backdrop-blur-md'
            : 'border-b border-transparent bg-gradient-to-b from-[#151515]/75 to-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-[1360px] items-center justify-between gap-8 px-6 md:h-20 md:px-12">
          {/* Zone 1: Single-element Brand Wordmark */}
          <a
            href="#top"
            className="shrink-0 whitespace-nowrap font-serif text-2xl font-medium tracking-[0.26em] text-[#F3EDE3] transition-colors duration-200 hover:text-[#D6C1A1]"
          >
            HOKAI
          </a>

          {/* Zone 2: 5 concise single-line navigation links */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-9 md:flex"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative shrink-0 whitespace-nowrap py-1 text-[13px] font-normal tracking-[0.14em] text-[#F3EDE3]/80 uppercase transition-colors duration-200 hover:text-[#F3EDE3]"
              >
                {link.label}
                <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#92734C] transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Single primary action (desktop) + menu button (mobile) */}
          <div className="flex shrink-0 items-center">
            <button
              type="button"
              onClick={onOpenWorld}
              className="hidden shrink-0 cursor-pointer whitespace-nowrap border border-[#D6C1A1]/35 px-5 py-2.5 text-[12px] font-medium tracking-[0.16em] text-[#F3EDE3] uppercase transition-colors duration-200 hover:border-[#92734C] hover:bg-[#92734C] hover:text-[#151515] md:inline-flex"
            >
              Private Salon
            </button>

            <button
              type="button"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 cursor-pointer items-center justify-center text-[#F3EDE3] transition-colors hover:text-[#D6C1A1] md:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen luxury drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-[#151515] px-6 py-5 md:hidden"
          >
            <div className="flex items-center justify-between border-b border-[#D6C1A1]/15 pb-4">
              <a
                href="#top"
                onClick={() => setMobileOpen(false)}
                className="font-serif text-2xl font-medium tracking-[0.26em] text-[#F3EDE3]"
              >
                HOKAI
              </a>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setMobileOpen(false)}
                className="inline-flex h-11 w-11 cursor-pointer items-center justify-center text-[#F3EDE3]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav
              aria-label="Mobile navigation"
              className="flex flex-1 flex-col justify-center gap-6"
            >
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.3 }}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-baseline justify-between border-b border-[#D6C1A1]/10 pb-4 font-serif text-3xl font-light tracking-wide text-[#F3EDE3] transition-colors hover:text-[#D6C1A1]"
                >
                  <span>{link.label}</span>
                  <span className="font-sans text-xs tracking-[0.2em] text-[#92734C] tabular-nums">
                    0{idx + 1}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="pt-6 pb-4">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onOpenWorld();
                }}
                className="w-full cursor-pointer border border-[#92734C] bg-[#92734C] px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-[#151515] uppercase transition-colors hover:bg-[#D6C1A1]"
              >
                Explore Our World
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
