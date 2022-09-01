import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
    HiOutlineSearch,
    HiOutlineShoppingBag,
    HiOutlineUser

} from 'react-icons/hi';
import Logobk from '../public/logobk.png'






function Header() {
    const session = false;

    return <header className='stiky top-0 z-30 flex w-full items-center justify-between bg-[#e7ecee] p-4'>
        <div className='flex items-center justify-center md:w-1/5'>
            <Link href="/">
                <div className='logoIcon'>
                    <Image src={Logobk} layout='fill' objectFit='contain' priority/>
                </div>
            </Link>
        </div>
        <div className='hidden flex-1 items-center justify-center space-x-8 md:flex'>
            <a className='headerLink'>Produtos</a>
            <a className='headerLink'>Sobre</a>
            <a className='headerLink'>Contato</a>
            <a className='headerLink'>Suporte</a>
        </div>

        <div className='flex items-center justify-center gap-x-4 md:w-1/5'>
            <HiOutlineSearch className="headerIcon" />
        
        <Link href="/checkout">
            <div className="relative cursor-pointer">
                <span className="absolute -right-1 -top-1 z-50 flex h-4 w-4 text-[10px] items-center 
                justify-center text-white rounded-full bg-gradient-to-r from-[#C38314] to-[#4f4f4f]">
                5
                </span>
                <HiOutlineShoppingBag className="headerIcon" />
            </div>
        </Link>

        {session ? (
          <Image
            src={
            //   session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            // onClick={() => signOut()}
          />
        ) : (
          <HiOutlineUser className="headerIcon" 
        //   onClick={() => signIn()} 
          />
        )}

        </div>
    </header>

}

export default Header