import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { setSort } from '../redux/slices/filterSlice'


function Sort(){

const dispatch=useDispatch()
const sort =useSelector((state)=>state.filter.sort)

const [open,setOpen]=useState(false)
const list =[
{name:'популярности',sortProperty:'rating'},
{name:'цене',sortProperty:'price'},
{name:'алфавиту',sortProperty:'title'}
 ]



const onClickListItem=(obj)=>{
dispatch(setSort(obj))
setOpen(false)
}



    return (
      <div className="sort">
                <div className="sort__label">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                   
                  </svg>
                  <b>Сортировка по:</b>
                  <span onClick={()=>setOpen(!open)}>{sort.name}</span>
                </div>
                <div className="sort__popup">

                  {open && (
                    <ul>

                      {list.map((obj,i)=>(
                        <li key={i} 
                        onClick={()=>onClickListItem(obj)} 
                        className={ sort.sortProperty === obj.sortProperty ?'active':''}>{obj.name}</li>
                      ))}
                   
                  </ul>
                  )}
                  
                </div>
              </div>
    )
    }

    export default Sort