import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { JOURNAL_ARTICLES, type JournalArticle } from '../data/hokaiData';
import { EditorialImage } from './EditorialImage';

interface JournalSectionProps {
  onSelectArticle: (article: JournalArticle) => void;
}

const CATEGORIES = [
  'All',
  'Coffee Culture',
  'Brewing Guides',
  'Coffee Origins',
  'Lifestyle',
] as const;

type CategoryFilter = (typeof CATEGORIES)[number];

export function JournalSection({ onSelectArticle }: JournalSectionProps) {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');

  const filteredArticles =
    activeCategory === 'All'
      ? JOURNAL_ARTICLES
      : JOURNAL_ARTICLES.filter((article) => article.category === activeCategory);

  const leadArticle = filteredArticles[0];
  const secondaryArticles = filteredArticles.slice(1);

  return (
    <section
      id="journal"
      aria-labelledby="journal-heading"
      className="border-t border-[#211713]/10 bg-[#EDE5D8] py-24 text-[#211713] md:py-36"
    >
      <div className="mx-auto max-w-[1360px] px-6 md:px-12">
        {/* Editorial Masthead & Interactive Category Filter */}
        <div className="mb-14 flex flex-col justify-between gap-8 border-b border-[#211713]/15 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-[12px] font-medium tracking-[0.24em] text-[#92734C] uppercase">
              Editorial Monograph
            </p>
            <h2
              id="journal-heading"
              className="mt-4 font-serif text-[clamp(2.5rem,4.5vw,4.15rem)] leading-[1.06] font-light text-[#211713]"
            >
              HOKAI Journal
            </h2>
          </div>

          {/* Functional Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter journal stories by topic"
            className="flex flex-wrap items-center gap-x-6 gap-y-2.5"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`shrink-0 cursor-pointer whitespace-nowrap pb-1.5 text-[12px] tracking-[0.16em] uppercase transition-colors duration-200 ${
                    isActive
                      ? 'border-b border-[#211713] font-medium text-[#211713]'
                      : 'text-[#211713]/55 hover:text-[#211713]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Tier Salience Editorial Front-Page Layout */}
        {leadArticle && (
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
            {/* Lead Feature Story (7 cols) */}
            <motion.article
              key={leadArticle.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`group ${
                secondaryArticles.length > 0 ? 'lg:col-span-7' : 'lg:col-span-12'
              }`}
            >
              <button
                type="button"
                onClick={() => onSelectArticle(leadArticle)}
                className="block w-full cursor-pointer text-left"
              >
                <div className="overflow-hidden border border-[#211713]/10 bg-[#F3EDE3]">
                  <EditorialImage
                    src={leadArticle.image}
                    alt={leadArticle.imageAlt}
                    aspectClassName={
                      secondaryArticles.length > 0
                        ? 'aspect-[4/3]'
                        : 'aspect-[16/8]'
                    }
                    fallbackTitle={leadArticle.title}
                    hoverZoom
                  />
                </div>

                {/* Unboxed quiet metadata */}
                <div className="mt-6 flex flex-wrap items-center gap-2.5 text-[12px] tracking-[0.16em] text-[#92734C] uppercase">
                  <span>{leadArticle.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#211713]/60">{leadArticle.date}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#211713]/60">{leadArticle.readTime}</span>
                </div>

                <h3 className="mt-3 font-serif text-[clamp(2rem,3vw,2.75rem)] leading-[1.12] font-normal text-[#211713] transition-colors duration-200 group-hover:text-[#92734C]">
                  {leadArticle.title}
                </h3>

                <p className="mt-4 max-w-2xl text-[15.5px] leading-[1.8] text-[#211713]/78">
                  {leadArticle.deck}
                </p>

                <div className="mt-6 inline-flex items-center gap-2.5 text-[12px] font-medium tracking-[0.2em] text-[#211713] uppercase transition-colors group-hover:text-[#92734C]">
                  <span>Read Essay</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </button>
            </motion.article>

            {/* Secondary Curated Stories Stack (5 cols) */}
            {secondaryArticles.length > 0 && (
              <div className="flex flex-col divide-y divide-[#211713]/15 border-t border-[#211713]/15 lg:col-span-5 lg:border-t-0">
                {secondaryArticles.map((article, idx) => (
                  <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.65,
                      delay: idx * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`group ${idx === 0 ? 'pb-8 lg:pt-0' : 'py-8'}`}
                  >
                    <button
                      type="button"
                      onClick={() => onSelectArticle(article)}
                      className="grid w-full cursor-pointer grid-cols-1 gap-5 text-left sm:grid-cols-12 sm:items-center"
                    >
                      <div className="overflow-hidden border border-[#211713]/10 sm:col-span-5">
                        <EditorialImage
                          src={article.image}
                          alt={article.imageAlt}
                          aspectClassName="aspect-[4/3]"
                          fallbackTitle={article.title}
                          hoverZoom
                        />
                      </div>

                      <div className="sm:col-span-7">
                        <div className="flex flex-wrap items-center gap-2 text-[11px] tracking-[0.16em] text-[#92734C] uppercase">
                          <span>{article.category}</span>
                          <span aria-hidden="true">·</span>
                          <span className="text-[#211713]/55">
                            {article.readTime}
                          </span>
                        </div>

                        <h3 className="mt-2 font-serif text-[1.5rem] leading-[1.2] font-normal text-[#211713] transition-colors duration-200 group-hover:text-[#92734C]">
                          {article.title}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-[13.5px] leading-[1.7] text-[#211713]/72">
                          {article.deck}
                        </p>
                      </div>
                    </button>
                  </motion.article>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
