import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Landing from '../components/Landing'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Darela Chopp</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='relative h-[200vh] bg-[#E7ECEE]'>
        <Landing />
      </main>
      <section className="relative z-40 -mt-[130vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16">
      <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            Produtos
          </h1>
          </div>
      </section>
    </div>
  )
}



export default Home;