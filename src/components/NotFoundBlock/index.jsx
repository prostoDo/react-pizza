import React from 'react'
import styles from './NotFoundBlock.module.scss'

 function NotFoundBlock() {
  return (
    <div className={styles.root}>
      <h1 >
        <span>😕</span>
        <br />
        Ничего не найдено, сожалеем 
        </h1>
        <p className={styles.description}>К сожалению, данная страница отстутсвует в нашем интернет магазине </p>
    </div>
  )
}
export  default NotFoundBlock