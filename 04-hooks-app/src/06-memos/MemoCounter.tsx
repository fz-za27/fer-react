import { useCounter } from "@/hook/useCounter"
import { useMemo } from "react"

const heavyStuff = (iterationNumber: number) => {
  console.time('Heavy stuff started')
  
  for (let index = 0; index < iterationNumber; index++) {
    console.log('ahi vamos...')
  }

  console.timeEnd('Heavy stuff started')

  return `${iterationNumber} iteraciones realizadas`
}

export const MemoCounter = () => {
  const { counter, decrement, increment } = useCounter(30)
  const { counter:counter2, decrement:decrement2, increment:increment2 } = useCounter(20)

  const myHeavyValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Memo - useMemo</h1>
      <hr />

      <h4>Counter: {counter}</h4>
      <h4>Counter2: {counter2}</h4>

      <button
        onClick={increment}
        className="bg-blue-500 text-white rounded-md cursor-pointer px-4 py-2"
      >
        +1
      </button>
      
      <button
        onClick={increment2}
        className="bg-blue-500 text-white rounded-md cursor-pointer px-4 py-2"
      >
        +1 - Counter2
      </button>
    </div>
  )
}