import { motion } from 'motion/react';
import { HOKAI_IMAGES } from '../data/hokaiData';
import { EditorialImage } from './EditorialImage';

const PHILOSOPHY_PILLARS = [
  {
    index: '01',
    label: 'Provenance',
    detail: 'Single-estate micro-lots above 1,750 meters',
  },
  {
    index: '02',
    label: 'Restraint',
    detail: 'Small-batch cast-iron roasting in Kyoto',
  },
  {
    index: '03',
    label: 'Presence',
    detail: 'Designed around unhurried morning ceremony',
  },
];

export function BrandStorySection() {
  return (
    <section
      id="story"
      aria-labelledby="story-heading"
      className="bg-[#F3EDE3] py-24 text-[#211713] md:py-36"
    >
      <div className="mx-auto max-w-[1360px] px-6 md:px-12">
        {/* Asymmetric 12-column luxury editorial spread */}
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left Editorial Column (5 cols) — Staggered Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="group">
              <EditorialImage
                src={HOKAI_IMAGES.story}
                alt="Minimalist dark stoneware coffee cup on warm travertine stone bathed in morning window shadows"
                aspectClassName="aspect-[3/4]"
                hoverZoom
              />
            </div>
            <p className="mt-4 font-serif text-sm italic text-[#211713]/65">
              Plate I — Morning shadow study on honed Roman travertine, Minami-Aoyama Salon.
            </p>
          </motion.div>

          {/* Right Editorial Column (7 cols) — Philosophy & Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-7 lg:pl-8 lg:pt-8"
          >
            <div>
              <p className="text-[12px] font-medium tracking-[0.24em] text-[#92734C] uppercase">
                Brand Philosophy
              </p>

              <h2
                id="story-heading"
                className="mt-4 font-serif text-[clamp(2.5rem,4.5vw,4.15rem)] leading-[1.06] font-light tracking-[-0.01em] text-[#211713]"
              >
                More Than Just Coffee.
              </h2>

              <div className="my-8 h-px w-full bg-[#211713]/12" />

              <div className="max-w-2xl space-y-6 text-[16px] leading-[1.85] font-normal text-[#211713]/82">
                <p className="editorial-dropcap">
                  Born from a quiet conviction that what we drink each morning shapes
                  the tenor of the day, HOKAI approaches coffee with the discipline of
                  haute parfumerie and the reverence of traditional Japanese tea culture.
                  We reject hurried utility in favor of stillness, clarity, and tactile
                  beauty.
                </p>
                <p>
                  Every harvest in our seasonal archive represents months of mountain
                  mist, generational agricultural wisdom, and patient collaboration with
                  independent growers. By the time a cup is poured, nothing extraneous
                  remains—only pure terroir suspended in dark, luminous equilibrium.
                </p>
              </div>

              {/* Understated horizontal hairline pull-quote (zero left-accent bars) */}
              <figure className="my-12 border-y border-[#211713]/15 py-8">
                <blockquote className="font-serif text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.35] font-light italic text-[#211713]">
                  “A cup of coffee should not accelerate the hour; it should expand it.”
                </blockquote>
                <figcaption className="mt-4 text-[12px] tracking-[0.2em] text-[#92734C] uppercase">
                  HOKAI House Manifesto · Established in Kyoto
                </figcaption>
              </figure>
            </div>

            {/* Quiet 3-column index ledger */}
            <div className="grid grid-cols-1 gap-8 pt-2 sm:grid-cols-3">
              {PHILOSOPHY_PILLARS.map((pillar) => (
                <div key={pillar.index} className="space-y-2">
                  <div className="flex items-baseline gap-2.5 text-[12px] tracking-[0.2em] uppercase">
                    <span className="text-[#92734C] tabular-nums">{pillar.index}</span>
                    <span className="font-medium text-[#211713]">{pillar.label}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-[#211713]/70">
                    {pillar.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
