import React from 'react'
import { menu_list } from '../../assets/assets'
const ExploreMenu = () => {
  return (
    <div className='space-y-8'>
      <h1 className='text-4xl font-bold'>Explore Our Menu</h1>
      <p>Dive into a world of culinary delights! Explore our diverse menu, overflowing with delicious options to satisfy every craving. From <br />classic favorites to innovative creations, we have something to tantalize every taste bud. Don't wait, embark on your <br />delicious journey today! </p>
      <div className='flex justify-center gap-8'>
        {menu_list.map((item,index)=>{
          return (
            <div key={index}>
              <img className='cursor-pointer' src={item.menu_image} alt="" />
              <p className='flex justify-center'>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
    </div>

  )
}

export default ExploreMenu
