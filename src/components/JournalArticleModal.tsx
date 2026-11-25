import { useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import type { JournalArticle } from '../data/hokaiData';
import { EditorialImage } from './EditorialImage';

interface JournalArticleModalProps {
  article: JournalArticle | null;
  onClose: () => void;
}

export function JournalArticleModal({
  article,
  onClose,
}: JournalArticleModalProps) {
  useEffect(() => {
    if (!article) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [article, onClose]);

  return (
    <AnimatePresence>
      {article && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="journal-article-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#151515]/82 p-4 backdrop-blur-sm sm:p-6 md:p-10"
          onClick={onClose}
        >
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto border border-[#D6C1A1]/25 bg-[#F3EDE3] text-[#211713]"
          >
            {/* Sticky Editorial Masthead Bar */}
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#211713]/12 bg-[#F3EDE3]/95 px-6 py-4 backdrop-blur-sm md:px-10">
              <div className="flex items-center gap-2.5 text-[11px] font-medium tracking-[0.2em] text-[#92734C] uppercase">
                <span>HOKAI Journal</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#211713]/60">{article.category}</span>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close journal article"
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center text-[#211713]/75 transition-colors hover:text-[#211713]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-6 py-10 sm:px-10 md:px-14 md:py-14">
              {/* Article Header */}
              <div className="flex flex-wrap items-center gap-2.5 text-[12px] tracking-[0.18em] text-[#211713]/60 uppercase">
                <span>By {article.author}</span>
                <span aria-hidden="true">·</span>
                <span>{article.date}</span>
                <span aria-hidden="true">·</span>
                <span>{article.readTime}</span>
              </div>

              <h2
                id="journal-article-title"
                className="mt-4 font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] font-light text-[#211713]"
              >
                {article.title}
              </h2>

              <p className="mt-4 font-serif text-xl leading-relaxed italic text-[#211713]/72">
                {article.deck}
              </p>

              {/* Editorial Plate */}
              <figure className="my-9">
                <div className="border border-[#211713]/10">
                  <EditorialImage
                    src={article.image}
                    alt={article.imageAlt}
                    aspectClassName="aspect-[16/10]"
                    fallbackTitle={article.title}
                  />
                </div>
                <figcaption className="mt-3 font-serif text-sm italic text-[#211713]/60">
                  {article.figureCaption}
                </figcaption>
              </figure>

              {/* Long-form Editorial Prose (optimal ~65ch measure) */}
              <div className="mx-auto max-w-2xl space-y-6 text-[16px] leading-[1.9] text-[#211713]/85">
                {article.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={index === 0 ? 'editorial-dropcap' : ''}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Editorial Pull Quote */}
              <figure className="my-10 border-y border-[#211713]/15 py-7 text-center">
                <blockquote className="mx-auto max-w-xl font-serif text-2xl leading-[1.4] italic text-[#211713]">
                  “{article.pullQuote}”
                </blockquote>
              </figure>

              <div className="flex justify-center pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="cursor-pointer border border-[#211713]/30 px-7 py-3 text-[11px] font-medium tracking-[0.2em] text-[#211713] uppercase transition-colors hover:border-[#211713] hover:bg-[#211713] hover:text-[#F3EDE3]"
                >
                  Return to Journal
                </button>
              </div>
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
