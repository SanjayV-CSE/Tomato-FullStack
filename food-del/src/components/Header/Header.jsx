import React from 'react'

const Header = () => {
  return (
    <div className='py-5'>
      <div className="h-[600px] bg-contain bg-no-repeat bg-[url('C:\Users\sanju\OneDrive\Desktop\FOOD\food-del\public\header_img.png')] p-5 text-white space-y-5 flex flex-col justify-center">
        <h1 className='text-6xl font-bold'>Order Your Favourite Food Here</h1>
        <p>Explore our diverse menu, order effortlessly, and enjoy delectable dishes <br />
        delivered promptly to your doorstep for an <br />unparalleled dining experience.</p>
        <button className='bg-white text-black p-2 rounded font-bold w-36'>View Menu</button>
      </div>
    </div>
  )
}

export default Header
