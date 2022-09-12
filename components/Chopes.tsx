import React from 'react'
import Tabs from './Tabs'

function Chopes() {
  return (
    <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
    <div className="space-y-10 py-16">
      <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
        Nossos Chopes
      </h1>

        <Tabs/>

    </div>
  </section>
  )
}

export default Chopes

