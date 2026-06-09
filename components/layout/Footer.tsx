import { NavbarItemData, NavbarItems } from '../../config/config';
import Link from 'next/link';

const NavItem: React.FC<NavbarItemData> = ({ name, url }) => (
  <a
    className='duration-200 ease-in-out text-white hover:text-txneutraltext text-sm font-medium'
    href={url}
    target='_blank'
    rel='noopener'
  >
    {name}
  </a>
);

export default function Footer() {
  return (
    <footer className="bg-neutral-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <Link href="/" className="inline-block">
            <img src="/txa-logo.png" alt="txAdmin" className="h-8 w-auto mx-auto" />
          </Link>
        </div>
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center space-x-3" aria-label="Footer">
          {NavbarItems.map((item) => (
            <NavItem url={item.url} name={item.name} key={item.name} />
          ))}
        </nav>
        <div className='mt-7 text-center text-base text-txneutraltext'>
          <p>&copy; 2019-2026. txAdmin and FiveM are copyrights and trademarks of Take-Two Interactive Software, Inc.</p>
        </div>
      </div>
    </footer>
  )
}
