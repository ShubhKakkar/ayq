import React from 'react'

const Contact = () => {
  return (
    <div className='h-screen bg-dark'>
        <div className='py-[120px] px-24'>
        <p className='uppercase text-md text-orange-400 font-Roboto font-bold text-center tracking-widest'>JOIN THE CELSIUS NEWS LETTER</p>
        <p className='text-white text-5xl font-Roboto font-bold my-4 text-center max-w-5xl mx-auto leading-tight'>SIGN UP TO GET FIRST ACCESS AND UPDATES ABOUT PRODUCTS, EVENTS AND MORE.</p>
        <div className='text-center my-12'>
            <input type="text" placeholder='Enter Email' className='bg-transparent border-white border-2 p-4 text-xl text-white w-[30vw]' />
        </div>
        </div>
    </div>
  )
}

export default Contact