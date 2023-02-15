import React, { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import ScreenSlider from './components/ScreenSlider/ScreenSlider'
import { productData } from './data/productData'

function App() {
  let data = productData()
  const [counter, setCounter] = useState(0)
  const [themeColor, setThemeColor] = useState('white')
  const basketHandlet = () => {
    setCounter(counter + 1)
  }
  return (
    <div className="main__container">
      <Header themeColor={themeColor} counter={counter} />
      <ScreenSlider
        store={data}
        themeColor={themeColor}
        setThemeColor={setThemeColor}
        setCounter={basketHandlet}
      ></ScreenSlider>
    </div>
  )
}

export default App
