import React from 'react'

import Categories from '../components/Categories'
import  Sort from  '../components/Sort'
import PizzaBlock from '../components/Pizzablock'
import Skeleton from '../components/Pizzablock/Skeleton'



function Home() {
const [items,setItems]=React.useState([])
const [isLoading,setIsLoading]=React.useState(true)

let[categoryId,setCategoryId]=React.useState(0)
const [sortType,setSortType]=React.useState({
  name :'популярности',
  sortProperty :'rating'
})

console.log(categoryId,sortType)


React.useEffect(()=>{
  setIsLoading(true)
  fetch(`https://6437d071894c9029e8c6b2d1.mockapi.io/items?${
    categoryId > 0 ? `category=${categoryId}`:''}&sortBy=${sortType.sortProperty}&order=desc
    `
  )
.then((res)=>{
  return res.json()
})
.then((arr)=>{
  setItems(arr)
  setIsLoading(false)
})
window.scrollTo(0,0)
},[categoryId,sortType])

  return (
    <div>
       <div className="container">
        <div className="content__top">
          <Categories  value ={categoryId} onChangeCategory={(i)=>setCategoryId(i)} />
          <Sort  value ={sortType} onChangeSort={(i)=>setSortType(i)}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            isLoading ?
            [...new Array(6)].map((_,index)=> <Skeleton key={index}/>)
            :items.map((obj)=>(
               <PizzaBlock key={obj.id} {...obj}
               /> 
            ))
          }
         
          
        </div>
      </div>
    </div>
  )
}

export default Home
