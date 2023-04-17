import React from 'react'
import { SearchContext } from '../../App'
import debounce from 'lodash.debounce'

import styles from '../Search/search.module.scss'



 function Search() {
  const [value,setValue]=React.useState('')
  const {setSearchValue}=React.useContext(SearchContext)
  


  const updateSearchValue =React.useCallback( 
  debounce((str)=>{
  setSearchValue(str)
},1000),[])

const onChangeInput=event=>{
  setValue(event.target.value)
  updateSearchValue(event.target.value)
}


  return (
    <div>  
    <input 
    value={value}
      onChange={onChangeInput}
    className={styles.root} placeholder='Поиск пиццы ...' />
    
    </div>

  )
}
export default Search
