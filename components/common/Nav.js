import { useShoppingCart } from "use-shopping-cart";
import ShoppingCart from "../shop/ShoppingCart";

import { useState, useEffect } from 'react';
import { Fragment } from 'react';


import { useDispatch, useSelector } from 'react-redux';
import { loggedName, loggedToken, loggedStatus } from '../../reducers/user';

import UserMenu from './UserMenu';

import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


import SignUp from './SignUp';
import SignIn from './SignIn';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Nav(props) {

  const { handleCartClick, cartCount } = useShoppingCart();

  const [cartVisible, setCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
    handleCartClick(); // call the original handleCartClick 
  };

  const user = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('clicked')
    dispatch( loggedStatus ())
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [displaySignIn, setDisplaySignIn] = useState(false);
  const [displaySignUp, setDisplaySignUp] = useState(false);

  const handleClickDisplaySignIn = () => { 
    setDisplaySignIn(true)
    setDisplaySignUp(false)
  }

  const handleClickDisplaySignUp = () => {
    setDisplaySignUp(true)
    setDisplaySignIn(false)
  }

  const userConnected = useSelector((state) => state.user.userConnected);
  useEffect(() => {
    // If user is connected, close the dialog
    if (userConnected) {
      setOpen(false);
    }
  }, [userConnected]);
  
  useEffect(() => {
  
  }, [open]);
  

  const navigation = [
    { name: 'Présentation', href: '/PresentationPage', current: false },
    { name: 'Courses', href: '/CoursesPage', current: false },
    { name: 'Médias', href: '/MediasPage', current: false },
    { name: 'FAQ', href: '/FaqPage', current: false },
    { name: 'Bénévoles', href: '/BenevolesPage', current: false },
    { name: 'Contact', href: '/ContactPage', current: false },
  ];

  const updatedNavigation = navigation.map((item) => {
    if (item.name === props.currentNavItem) {
      return { ...item, current: true }; // Create a new object with 'current' property set to true
    } else {
      return item; // Return the original item as it is
    }
  });

  // const handleClick = (itemName) => {
  //   setCurrentNavItem(itemName);
  // };

  return (
    <>
    <Disclosure as="nav" className="bg-black sticky top-0 z-50 pb-10 mt-6 sm:mt-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="flex flex-1 items-center sm:justify-start justify-center">
                {/* Logo */}

                {/* mobile logo */}
                <div className="flex-shrink-0 items-center cursor-pointer">
                  <Link href="/" ><Image src="/images/frappadingue-logo.png" width={154} height={55} className="w-30 h-auto"/></Link>
                </div>

                {/* desktop logo */}
                {/* <div className="flex-shrink-0 items-center cursor-pointer">
                  <Link href="/" ><Image src="/images/frappadingue-logo.png" width={216} height={77}/></Link>
                </div> */}

                {/* Desktop menu */}
                <div className="hidden sm:ml-6 sm:block sm:pt-4 sm:pl-10">
                  <div className="flex space-x-4 uppercase">
                    {updatedNavigation.map((item) => (
                      <a
                        // onClick={() => handleClick(item.name)}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-[#ffe500] text-black'
                            : 'text-gray-300 hover:bg-[#ffe500] hover:text-black',
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
                onClick={toggleCartVisibility}
                  type="button"
                  className="rounded-full p-1 text-white hover:text-white focus:outline-none "
                >
                  
                  <ShoppingCartIcon className="h-6 w-6 hover:text-yellow-300" aria-hidden="true" />
                </button>

                <div className="rounded-full flex justify-center items-center bg-[#ffe500] text-xs text-black absolute w-6 h-6 bottom-12 right-8 cursor-pointer">
                  {cartCount}
                </div>
                
                {cartVisible && <ShoppingCart />}

                {/* Profile dropdown */}
                <div className="ml-4">
                  {user.userConnected ? <UserMenu/> : <UserIcon className="h-6 w-6 cursor-pointer hover:text-yellow-300" aria-hidden="true" onClick={handleClickOpen}/>}
                </div>
              </div>

              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#ffe500] hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" /> : <Bars3Icon className="block h-6 w-6 text-white" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="sm:hidden z-[9999]">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {updatedNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-[#ffe500] text-black text-center' : 'text-white text-center hover:bg-[#ffe500] hover:text-black',
                    'block rounded-md px-3 py-2 text-base font-medium uppercase'
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

    <Dialog open={open} onClose={handleClose} maxWidth="md">
  
      <DialogContent className='mb-10'>
        <div className='flex flex-row justify-center items-center pt-10 pb-10' style={{ overflowY: 'none' }}>
          <span className='px-2 cursor-pointer hover:text-yellow-300' onClick={handleClickDisplaySignIn}>J'ai deja un compte</span>
          <span className='px-2'> | </span>
          <span className='px-2 cursor-pointer hover:text-yellow-300' onClick={handleClickDisplaySignUp}>Je crée un compte</span>
        </div>
        
        { displaySignIn && <SignIn/>}
        { displaySignUp && <SignUp/>}
        {/* <SignIn></SignIn> */}
    
      </DialogContent> 

    </Dialog>

    </>
  );
}

export default Nav;