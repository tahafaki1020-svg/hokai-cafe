import { useState } from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  aspectClassName?: string;
  priority?: boolean;
  fallbackTitle?: string;
  hoverZoom?: boolean;
}

export function EditorialImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  aspectClassName = '',
  priority = false,
  fallbackTitle = 'HOKAI',
  hoverZoom = false,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#211713] ${aspectClassName} ${className}`}
    >
      {failed ? (
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#211713] via-[#1B1310] to-[#151515] p-8 text-center"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            aria-hidden="true"
            className="mb-4 text-[#92734C]"
          >
            <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1" />
            <path
              d="M16 6C12 10 12 22 16 26M16 6C20 10 20 22 16 26"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
          <span className="font-serif text-xl tracking-[0.18em] text-[#D6C1A1]">
            {fallbackTitle}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            loaded ? 'opacity-100' : 'opacity-0'
          } ${hoverZoom ? 'group-hover:scale-[1.04]' : ''} ${imgClassName}`}
        />
      )}
    </div>
  );
}
