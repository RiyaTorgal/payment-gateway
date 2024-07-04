import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Success = () => {
  return (
    <>
        <div className="py-4" />
        <div className="mt-14 p-4 w-auto max-w-sm mx-auto overflow-hidden bg-white border rounded-lg">
            <div className="px-6 py-4">
            <div className="mt-5 mx-auto" style={{ width: "5rem" }} >
                    <Image 
                    src={"/success.svg"}
                    alt='success'
                    width={200}
                    height={75}
                    />
                </div>
                    <h2 className="text-3xl mt-5 font-bold text-center text-green-600">Success!</h2>
                <h3 className="mt-4 text-xl font-medium text-center text-gray-600">Your Transaction Was Successful</h3>
                <Link href={"/"}>
                    <button className='button mt-8 p-3 text-zinc-50 rounded-md text-lg w-full '>Redirect to HomePage</button>
                </Link>
            </div>
        </div>
    </>
  )
}

export default Success