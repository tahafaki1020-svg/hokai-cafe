import { useEffect, useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, X } from 'lucide-react';
import { ATELIER_SALONS } from '../data/hokaiData';

interface WorldAtelierModalProps {
  open: boolean;
  onClose: () => void;
}

type ModalTab = 'salons' | 'invitation';

export function WorldAtelierModal({ open, onClose }: WorldAtelierModalProps) {
  const [activeTab, setActiveTab] = useState<ModalTab>('salons');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [preferredCity, setPreferredCity] = useState('Tokyo — Minami-Aoyama');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName) {
      setError('Please enter your name.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setError('');
    setSubmitted(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="world-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#151515]/82 p-4 backdrop-blur-sm sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto border border-[#D6C1A1]/22 bg-[#151515] text-[#F3EDE3]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#D6C1A1]/15 px-6 py-5 sm:px-8">
              <span className="font-serif text-xl tracking-[0.26em] text-[#F3EDE3]">
                HOKAI
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close HOKAI World dialog"
                className="inline-flex h-10 w-10 cursor-pointer items-center justify-center text-[#D6C1A1]/80 transition-colors hover:text-[#F3EDE3]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <p className="text-[11px] font-medium tracking-[0.24em] text-[#92734C] uppercase">
                The World of HOKAI
              </p>
              <h2
                id="world-modal-title"
                className="mt-2 font-serif text-3xl font-light text-[#F3EDE3] sm:text-4xl"
              >
                Private Salons & Harvest Monograph
              </h2>

              {/* Clean Segmented Tabs */}
              <div
                role="tablist"
                aria-label="HOKAI World sections"
                className="mt-7 flex gap-8 border-b border-[#D6C1A1]/15"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'salons'}
                  onClick={() => setActiveTab('salons')}
                  className={`cursor-pointer pb-3 text-xs tracking-[0.18em] uppercase transition-colors ${
                    activeTab === 'salons'
                      ? 'border-b border-[#D6C1A1] font-medium text-[#F3EDE3]'
                      : 'text-[#D6C1A1]/55 hover:text-[#D6C1A1]'
                  }`}
                >
                  Flagship Salons
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeTab === 'invitation'}
                  onClick={() => setActiveTab('invitation')}
                  className={`cursor-pointer pb-3 text-xs tracking-[0.18em] uppercase transition-colors ${
                    activeTab === 'invitation'
                      ? 'border-b border-[#D6C1A1] font-medium text-[#F3EDE3]'
                      : 'text-[#D6C1A1]/55 hover:text-[#D6C1A1]'
                  }`}
                >
                  Private Invitation
                </button>
              </div>

              {activeTab === 'salons' ? (
                <div className="mt-7 divide-y divide-[#D6C1A1]/14">
                  {ATELIER_SALONS.map((salon) => (
                    <div key={salon.city} className="py-5 first:pt-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-serif text-2xl font-normal text-[#F3EDE3]">
                          {salon.city}
                          <span className="ml-3 font-sans text-xs tracking-[0.18em] text-[#92734C] uppercase">
                            {salon.district}
                          </span>
                        </h3>
                        <span className="text-xs text-[#D6C1A1]/70">
                          {salon.hours}
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-light text-[#F3EDE3]/70">
                        {salon.address}
                      </p>
                      <p className="mt-1.5 text-sm italic text-[#D6C1A1]/85">
                        {salon.experience}
                      </p>
                    </div>
                  ))}

                  <div className="pt-7">
                    <button
                      type="button"
                      onClick={() => setActiveTab('invitation')}
                      className="w-full cursor-pointer border border-[#92734C] bg-[#92734C] px-6 py-3.5 text-xs font-medium tracking-[0.2em] text-[#151515] uppercase transition-colors hover:bg-[#D6C1A1]"
                    >
                      Request a Private Tasting
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-7">
                  {submitted ? (
                    <div className="border border-[#92734C]/40 bg-[#211713] p-7 text-center">
                      <div className="mx-auto flex h-11 w-11 items-center justify-center border border-[#92734C] text-[#D6C1A1]">
                        <Check className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 font-serif text-2xl font-normal text-[#F3EDE3]">
                        Invitation Request Received
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed font-light text-[#F3EDE3]/75">
                        Thank you, {name}. Our concierge for {preferredCity} will send
                        your Seasonal Harvest Monograph and private salon availability
                        to <span className="text-[#D6C1A1]">{email}</span>.
                      </p>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="mt-6 cursor-pointer border border-[#D6C1A1]/35 px-6 py-2.5 text-[11px] tracking-[0.2em] text-[#D6C1A1] uppercase transition-colors hover:border-[#D6C1A1] hover:text-[#F3EDE3]"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      <p className="text-sm leading-relaxed font-light text-[#F3EDE3]/72">
                        Receive our printed seasonal Harvest Monograph and request
                        seating at our four-seat private tasting counters.
                      </p>

                      <div>
                        <label
                          htmlFor="hokai-name"
                          className="block text-[11px] tracking-[0.2em] text-[#D6C1A1] uppercase"
                        >
                          Full Name
                        </label>
                        <input
                          id="hokai-name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          className="mt-2 w-full border border-[#D6C1A1]/25 bg-[#211713]/70 px-4 py-3 text-sm text-[#F3EDE3] placeholder:text-[#F3EDE3]/35 focus:border-[#92734C] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="hokai-email"
                          className="block text-[11px] tracking-[0.2em] text-[#D6C1A1] uppercase"
                        >
                          Email Address
                        </label>
                        <input
                          id="hokai-email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@domain.com"
                          className="mt-2 w-full border border-[#D6C1A1]/25 bg-[#211713]/70 px-4 py-3 text-sm text-[#F3EDE3] placeholder:text-[#F3EDE3]/35 focus:border-[#92734C] focus:outline-none"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="hokai-salon"
                          className="block text-[11px] tracking-[0.2em] text-[#D6C1A1] uppercase"
                        >
                          Preferred Salon
                        </label>
                        <select
                          id="hokai-salon"
                          value={preferredCity}
                          onChange={(e) => setPreferredCity(e.target.value)}
                          className="mt-2 w-full border border-[#D6C1A1]/25 bg-[#211713] px-4 py-3 text-sm text-[#F3EDE3] focus:border-[#92734C] focus:outline-none"
                        >
                          <option value="Tokyo — Minami-Aoyama">
                            Tokyo — Minami-Aoyama
                          </option>
                          <option value="Paris — Le Marais">
                            Paris — Le Marais
                          </option>
                          <option value="Milan — Brera">Milan — Brera</option>
                          <option value="Digital Monograph Only">
                            Seasonal Monograph Dispatch Only
                          </option>
                        </select>
                      </div>

                      {error && (
                        <p role="alert" className="text-xs text-[#D6C1A1]">
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        className="w-full cursor-pointer border border-[#92734C] bg-[#92734C] px-6 py-3.5 text-xs font-medium tracking-[0.22em] text-[#151515] uppercase transition-colors hover:bg-[#D6C1A1]"
                      >
                        Request Private Invitation
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
