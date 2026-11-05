import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'soft'
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon'

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[#111214] text-white hover:bg-[#2a2c30]',
  secondary: 'bg-[#f3f4f6] text-[#111214] hover:bg-[#e5e7eb]',
  ghost: 'bg-transparent text-[#111214] hover:bg-[#f3f4f6]',
  soft: 'bg-[#f1ebf3] text-[#111214] hover:bg-[#e6dcea]',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'h-[36px] px-[12px] text-[14px] rounded-[10px]',
  md: 'h-[40px] px-[12px] text-[14px] rounded-[12px]',
  lg: 'h-[48px] px-[20px] text-[16px] rounded-[12px]',
  icon: 'h-[40px] w-[32px] rounded-full',
}

type CommonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: ReactNode
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>

export function buttonClasses(
  variant: ButtonVariant = 'primary',
  size: ButtonSize = 'md',
  className?: string,
) {
  return cn(
    'inline-flex items-center justify-center gap-[8px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#111214] disabled:opacity-50',
    variants[variant],
    sizes[size],
    className,
  )
}

export function Button({
  variant,
  size,
  className,
  children,
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={buttonClasses(variant, size, className)} {...props}>
      {children}
    </button>
  )
}

type ButtonLinkProps = CommonProps & { to: string; 'aria-label'?: string }

export function ButtonLink({
  to,
  variant,
  size,
  className,
  children,
  ...rest 
}: ButtonLinkProps) {
  return (
    <Link to={to} className={buttonClasses(variant, size, className)} {...rest}>
      {children}
    </Link>
  )
}

export default Button
