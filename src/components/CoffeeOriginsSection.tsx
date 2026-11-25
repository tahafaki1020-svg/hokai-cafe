import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  COFFEE_ORIGINS,
  FARM_TO_CUP_STAGES,
  HOKAI_IMAGES,
} from '../data/hokaiData';
import { EditorialImage } from './EditorialImage';

export function CoffeeOriginsSection() {
  const [selectedId, setSelectedId] = useState<string>(COFFEE_ORIGINS[0].id);
  const selectedOrigin =
    COFFEE_ORIGINS.find((origin) => origin.id === selectedId) ?? COFFEE_ORIGINS[0];

  return (
    <section
      id="origins"
      aria-labelledby="origins-heading"
      className="bg-[#F3EDE3] py-24 text-[#211713] md:py-36"
    >
      <div className="mx-auto max-w-[1360px] px-6 md:px-12">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-[12px] font-medium tracking-[0.24em] text-[#92734C] uppercase">
              Equatorial Provenance
            </p>
            <h2
              id="origins-heading"
              className="mt-4 font-serif text-[clamp(2.5rem,4.5vw,4.15rem)] leading-[1.06] font-light text-[#211713]"
            >
              Coffee Origins
            </h2>
          </div>

          <p className="max-w-md text-[15px] leading-[1.8] text-[#211713]/75">
            Along the high volcanic belt between the Tropics of Cancer and Capricorn,
            elevation and mountain mist compose flavors impossible to imitate.
          </p>
        </div>

        {/* Interactive Equatorial Atlas + Origin Dossier */}
        <div className="grid grid-cols-1 gap-10 border-y border-[#211713]/15 py-12 lg:grid-cols-12 lg:gap-12">
          {/* Custom Architectural SVG Coffee Belt Map (7 cols) */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div className="relative overflow-hidden border border-[#211713]/12 bg-[#151515] p-6 sm:p-8">
              <div className="mb-4 flex items-center justify-between text-[11px] tracking-[0.22em] text-[#D6C1A1]/70 uppercase">
                <span>HOKAI Terroir Atlas</span>
                <span className="tabular-nums">23.5° N — 23.5° S</span>
              </div>

              <svg
                viewBox="0 0 1000 460"
                className="h-auto w-full select-none"
                role="img"
                aria-label="Interactive map of HOKAI coffee-growing origins across Panama, Colombia, Ethiopia, and Kyoto"
              >
                {/* Latitude Reference Hairlines */}
                <line
                  x1="20"
                  y1="150"
                  x2="980"
                  y2="150"
                  stroke="#D6C1A1"
                  strokeOpacity="0.16"
                  strokeDasharray="4 6"
                />
                <line
                  x1="20"
                  y1="242"
                  x2="980"
                  y2="242"
                  stroke="#92734C"
                  strokeOpacity="0.45"
                  strokeWidth="1"
                />
                <line
                  x1="20"
                  y1="334"
                  x2="980"
                  y2="334"
                  stroke="#D6C1A1"
                  strokeOpacity="0.16"
                  strokeDasharray="4 6"
                />

                {/* Coffee Belt Subtle Warm Tint Band */}
                <rect
                  x="20"
                  y="150"
                  width="960"
                  height="184"
                  fill="#92734C"
                  fillOpacity="0.06"
                />

                {/* Minimalist Architectural Continents Silhouettes */}
                <g
                  fill="#211713"
                  stroke="#D6C1A1"
                  strokeOpacity="0.22"
                  strokeWidth="1"
                >
                  {/* North & Central America */}
                  <path d="M90,70 L245,58 L280,105 L235,148 L215,176 L245,212 L268,236 L244,234 L212,202 L175,180 L132,144 L95,112 Z" />
                  {/* South America */}
                  <path d="M270,236 L332,248 L368,292 L348,358 L302,428 L278,424 L274,352 L256,294 Z" />
                  {/* Europe */}
                  <path d="M462,62 L582,56 L608,96 L568,128 L522,126 L488,136 L458,118 Z" />
                  {/* Africa */}
                  <path d="M460,152 L556,144 L614,186 L632,240 L592,310 L554,376 L516,374 L496,306 L464,250 L446,196 Z" />
                  {/* Asia */}
                  <path d="M604,64 L828,62 L878,108 L852,164 L816,196 L760,224 L708,214 L672,188 L624,174 L596,130 Z" />
                  {/* Japan Archipelago */}
                  <path d="M832,140 L852,146 L844,172 L826,166 Z" />
                  {/* Oceania */}
                  <path d="M778,306 L868,304 L886,356 L842,384 L782,366 Z" />
                </g>

                {/* Delicate Journey Arcs converging on Kyoto Roastery */}
                <g fill="none" stroke="#92734C" strokeOpacity="0.4" strokeWidth="1">
                  <path d="M256,228 Q540,78 838,156" strokeDasharray="3 5" />
                  <path d="M286,252 Q560,115 838,156" strokeDasharray="3 5" />
                  <path d="M598,238 Q718,162 838,156" strokeDasharray="3 5" />
                </g>

                {/* Latitude Labels */}
                <text
                  x="32"
                  y="144"
                  fill="#D6C1A1"
                  fillOpacity="0.45"
                  fontSize="10"
                  letterSpacing="2"
                >
                  TROPIC OF CANCER
                </text>
                <text
                  x="32"
                  y="236"
                  fill="#92734C"
                  fillOpacity="0.8"
                  fontSize="10"
                  letterSpacing="2"
                >
                  EQUATOR 0°
                </text>
                <text
                  x="32"
                  y="348"
                  fill="#D6C1A1"
                  fillOpacity="0.45"
                  fontSize="10"
                  letterSpacing="2"
                >
                  TROPIC OF CAPRICORN
                </text>

                {/* Interactive Origin Coordinates */}
                {COFFEE_ORIGINS.map((origin) => {
                  const isSelected = origin.id === selectedOrigin.id;
                  return (
                    <g
                      key={origin.id}
                      onClick={() => setSelectedId(origin.id)}
                      className="cursor-pointer"
                      role="button"
                      tabIndex={0}
                      aria-label={`Select ${origin.region}, ${origin.country}`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setSelectedId(origin.id);
                        }
                      }}
                    >
                      {isSelected && (
                        <circle
                          cx={origin.mapX}
                          cy={origin.mapY}
                          r="18"
                          fill="#92734C"
                          fillOpacity="0.22"
                          stroke="#D6C1A1"
                          strokeOpacity="0.7"
                          strokeWidth="1"
                        />
                      )}
                      <circle
                        cx={origin.mapX}
                        cy={origin.mapY}
                        r={isSelected ? '6.5' : '4.5'}
                        fill={isSelected ? '#F3EDE3' : '#92734C'}
                        stroke="#151515"
                        strokeWidth="1.5"
                      />
                      <text
                        x={origin.mapX}
                        y={origin.mapY - 14}
                        textAnchor="middle"
                        fill={isSelected ? '#F3EDE3' : '#D6C1A1'}
                        fillOpacity={isSelected ? '1' : '0.75'}
                        fontSize="11"
                        fontFamily="Manrope, sans-serif"
                        letterSpacing="1.8"
                      >
                        {origin.country.toUpperCase()}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Origin Selector Strip below map */}
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#D6C1A1]/15 pt-5">
                {COFFEE_ORIGINS.map((origin) => {
                  const isSelected = origin.id === selectedOrigin.id;
                  return (
                    <button
                      key={origin.id}
                      type="button"
                      onClick={() => setSelectedId(origin.id)}
                      className={`shrink-0 cursor-pointer whitespace-nowrap pb-1 text-xs tracking-[0.18em] uppercase transition-colors duration-200 ${
                        isSelected
                          ? 'border-b border-[#D6C1A1] font-medium text-[#F3EDE3]'
                          : 'text-[#D6C1A1]/55 hover:text-[#D6C1A1]'
                      }`}
                    >
                      <span className="mr-2 text-[#92734C] tabular-nums">
                        {origin.code}
                      </span>
                      {origin.country}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Active Origin Provenance Card */}
          <div className="flex flex-col justify-center lg:col-span-5 lg:pl-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedOrigin.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 text-[12px] tracking-[0.2em] text-[#92734C] uppercase">
                  <span className="tabular-nums">{selectedOrigin.code}</span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedOrigin.coordinates}</span>
                </div>

                <h3 className="mt-3 font-serif text-[2.25rem] leading-tight font-normal text-[#211713] md:text-[2.65rem]">
                  {selectedOrigin.region}
                </h3>
                <p className="font-serif text-lg italic text-[#211713]/65">
                  {selectedOrigin.country}
                </p>

                <p className="mt-6 text-[15px] leading-[1.82] text-[#211713]/82">
                  {selectedOrigin.story}
                </p>

                <dl className="mt-8 divide-y divide-[#211713]/12 border-y border-[#211713]/12 text-sm">
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="text-[11px] tracking-[0.18em] text-[#92734C] uppercase">
                      Elevation
                    </dt>
                    <dd className="text-right font-medium text-[#211713] tabular-nums">
                      {selectedOrigin.elevation}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="text-[11px] tracking-[0.18em] text-[#92734C] uppercase">
                      Harvest Window
                    </dt>
                    <dd className="text-right text-[#211713]">
                      {selectedOrigin.harvestWindow}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="text-[11px] tracking-[0.18em] text-[#92734C] uppercase">
                      Terroir
                    </dt>
                    <dd className="text-right text-[#211713]">
                      {selectedOrigin.terroir}
                    </dd>
                  </div>
                  <div className="flex items-baseline justify-between gap-4 py-3.5">
                    <dt className="text-[11px] tracking-[0.18em] text-[#92734C] uppercase">
                      Cup Signature
                    </dt>
                    <dd className="text-right italic text-[#211713]/85">
                      {selectedOrigin.flavourSignature}
                    </dd>
                  </div>
                </dl>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Wide Editorial Highland Terroir Plate + Farm to Cup Ledger */}
        <div className="mt-16">
          <div className="group border border-[#211713]/10">
            <EditorialImage
              src={HOKAI_IMAGES.highlandTerroir}
              alt="High-altitude volcanic mountain coffee estates in golden morning mist with ripe red coffee cherries in foreground"
              aspectClassName="aspect-[16/8] sm:aspect-[21/9]"
              fallbackTitle="Highland Terroir"
              hoverZoom
            />
          </div>
          <p className="mt-3.5 font-serif text-sm italic text-[#211713]/65">
            Plate II — First light above cloud-forest Arabica estates along the equatorial ridge.
          </p>

          {/* 4-Stage Farm-to-Cup Journey Ledger */}
          <div className="mt-14 grid grid-cols-1 gap-8 border-t border-[#211713]/15 pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {FARM_TO_CUP_STAGES.map((stage) => (
              <div key={stage.step} className="space-y-3">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-medium tracking-[0.2em] text-[#92734C] tabular-nums">
                    {stage.step}
                  </span>
                  <h4 className="font-serif text-2xl font-normal text-[#211713]">
                    {stage.title}
                  </h4>
                </div>
                <p className="text-sm leading-[1.75] text-[#211713]/75">
                  {stage.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
