export type NavLinkItem = {
  label: string
  to: string
}

export type NavItem = NavLinkItem & {
  children?: NavLinkItem[]
}

export const mainNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Adopt', to: '#' },
  { label: 'Rescues', to: '#' },
  {
    label: 'Resources',
    to: '#',
    children: [
      { label: 'Adoption Guide', to: '#' },
      { label: 'Pet Care Tips', to: '#' },
      { label: 'Volunteer', to: '#' },
      { label: 'FAQ', to: '#' },
    ],
  },
]

export const footerNav: NavLinkItem[] = [
  { label: 'Blog', to: '#' },
  { label: 'About', to: '#' },
  { label: 'Contact', to: '#' },
]

export const legalNav: NavLinkItem[] = [
  { label: 'Privacy', to: '#' },
  { label: 'Terms', to: '#' },
  { label: 'Cookies', to: '#' },
]

