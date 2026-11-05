import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Heart, Menu, X } from 'lucide-react'
import { mainNav } from '../data/nav'
import { ButtonLink } from './button'
import { Container } from './container'
import { Logo } from './logo'
import { NavDropdown } from './nav-dropdown'

const linkClass =
  'text-[16px] font-medium text-[#111214] transition-colors hover:text-[#4b5563]'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="border-b border-[#e5e7eb] bg-white">
      <Container className="flex h-[80px] items-center justify-between md:h-[96px]"> 
      <Logo />
        
        <nav aria-label="Main" className="hidden items-center md:flex">
          <ul className="flex items-center gap-[32px]">
            {mainNav.map((item) => (
              <li key={item.label}>
                {item.children ? (
                  <NavDropdown label={item.label} items={item.children} />
                ) : (
                  <NavLink to={item.to} end className={linkClass}>
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <ButtonLink to="#" variant="secondary" className="ml-[36px]">
            Donate
            <Heart aria-hidden="true" className="size-[18px]" strokeWidth={2} />
          </ButtonLink>
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="flex size-[40px] items-center justify-center rounded-[12px] bg-[#f3f4f6] md:hidden"
        >
          {mobileOpen ? <X className="size-[20px]" /> : <Menu className="size-[20px]" />}
        </button>
      </Container>

      {mobileOpen && (
        <nav aria-label="Mobile" className="border-t border-[#e5e7eb] md:hidden">
          <Container className="flex flex-col gap-[4px] py-[16px]">
            {mainNav.flatMap((item) => [item, ...(item.children ?? [])]).map((item) => (
              <NavLink
                key={item.label}
                to={item.to}
                end
                onClick={() => setMobileOpen(false)}
                className="rounded-[10px] px-[12px] py-[10px] text-[16px] font-medium text-[#111214] hover:bg-[#f3f4f6]"
              >
                {item.label}
              </NavLink>
            ))}
            <ButtonLink
              to="#"
              variant="secondary"
              className="mt-[8px] w-full"
            >
              Donate
              <Heart aria-hidden="true" className="size-[18px]" />
            </ButtonLink>
          </Container>
        </nav>
      )}
    </header>
  )
}

export default Navbar

