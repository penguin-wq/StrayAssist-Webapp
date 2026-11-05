import { Link } from 'react-router-dom'
import { cn } from '../lib/utils'

type LogoProps = {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn('inline-flex flex-col items-end', className)}>
      <Link
        to="/"
        aria-label="StrayAssist home"
        className="flex items-center gap-[4px] text-[#4b5563]"
      >
        <svg
          aria-hidden="true"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="1" y="1" width="22" height="22" />
          <path d="M1 1l22 22M23 1L1 23" />
        </svg>
        <span className="text-[24px] font-bold leading-[24px] tracking-[-0.02em]">
          StrayAssist
        </span>
      </Link>
      <span className="mt-[2px] text-[12px] leading-[12px] text-[#4b5563]">
        {'by '}
        <a
          href="https://design-ui.com"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 hover:text-[#111214]"
        >
          design-ui.com
        </a>
      </span>
    </div>
  )
}

export default Logo

