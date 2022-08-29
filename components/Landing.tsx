import Image from 'next/image'
import React from 'react'
import Button from './Button'

function Landing() {
  return (
    <section className='sticky top-0 mx-auto flex h-[70vh] max-w-[1350px] items-center justify-btween px-8'>
        <div className='space-y-8'>

            <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-8xl">
            
                <span className="block  bg-gradient-to-r from-[#C38314] to-[#4f4f4f]
                text-transparent bg-clip-text">Delivery</span>
                
                <span className="block text-4xl md:text-4xl xl:text-6xl">
                    24 Horas
                </span>

            </h1>

            <div className='space-x-6'>
                <Button title="Faça seu Pedido"/>
                <a className="link block pt-4 pl-2 lg:inline">Saiba Mais</a>
            </div>
        </div>

        <div className="relative  h-[450px] w-[450px] transition-all duration-500 
        md:inline lg:h-[550px] lg:w-[500px]">
            <Image src="/chopp.png" layout="fill" objectFit="contain"/>

        </div>
    </section>
  )
}

export default Landing