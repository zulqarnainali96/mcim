import { ReactNode } from 'react';
import { Video as LucideIcon } from 'lucide-react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-md ${
        hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: 'light' | 'dark';
}

export function FeatureCard({ icon: Icon, title, description, variant = 'light' }: FeatureCardProps) {
  return (
    <div
      className={`p-8 rounded-xl ${
        variant === 'dark'
          ? 'bg-[#152238] text-white'
          : 'bg-white text-gray-900'
      } transition-transform duration-300 hover:-translate-y-1`}
    >
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
        style={{ backgroundColor: '#00D9C0' }}
      >
        <Icon className="w-6 h-6 text-[#0A1628]" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className={`${variant === 'dark' ? 'text-gray-300' : 'text-gray-600'} leading-relaxed`}>
        {description}
      </p>
    </div>
  );
}
