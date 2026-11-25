import { motion } from 'motion/react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { HOKAI_IMAGES } from '../data/hokaiData';
import { EditorialImage } from './EditorialImage';

export function HeroSection() {
  const handleDiscover = () => {
    const storyEl = document.getElementById('story');
    if (storyEl) {
      storyEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="top"
      aria-label="HOKAI Introduction"
      className="relative flex min-h-[100svh] w-full items-end overflow-hidden bg-[#151515] pb-16 pt-28 md:items-center md:pb-24 md:pt-32"
    >
      {/* Full-bleed cinematic coffee backdrop */}
      <div className="absolute inset-0">
        <EditorialImage
          src={HOKAI_IMAGES.hero}
          alt="Velvety golden espresso pouring from a matte-black spout into a handcrafted dark basalt stoneware cup"
          priority
          className="h-full w-full"
          imgClassName="object-cover object-center md:object-[65%_center]"
        />
        {/* Measured dual-axis chiaroscuro scrim for guaranteed WCAG AA legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#151515]/92 via-[#151515]/60 to-[#151515]/20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-[#151515]/45"
        />
      </div>

      {/* Editorial Hero Composition */}
      <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 md:px-12">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 text-[12px] font-medium tracking-[0.26em] text-[#D6C1A1] uppercase"
          >
            Kyoto · Single-Origin Coffee House
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(3.75rem,9vw,7.5rem)] leading-[0.92] font-light tracking-[0.14em] text-[#F3EDE3]"
          >
            HOKAI
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-serif text-[clamp(1.65rem,3vw,2.5rem)] leading-tight font-light italic tracking-[0.02em] text-[#D6C1A1]"
          >
            Beyond the Ordinary Brew.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="my-7 h-px w-20 origin-left bg-[#92734C]"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-lg text-[15px] leading-[1.8] font-light tracking-[0.01em] text-[#F3EDE3]/80 md:text-base"
          >
            Rare high-altitude harvests roasted in twelve-kilogram cast-iron batches.
            HOKAI elevates the daily cup into an unhurried sensory ritual defined by
            clarity, provenance, and architectural calm.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex items-center gap-8"
          >
            <button
              type="button"
              onClick={handleDiscover}
              className="group inline-flex cursor-pointer items-center gap-3.5 border border-[#D6C1A1]/50 bg-[#F3EDE3] px-8 py-4 text-[12px] font-medium tracking-[0.2em] text-[#151515] uppercase transition-colors duration-200 hover:border-[#92734C] hover:bg-[#92734C] hover:text-[#F3EDE3]"
            >
              <span>Discover HOKAI</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.a
        href="#story"
        aria-label="Scroll to brand story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2.5 text-[11px] tracking-[0.24em] text-[#D6C1A1]/75 uppercase transition-colors hover:text-[#F3EDE3] md:flex"
      >
        <span>Scroll</span>
        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="h-3.5 w-3.5 text-[#92734C]" />
        </motion.span>
      </motion.a>
    </section>
  );
}
