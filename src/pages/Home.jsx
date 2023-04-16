import React from 'react'

import Categories from '../components/Categories'
import  Sort from  '../components/Sort'
import PizzaBlock from '../components/Pizzablock'
import Skeleton from '../components/Pizzablock/Skeleton'
import Pagination from '../components/Pagination'
import { SearchContext } from '../App'


function Home() {
const {searchValue}=React.useContext(SearchContext)
const [items,setItems]=React.useState([])
const [isLoading,setIsLoading]=React.useState(true)
const [categoryId,setCategoryId]=React.useState(0)
const [currentPage,setCurrentPage]=React.useState(1)

const [sortType,setSortType]=React.useState({
  name :'популярности',
  sortProperty :'rating'
})




React.useEffect(()=>{
  setIsLoading(true)
  const category= categoryId > 0 ? `category=${categoryId}`:''

  const search= searchValue ? `&search=${searchValue}`:''

  fetch(`https://6437d071894c9029e8c6b2d1.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType.sortProperty}&order=desc${search}`
  )
.then((res)=>{
  return res.json()
})
.then((arr)=>{
  setItems(arr)
  setIsLoading(false)
})
window.scrollTo(0,0)
},[categoryId,sortType,searchValue,currentPage])

const pizzas=items.map((obj)=>(
 <PizzaBlock key={obj.id} {...obj}
  /> 
))
const skeletons= [...new Array(6)].map((_,index)=> <Skeleton key={index}/>)

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
            isLoading ? skeletons:pizzas
          }
        </div>  
        <Pagination onChangePage={(number)=>setCurrentPage(number)} />
      </div>
    </div>
  )
}

export default Home
