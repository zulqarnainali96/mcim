import { brandKit } from '../brandkit';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-all duration-200 cursor-pointer inline-flex items-center justify-center';

  const variants = {
    primary: `bg-[${brandKit.colors.accent.cyan}] text-[${brandKit.colors.primary.navy}] hover:bg-[${brandKit.colors.accent.cyanLight}]`,
    secondary: `bg-[${brandKit.colors.accent.blue}] text-white hover:bg-[${brandKit.colors.accent.blueLight}]`,
    outline: `border-2 border-[${brandKit.colors.accent.cyan}] text-[${brandKit.colors.accent.cyan}] hover:bg-[${brandKit.colors.accent.cyan}] hover:text-[${brandKit.colors.primary.navy}]`,
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{
        backgroundColor: variant === 'primary' ? brandKit.colors.accent.cyan :
                        variant === 'secondary' ? brandKit.colors.accent.blue : 'transparent',
        color: variant === 'primary' ? brandKit.colors.primary.navy :
               variant === 'outline' ? brandKit.colors.accent.cyan : 'white',
        borderColor: variant === 'outline' ? brandKit.colors.accent.cyan : 'transparent',
      }}
    >
      {children}
    </button>
  );
}
