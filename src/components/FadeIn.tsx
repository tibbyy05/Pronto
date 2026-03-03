import { ReactNode } from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function FadeIn({ children, delay = 0, className = '' }: FadeInProps) {
  const { ref, style } = useFadeIn({ delay });

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
