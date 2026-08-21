interface HazlocMarkProps {
  variant?: 'primary' | 'reversed';
  className?: string;
}

const HEX_PATH = 'M184,100 L142,173 L58,173 L16,100 L58,27 L142,27 Z';
const MONOGRAM_PATH =
  'M62,52 H82 V148 H62 Z M118,52 H138 V148 H118 Z M82,90 H118 V110 H82 Z M113,100 A13,13 0 1,0 87,100 A13,13 0 1,0 113,100 Z';

export default function HazlocMark({ variant = 'primary', className = '' }: HazlocMarkProps) {
  const hexFill = variant === 'primary' ? '#16140F' : '#F5A800';
  const monogramFill = variant === 'primary' ? '#F5A800' : '#16140F';

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path d={HEX_PATH} fill={hexFill} />
      <path fillRule="evenodd" fill={monogramFill} d={MONOGRAM_PATH} />
    </svg>
  );
}
