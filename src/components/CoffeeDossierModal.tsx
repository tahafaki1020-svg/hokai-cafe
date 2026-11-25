import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import type { CoffeeOffering } from '../data/hokaiData';
import { EditorialImage } from './EditorialImage';

interface CoffeeDossierModalProps {
  coffee: CoffeeOffering | null;
  onClose: () => void;
  onRequestTasting: () => void;
}

export function CoffeeDossierModal({
  coffee,
  onClose,
  onRequestTasting,
}: CoffeeDossierModalProps) {
  useEffect(() => {
    if (!coffee) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [coffee, onClose]);

  const sensoryRows = coffee
    ? [
        { label: 'Clarity', value: coffee.sensory.clarity },
        { label: 'Sweetness', value: coffee.sensory.sweetness },
        { label: 'Body', value: coffee.sensory.body },
        { label: 'Aromatic Lift', value: coffee.sensory.aroma },
      ]
    : [];

  return (
    <AnimatePresence>
      {coffee && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="coffee-dossier-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#151515]/80 p-4 backdrop-blur-sm sm:p-6 md:p-10"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto border border-[#D6C1A1]/25 bg-[#F3EDE3] text-[#211713]"
          >
            {/* Top Bar */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#211713]/12 bg-[#F3EDE3]/95 px-6 py-4 backdrop-blur-sm md:px-10">
              <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.22em] text-[#92734C] uppercase">
                <span className="tabular-nums">{coffee.editionNumber}</span>
                <span aria-hidden="true">·</span>
                <span>Tasting Dossier</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close tasting dossier"
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center text-[#211713]/75 transition-colors hover:text-[#211713]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Image Plate */}
              <div className="border-b border-[#211713]/12 lg:col-span-5 lg:border-r lg:border-b-0">
                <EditorialImage
                  src={coffee.image}
                  alt={coffee.imageAlt}
                  aspectClassName="aspect-[4/3] lg:h-full lg:aspect-auto"
                  fallbackTitle={coffee.name}
                />
              </div>

              {/* Right Provenance & Ritual Specs */}
              <div className="p-6 sm:p-8 md:p-10 lg:col-span-7">
                <p className="text-[12px] tracking-[0.2em] text-[#92734C] uppercase">
                  {coffee.origin} · {coffee.altitude}
                </p>

                <h2
                  id="coffee-dossier-title"
                  className="mt-2 font-serif text-[2.5rem] leading-tight font-normal text-[#211713]"
                >
                  {coffee.name}
                </h2>
                <p className="font-serif text-lg italic text-[#211713]/65">
                  {coffee.subtitle}
                </p>

                <p className="mt-5 text-[15px] leading-[1.82] text-[#211713]/82">
                  {coffee.editorialStory}
                </p>

                {/* Flavour Notes */}
                <div className="mt-7 border-y border-[#211713]/12 py-4">
                  <span className="text-[11px] font-medium tracking-[0.2em] text-[#92734C] uppercase">
                    Aromatic Profile
                  </span>
                  <p className="mt-1.5 font-serif text-xl text-[#211713]">
                    {coffee.flavourNotes.join('  ·  ')}
                  </p>
                </div>

                {/* Provenance Definition Grid */}
                <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
                  <div>
                    <dt className="text-[11px] tracking-[0.18em] text-[#92734C] uppercase">
                      Region
                    </dt>
                    <dd className="mt-1 text-[#211713]">{coffee.region}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] tracking-[0.18em] text-[#92734C] uppercase">
                      Varietal
                    </dt>
                    <dd className="mt-1 text-[#211713]">{coffee.varietal}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] tracking-[0.18em] text-[#92734C] uppercase">
                      Process
                    </dt>
                    <dd className="mt-1 text-[#211713]">{coffee.process}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] tracking-[0.18em] text-[#92734C] uppercase">
                      Roast Profile
                    </dt>
                    <dd className="mt-1 text-[#211713]">{coffee.roastProfile}</dd>
                  </div>
                </dl>

                {/* Sensory Architecture Bars */}
                <div className="mt-8 space-y-3.5 border-t border-[#211713]/12 pt-6">
                  <span className="block text-[11px] font-medium tracking-[0.2em] text-[#92734C] uppercase">
                    Sensory Balance
                  </span>
                  {sensoryRows.map((row) => (
                    <div key={row.label} className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-[#211713]/80">{row.label}</span>
                        <span className="text-[#211713]/60 tabular-nums">
                          {row.value} / 100
                        </span>
                      </div>
                      <div className="h-[2px] w-full bg-[#211713]/12">
                        <div
                          className="h-full bg-[#92734C]"
                          style={{ width: `${row.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* HOKAI Recommended Brewing Ritual */}
                <div className="mt-8 border border-[#211713]/12 bg-[#EDE5D8] p-5">
                  <span className="block text-[11px] font-medium tracking-[0.2em] text-[#92734C] uppercase">
                    Recommended HOKAI Ritual · {coffee.ritual.method}
                  </span>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-xs sm:grid-cols-4">
                    <div>
                      <span className="block text-[#211713]/55">Ratio</span>
                      <span className="mt-0.5 block font-medium text-[#211713] tabular-nums">
                        {coffee.ritual.dose}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[#211713]/55">Temperature</span>
                      <span className="mt-0.5 block font-medium text-[#211713] tabular-nums">
                        {coffee.ritual.waterTemp}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[#211713]/55">Extraction</span>
                      <span className="mt-0.5 block font-medium text-[#211713] tabular-nums">
                        {coffee.ritual.extraction}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[#211713]/55">Vessel</span>
                      <span className="mt-0.5 block font-medium text-[#211713]">
                        {coffee.ritual.vessel}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                  <p className="text-xs italic text-[#211713]/60">
                    Served exclusively in HOKAI Private Salons & Seasonal Archive.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onRequestTasting();
                    }}
                    className="cursor-pointer border border-[#211713] bg-[#211713] px-6 py-3 text-[11px] font-medium tracking-[0.2em] text-[#F3EDE3] uppercase transition-colors hover:border-[#92734C] hover:bg-[#92734C]"
                  >
                    Inquire for Tasting
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
