
import { useState } from "react"
import One from "./One";
const App = () => {
  const [value,setvalue]=useState(0);

  return (
    <div>
     
      <One setvalue={setvalue} value={value} />
    </div>
  )
}

export default App
