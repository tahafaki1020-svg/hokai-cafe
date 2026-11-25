import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { SIGNATURE_COFFEES, type CoffeeOffering } from '../data/hokaiData';
import { EditorialImage } from './EditorialImage';

interface CoffeeCollectionSectionProps {
  onSelectCoffee: (coffee: CoffeeOffering) => void;
}

export function CoffeeCollectionSection({
  onSelectCoffee,
}: CoffeeCollectionSectionProps) {
  return (
    <section
      id="collection"
      aria-labelledby="collection-heading"
      className="border-t border-[#211713]/10 bg-[#EDE5D8] py-24 text-[#211713] md:py-36"
    >
      <div className="mx-auto max-w-[1360px] px-6 md:px-12">
        {/* Editorial Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 border-b border-[#211713]/12 pb-10 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <p className="text-[12px] font-medium tracking-[0.24em] text-[#92734C] uppercase">
              Signature Archive
            </p>
            <h2
              id="collection-heading"
              className="mt-4 font-serif text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.06] font-light text-[#211713]"
            >
              Our Coffee
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-[1.8] text-[#211713]/75">
            Three signature expressions curated from seasonal micro-lots. Select any
            harvest to examine its sensory architecture, provenance, and HOKAI ritual
            specifications.
          </p>
        </div>

        {/* 3-Column Uniform Luxury Showcase Grid (Informational Only) */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {SIGNATURE_COFFEES.map((coffee, idx) => (
            <motion.article
              key={coffee.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.75,
                delay: idx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col"
            >
              <button
                type="button"
                onClick={() => onSelectCoffee(coffee)}
                className="flex h-full cursor-pointer flex-col text-left transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1"
              >
                {/* Uniform 3:4 Portrait Container */}
                <div className="w-full overflow-hidden border border-[#211713]/10 bg-[#F3EDE3]">
                  <EditorialImage
                    src={coffee.image}
                    alt={coffee.imageAlt}
                    aspectClassName="aspect-[3/4]"
                    fallbackTitle={coffee.name}
                    hoverZoom
                  />
                </div>

                {/* Unboxed Clean Editorial Metadata */}
                <div className="mt-6 flex flex-1 flex-col">
                  <div className="flex items-center justify-between gap-4 text-[12px] tracking-[0.18em] text-[#92734C] uppercase">
                    <span className="tabular-nums">{coffee.editionNumber}</span>
                    <span className="text-[#211713]/60">{coffee.origin}</span>
                  </div>

                  <div className="mt-2.5 flex items-baseline justify-between gap-4">
                    <h3 className="font-serif text-[2rem] leading-tight font-normal text-[#211713] transition-colors duration-200 group-hover:text-[#92734C]">
                      {coffee.name}
                    </h3>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 text-[#92734C] opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </div>

                  <p className="mt-1 font-serif text-base italic text-[#211713]/65">
                    {coffee.subtitle}
                  </p>

                  <p className="mt-4 flex-1 text-[14.5px] leading-[1.75] text-[#211713]/78">
                    {coffee.shortDescription}
                  </p>

                  {/* Flavour Notes as clean unboxed typographic line with separators */}
                  <div className="mt-6 border-t border-[#211713]/12 pt-4">
                    <span className="block text-[11px] font-medium tracking-[0.2em] text-[#92734C] uppercase">
                      Tasting Notes
                    </span>
                    <p className="mt-1.5 text-[13px] tracking-[0.02em] text-[#211713]/85">
                      {coffee.flavourNotes.join('  ·  ')}
                    </p>
                  </div>
                </div>
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
