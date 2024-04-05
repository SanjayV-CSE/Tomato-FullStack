import React from 'react'
import { assets } from '../../assets/assets'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className="w-52">
    <div>
        <img className='w-36' src={image} alt="" class="flex" />
    </div>
    <div className='w-32'>
        <p>{name}</p>
        <img src={assets.rating_starts} alt="" />
    </div>
    <div>
        <p>{description}</p>
        <p>${price}</p>
    </div>
</div>

  )
}

export default FoodItem
