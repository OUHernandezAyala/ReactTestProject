import React from 'react';
import Image from 'next/image';



const NavBar = () => {
    return(
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212]  border border-[#33353f]  bg-opacity-90'>
        <div className='flex flex-wrap items-center justify-between mx-auto py-5 px-8 md:px-20'>
            <div className='flex items-center justify-between text-2xl md:text-5xl text-white font-semibold'>
                <Image 
                className='object-scale-down rounded-full'
                src="/images/logo-poke.png" 
                alt="logo" 
                width={60}
                height={60}
                />
                <h5>POKEAPI</h5>
            </div>
        </div>
    </nav>    
    )
};

export default NavBar;