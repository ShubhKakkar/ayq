import { useRouter } from 'next/router'
import React from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'

const Success = () => {
  const router = useRouter();
  return (
    <div className='pt-24 px-4 md:px-0 md:max-w-7xl mx-auto min-h-[calc(100vh-80px)] grid place-items-center'>
        <div className='card py-8 px-4 md:p-12'>
            <div className='md:flex items-center md:space-x-2 mb-5'>
                <AiFillCheckCircle className='text-green-500 text-5xl mb-4 md:mb-0' />
                <h1 className='text-3xl'>Thank you, Your order has been confirmed</h1>
            </div>
            <p className="text-md md:text-xl font-medium leading-loose mt-8">Dear valued customer,</p>
            <p className="text-md font-medium leading-loose mt-2">Thank you for placing an order with us. We appreciate your business and are glad to have been able to assist you. We hope that you are satisfied with your purchase and that you will consider us for any future needs.</p>
            <p className="text-md font-medium leading-loose mt-2">If you have any questions or concerns about your order, please don't hesitate to reach out. Our customer service team is always here to help.</p>
            <p className="text-md font-medium leading-loose mt-2">Thank you again for choosing us.</p>
            <p className="text-md md:text-lg font-medium leading-loose mt-4">Sincerely,</p>
            <p className="text-md md:text-lg font-semibold leading-loose mt-2">AyQ Beverages</p>
            <button className='primary-button mt-6' onClick={() => {
                router.push('/orders');
            }}>Go to my orders</button>
        </div>
    </div>
  )
}

export default Success