import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}


export const Button=({type, children})=>{
  const selectStyle=(type)=>{
    console.log(type)
    switch (type) {
      case 'primary':
        console.log(styles.primary)
        return styles.primary;
      case undefined:
        console.log(styles.default)
        return styles.default;
      case 'dashed':
        console.log(styles.dashed)
        return styles.dashed;
      case 'text':
        console.log(styles.text)
        return styles.text;
      case 'link':
        console.log(styles.link)
        return styles.link;
      default:
        break;
    }
  }

  return (
    <button className={selectStyle(type)}>{children}</button>
  )
}
