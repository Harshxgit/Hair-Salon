import { useState } from 'react'
import { ImagesSlider } from '../@/components/ui/images-slider'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ImagesSlider/>
    </>
  )
}

export default App
