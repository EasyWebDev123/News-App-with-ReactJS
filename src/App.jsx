import { useState } from "react"
import NewsBar from "./Components/NewsBar"
import NewsBoard from "./Components/NewsBoard"
const App = () => {

  const [category, setCategory] = useState("general");

  return (
    <>
      <NewsBar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </>
  )
}

export default App
