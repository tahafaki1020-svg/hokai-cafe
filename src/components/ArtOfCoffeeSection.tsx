import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { CRAFT_CHAPTERS } from '../data/hokaiData';
import { EditorialImage } from './EditorialImage';

export function ArtOfCoffeeSection() {
  const [activeId, setActiveId] = useState<string>(CRAFT_CHAPTERS[0].id);
  const activeChapter =
    CRAFT_CHAPTERS.find((chapter) => chapter.id === activeId) ?? CRAFT_CHAPTERS[0];

  return (
    <section
      id="craft"
      aria-labelledby="craft-heading"
      className="bg-[#211713] py-24 text-[#F3EDE3] md:py-36"
    >
      <div className="mx-auto max-w-[1360px] px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-[12px] font-medium tracking-[0.24em] text-[#D6C1A1] uppercase">
            Four Disciplines of Craft
          </p>
          <h2
            id="craft-heading"
            className="mt-4 font-serif text-[clamp(2.5rem,4.5vw,4.15rem)] leading-[1.06] font-light text-[#F3EDE3]"
          >
            The Art of Coffee
          </h2>
          <p className="mt-5 text-[15.5px] leading-[1.8] font-light tracking-[0.01em] text-[#F3EDE3]/75">
            Every HOKAI cup is composed through four deliberate stages—from optical
            cherry selection at altitude to the silent geometry of the morning pour.
          </p>
        </div>

        {/* Asymmetric Interactive Storytelling Grid */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column (5 cols): Editorial Chapter Index */}
          <div
            role="tablist"
            aria-label="The Art of Coffee chapters"
            className="flex flex-col border-t border-[#D6C1A1]/18 lg:col-span-5"
          >
            {CRAFT_CHAPTERS.map((chapter) => {
              const isActive = chapter.id === activeChapter.id;
              return (
                <button
                  key={chapter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveId(chapter.id)}
                  className={`group cursor-pointer border-b border-[#D6C1A1]/18 py-7 text-left transition-colors duration-200 ${
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-90'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="flex items-baseline gap-5">
                      <span
                        className={`text-xs font-medium tracking-[0.22em] tabular-nums transition-colors ${
                          isActive ? 'text-[#D6C1A1]' : 'text-[#92734C]'
                        }`}
                      >
                        {chapter.index}
                      </span>
                      <h3 className="font-serif text-[1.75rem] leading-tight font-light text-[#F3EDE3] md:text-[2rem]">
                        {chapter.title}
                      </h3>
                    </div>

                    <span
                      aria-hidden="true"
                      className={`h-px w-8 shrink-0 transition-all duration-300 ${
                        isActive
                          ? 'bg-[#D6C1A1] opacity-100'
                          : 'bg-[#92734C]/40 opacity-0 group-hover:opacity-60'
                      }`}
                    />
                  </div>

                  <p className="mt-2 pl-10 text-xs tracking-[0.16em] text-[#D6C1A1]/80 uppercase">
                    {chapter.subtitle}
                  </p>

                  {/* Expanded editorial body on active chapter */}
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-5 pl-10 space-y-3">
                          <p className="text-[14.5px] leading-[1.8] font-light tracking-[0.01em] text-[#F3EDE3]/80">
                            {chapter.description}
                          </p>
                          <p className="text-[13.5px] leading-[1.75] font-light text-[#D6C1A1]/75">
                            {chapter.detailNote}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Right Column (7 cols): Cinematic Chapter Plate & Precision Readout */}
          <div className="lg:sticky lg:top-28 lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChapter.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="border border-[#D6C1A1]/15 bg-[#151515]">
                  <EditorialImage
                    src={activeChapter.image}
                    alt={activeChapter.imageAlt}
                    aspectClassName="aspect-[4/3]"
                    fallbackTitle={activeChapter.title}
                  />
                </div>

                <div className="mt-6 flex flex-col justify-between gap-4 border-t border-[#D6C1A1]/15 pt-5 sm:flex-row sm:items-baseline">
                  <p className="font-serif text-sm italic text-[#D6C1A1]/80">
                    {activeChapter.caption}
                  </p>
                  <div className="flex shrink-0 items-baseline gap-3 text-xs tracking-[0.18em] uppercase">
                    <span className="text-[#F3EDE3]/55">
                      {activeChapter.metricLabel}
                    </span>
                    <span className="font-medium text-[#D6C1A1] tabular-nums">
                      {activeChapter.metricValue}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
