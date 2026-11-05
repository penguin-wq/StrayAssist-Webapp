import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import type { NavLinkItem } from '../data/nav'
import { cn } from '../lib/utils'

type NavDropdownProps = {
  label: string
  items: NavLinkItem[]
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointer = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointer)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onPointer)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-[6px] text-[16px] font-medium text-[#111214] hover:text-[#4b5563]"
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          className={cn('size-[16px] transition-transform', open && 'rotate-180')}
          strokeWidth={2}
        />
      </button>
      {open && (
        <ul className="absolute right-0 top-[calc(100%+12px)] z-20 w-[200px] rounded-[12px] border border-[#e5e7eb] bg-white p-[6px] shadow-[0_8px_24px_rgba(17,18,20,0.08)]">
          {items.map((item) => (
            <li key={item.label}>
              <NavLink
                to={item.to}
                onClick={() => setOpen(false)}
                className="block rounded-[8px] px-[12px] py-[8px] text-[14px] font-medium text-[#1f2937] hover:bg-[#f3f4f6]"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavDropdown

