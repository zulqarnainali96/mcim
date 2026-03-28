import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export function Section({
  children,
  variant = 'light',
  className = '',
  containerSize = 'xl'
}: SectionProps) {
  const containerSizes = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md',
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-7xl',
  };

  return (
    <section
      className={`py-16 md:py-24 ${
        variant === 'dark' ? 'bg-[#0A1628] text-white' : 'bg-gray-50 text-gray-900'
      } ${className}`}
    >
      <div className={`container mx-auto px-4 sm:px-6 lg:px-8 ${containerSizes[containerSize]}`}>
        {children}
      </div>
    </section>
  );
}
