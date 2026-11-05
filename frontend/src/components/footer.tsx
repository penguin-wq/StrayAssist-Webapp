import { Link } from 'react-router-dom'
import { footerNav, legalNav } from '../data/nav'
import { Container } from './container'
import { Logo } from './logo'
import { SocialIcons } from './social-icons'

export function Footer() {
  return (
    <footer id="footer" className="border-t border-[#e5e7eb] bg-[#f3f4f6]">
      <Container className="pt-[48px]">
        <div className="flex flex-col items-start gap-[24px] md:h-[38px] md:flex-row md:items-center md:justify-between">
          <Logo />
          <nav aria-label="Footer">
            <ul className="flex items-center gap-[32px]">
              {footerNav.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-[14px] text-[#1f2937] transition-colors hover:text-[#111214] hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <SocialIcons />
        </div>

        <div className="mt-[34px] flex flex-col gap-[16px] border-t border-[#e5e7eb] pb-[46px] pt-[31px] md:flex-row md:items-center md:justify-between">
          <p className="text-[12px] leading-[22px] text-[#4b5563]">
            {'© 2026 Your Company. All rights reserved.'}
          </p>
          <ul className="flex items-center gap-[24px]">
            {legalNav.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-[14px] leading-[22px] text-[#1f2937] transition-colors hover:text-[#111214] hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

