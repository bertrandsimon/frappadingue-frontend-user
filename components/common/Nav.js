import { useState } from 'react';
import { Fragment } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { loggedName, loggedToken, loggedStatus } from '../../reducers/user';

import UserMenu from './UserMenu';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

import Image from 'next/image';
import Link from 'next/link';




function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Nav() {

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('clicked')
    dispatch( loggedStatus ())
  }

  console.log('user.userConnected in reducer :', user.userConnected)
  const [currentNavItem, setCurrentNavItem] = useState(null);

  const navigation = [
    { name: 'Présentation', href: '/PresentationPage', current: currentNavItem === 'Présentation' },
    { name: 'Courses', href: '/CoursesPage', current: currentNavItem === 'Courses' },
    { name: 'Médias', href: '/MediasPage', current: currentNavItem === 'Médias' },
    { name: 'FAQ', href: '/FaqPage', current: currentNavItem === 'FAQ' },
    { name: 'Bénévoles', href: '/BenevolesPage', current: currentNavItem === 'Bénévoles' },
    { name: 'Contact', href: '/ContactPage', current: currentNavItem === 'Contact' },
  ];

  const handleClick = (itemName) => {
    setCurrentNavItem(itemName);
  };

  return (
    <Disclosure as="nav" className="bg-black sticky top-0 z-50 pb-10 sm:mt-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                {/* Logo */}

                <div className="flex-shrink-0 items-center cursor-pointer">
                  <Link href="/" ><Image src="/images/frappadingue-logo.png" width={216} height={77} /></Link>
                </div>

                {/* Desktop menu */}
                <div className="hidden sm:ml-6 sm:block sm:pt-4 sm:pl-10">
                  <div className="flex space-x-4 uppercase">
                    {navigation.map((item) => (
                      <a
                        onClick={() => handleClick(item.name)}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-yellow-400 text-black'
                            : 'text-gray-300 hover:bg-yellow-400 hover:text-black',
                          'rounded-md px-3 py-2 text-lg font-extralight'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full p-1 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:bg-yellow-400"
                >
                  <span className="sr-only">Panier</span>
                  <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                {user.userConnected ? <UserMenu/> : <UserIcon className="h-6 w-6" aria-hidden="true" />}
               
              </div>

              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-yellow-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Ouvrir</span>
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-yellow-400 text-black' : 'text-gray-300 hover:bg-yellow-400 hover:text-black',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
