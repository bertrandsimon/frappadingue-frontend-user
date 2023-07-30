import { useState } from 'react';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Nav() {
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
    <Disclosure as="nav" className="bg-black sticky top-0 z-50 p-6 sm:mt-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="flex flex-1 items-center justify-start">
                {/* Logo */}
                <div className="flex-shrink-0 items-center">
                  <Link href="/">
                    <a>
                      <Image src="/images/frappadingue-logo.png" width={216} height={77} />
                    </a>
                  </Link>
                </div>

                {/* Desktop menu */}
                <div className="hidden sm:ml-6 sm:block sm:pt-4 sm:pl-10">
                  <div className="flex space-x-4 uppercase">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          onClick={() => handleClick(item.name)}
                          className={classNames(
                            item.current
                              ? 'bg-yellow-400 text-black'
                              : 'text-gray-300 hover:bg-yellow-400 hover:text-black',
                            'rounded-md px-3 py-2 text-lg font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* ... (remaining code unchanged) ... */}
              </div>

              {/* Mobile menu button */}
              {/* ... (remaining code unchanged) ... */}
            </div>
          </div>

          {/* Mobile menu */}
          {/* ... (remaining code unchanged) ... */}
        </>
      )}
    </Disclosure>
  );
}

export default Nav;
