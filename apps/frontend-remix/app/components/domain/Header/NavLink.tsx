import cx from 'classnames'
import { NavLink } from 'remix'

type Link = {
  to: string
  text: string
}
const links: Link[] = [
  {
    to: 'dashbord',
    text: 'DashBord'
  },
  {
    to: 'wishlists',
    text: 'WishLists'
  }
]

export const NavList = () => {
  const activeStyle = (props: { isActive: boolean }) =>
    cx({ underline: props.isActive })

  return (
    <nav>
      <ul className={'flex gap-x-4'}>
        {links.map(({ to, text }) => (
          <li>
            <NavLink to={to} className={activeStyle}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
