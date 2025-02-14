import React, { useState, useCallback} from "react";

const App = (props: { message: string}) => {
  const [count, setCount] = useState(0)

  const increment = useCallback(() => {
    setCount((count) => count + 1)
  }, [count])

  return (
    <>
      <h1>{props.message}</h1>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  )
}

export default App