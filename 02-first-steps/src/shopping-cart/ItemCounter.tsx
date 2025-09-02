import { useState } from "react"

// import './ItemCounter.css'
import styles from './ItemCounter.module.css'

interface Props {
  name: string
  quantity?: number
}

export const ItemCounter = ({ name, quantity = 1 }: Props) => {
  const [count, setCount] = useState(quantity)

  const handleClick = () => console.log(`Click en ${name}`)

  const handleAdd = () => setCount(count + 1)
  const handleSubstract = () => {
    if (count === 1) return

    setCount(count - 1)
  }

  return (
    <section className={styles['item-row']}>
      <span
        className={`${styles.itemText} ${count === 1 ? styles.red : ''} `}
      >
        {name}
      </span>

      <button
        // onMouseEnter={() => {
        //   console.log(`Mouse enter ${name}`)
        // }}

        // onClick={ () => {
        //   // console.log(event)
        //   console.log(`click ${name}`)
        // } }

        onClick={handleAdd}>+1</button>
      <span>{count}</span>
      <button onClick={handleSubstract}>-1</button>
    </section>
  )
}