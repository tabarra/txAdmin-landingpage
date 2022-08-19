import { NavbarItemData, NavbarItems } from '../../config/config';
import Link from 'next/link';

const NavItem: React.FC<NavbarItemData> = ({ name, url }) => (
  <a
    className='duration-200 ease-in-out text-white hover:text-gray-400 text-sm font-medium'
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
        <Link href="/">
              <a>
              <span className="sr-only">txAdmin Logo</span>
              <span className="text-green-400 font-semibold text-lg">txAdmin</span>
              </a>
            </Link>
        </div>
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center space-x-3" aria-label="Footer">
        {NavbarItems.map((item) => (
                        <NavItem url={item.url} name={item.name} key={item.name} />
                      ))}
        </nav>
          <div className='mt-7 text-center text-base text-gray-400'>
        <p>txAdmin is licensed under the MIT license.</p>
        <p>Page Design by <a className='font-medium' href='https://github.com/goodnightnoodles'>Noodles</a>.</p>
        <p>&copy; 2019-2021 André Tabarra</p>
              <Link href="https://vercel.com/?utm_source=txadmin&utm_campaign=oss" passHref>
                  <a>
          <div className='flex mt-5 space-x-1 justify-center'>
              <span className='text-neutral-400 font-medium'>Powered by</span>
              <svg className='h-6 w-6' viewBox="0 0 1155 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M577.344 0L1154.69 1000H0L577.344 0Z" fill="white"/>
              </svg>

          </div>
                  </a>
              </Link>
          </div>
      </div>
    </footer>
  )
}
