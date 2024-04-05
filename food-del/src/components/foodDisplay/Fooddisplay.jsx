import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../foodItem/FoodItem'


const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div>
      <h2 className='text-4xl font-bold py-5'>Top dishes near you</h2>
        <div className='flex flex-wrap gap-10'>
            {food_list.map((item,index)=>{
                return <FoodItem key={index} id={item.id} name={item.name} price={item.price} description={item.description} image={item.image}/>
            })}
        </div>
    </div>
  )
}

export default FoodDisplay
