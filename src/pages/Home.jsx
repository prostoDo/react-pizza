import React from 'react'
import axios from 'axios'
import { useSelector,useDispatch } from 'react-redux'

import {setCategoryId,setCurrentPage} from '../redux/slices/filterSlice'
import Categories from '../components/Categories'
import  Sort from  '../components/Sort'
import PizzaBlock from '../components/Pizzablock'
import Skeleton from '../components/Pizzablock/Skeleton'
import Pagination from '../components/Pagination'
import { SearchContext } from '../App'


function Home() {
const categoryId=useSelector((state)=>state.filter.categoryId)
const sortType=useSelector((state)=>state.filter.sort)
const currentPage=useSelector((state)=>state.filter.currentPage)

const dispatch=useDispatch()


const {searchValue}=React.useContext(SearchContext)
const [items,setItems]=React.useState([])
const [isLoading,setIsLoading]=React.useState(true)



const onChangeCategory=(id)=>{

dispatch(setCategoryId(id))
}


React.useEffect(()=>{
  setIsLoading(true)
  const category= categoryId > 0 ? `category=${categoryId}`:''

  const search= searchValue ? `&search=${searchValue}`:''




axios.get(`https://6437d071894c9029e8c6b2d1.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType.sortProperty}&order=desc${search}`)
.then((res)=>{
  setItems(res.data)
  setIsLoading(false)
})


window.scrollTo(0,0)
},[categoryId,sortType,searchValue,currentPage])

const onChangePage=(number)=>{
  dispatch(setCurrentPage(number))
}

const pizzas=items.map((obj)=>(
 <PizzaBlock key={obj.id} {...obj}
  /> 
))
const skeletons= [...new Array(6)].map((_,index)=> <Skeleton key={index}/>)

  return (
    <div>
       <div className="container">
        <div className="content__top">
          <Categories  value ={categoryId} onChangeCategory={onChangeCategory} />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            isLoading ? skeletons:pizzas
          }
        </div>  
        <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      </div>
    </div>
  )
}

export default Home
