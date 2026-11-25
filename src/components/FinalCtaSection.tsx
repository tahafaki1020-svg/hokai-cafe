import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { HOKAI_IMAGES } from '../data/hokaiData';
import { EditorialImage } from './EditorialImage';

interface FinalCtaSectionProps {
  onExploreWorld: () => void;
}

export function FinalCtaSection({ onExploreWorld }: FinalCtaSectionProps) {
  return (
    <section
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-[#151515] py-32 text-[#F3EDE3] md:py-44"
    >
      {/* Atmospheric background plate with deep obsidian vignette */}
      <div className="absolute inset-0">
        <EditorialImage
          src={HOKAI_IMAGES.roastingAtelier}
          alt="Freshly roasted specialty beans cooling inside the HOKAI Kyoto atelier"
          className="h-full w-full opacity-35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#151515] via-[#211713]/75 to-[#151515]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center md:px-12"
      >
        <p className="text-[12px] font-medium tracking-[0.26em] text-[#D6C1A1] uppercase">
          Private Salons · Seasonal Monograph
        </p>

        <h2
          id="final-cta-heading"
          className="mt-5 font-serif text-[clamp(2.75rem,6vw,5rem)] leading-[1.04] font-light text-[#F3EDE3]"
        >
          Make Every Cup Count.
        </h2>

        <div className="mx-auto my-8 h-px w-20 bg-[#92734C]" />

        <p className="mx-auto max-w-xl text-[15.5px] leading-[1.85] font-light tracking-[0.01em] text-[#F3EDE3]/80">
          Step inside our tasting rooms in Tokyo, Paris, and Milan, or receive our
          seasonal Harvest Monograph celebrating the world’s rarest mountain lots.
        </p>

        <div className="mt-11">
          <button
            type="button"
            onClick={onExploreWorld}
            className="group inline-flex cursor-pointer items-center gap-3.5 border border-[#92734C] bg-[#92734C] px-9 py-4 text-[12px] font-medium tracking-[0.22em] text-[#151515] uppercase transition-colors duration-200 hover:border-[#D6C1A1] hover:bg-[#D6C1A1]"
          >
            <span>Explore Our World</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
