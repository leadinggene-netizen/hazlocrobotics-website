import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  posterSrc: string;
  title: string;
  className?: string;
}

export default function YouTubeEmbed({ videoId, posterSrc, title, className = '' }: YouTubeEmbedProps) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative h-full w-full bg-ink-900 ${className}`}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={title}
          className="group absolute inset-0 block h-full w-full cursor-pointer"
        >
          <img src={posterSrc} alt={title} className="h-full w-full object-cover" loading="lazy" />
          <span className="absolute inset-0 bg-ink-950/25 transition-colors group-hover:bg-ink-950/40" />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-ink-900 shadow-xl transition-transform group-hover:scale-110">
              <Play size={26} className="ml-1" fill="currentColor" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
