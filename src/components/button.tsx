import { cva, type VariantProps } from 'class-variance-authority';
import { AnchorHTMLAttributes, ButtonHTMLAttributes, FC, ReactNode } from 'react';

export const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-headline-sm transition-all active:scale-95 cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        solid: '',
        outlined: 'border',
        ghost: 'bg-transparent',
      },
      color: {
        primary: '',
        secondary: '',
        danger: '',
        dark: '',
      },
      size: {
        sm: 'px-4 py-2 text-sm rounded-lg',
        md: 'px-6 py-2.5 rounded-lg',
        lg: 'px-8 py-4 rounded-xl',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    compoundVariants: [
      // solid
      { variant: 'solid', color: 'primary',   class: 'bg-primary text-on-primary hover:shadow-lg hover:opacity-90' },
      { variant: 'solid', color: 'secondary', class: 'bg-primary-container text-on-primary hover:bg-primary' },
      { variant: 'solid', color: 'danger',    class: 'bg-error text-on-error hover:opacity-90' },
      { variant: 'solid', color: 'dark',      class: 'bg-on-surface text-white hover:opacity-90' },
      // outlined
      { variant: 'outlined', color: 'primary',   class: 'border-primary text-primary hover:bg-primary/5' },
      { variant: 'outlined', color: 'secondary', class: 'border-primary-container text-primary-container hover:bg-primary-fixed' },
      { variant: 'outlined', color: 'danger',    class: 'border-error text-error hover:bg-error/5' },
      { variant: 'outlined', color: 'dark',      class: 'border-on-surface text-on-surface hover:bg-surface-container' },
      // ghost
      { variant: 'ghost', color: 'primary',   class: 'text-primary hover:bg-primary/5' },
      { variant: 'ghost', color: 'secondary', class: 'text-secondary hover:bg-secondary/5' },
      { variant: 'ghost', color: 'danger',    class: 'text-error hover:bg-error/5' },
      { variant: 'ghost', color: 'dark',      class: 'text-on-surface hover:bg-surface-container' },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

type BaseProps = VariantProps<typeof buttonVariants> & { icon?: ReactNode; children?: ReactNode; className?: string };
type AsButton = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & { href?: undefined };
type AsAnchor = BaseProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & { href: string };
type ButtonProps = AsButton | AsAnchor;

const Button: FC<ButtonProps> = ({ variant, color, size, fullWidth, icon, children, className, ...rest }) => {
  const cls = buttonVariants({ variant, color, size, fullWidth });
  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={[cls, className].filter(Boolean).join(' ')} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {icon}{children}
      </a>
    );
  }
  return (
    <button className={[cls, className].filter(Boolean).join(' ')} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {icon}{children}
    </button>
  );
};

export default Button;
