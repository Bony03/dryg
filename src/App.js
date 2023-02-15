import React, { useState } from 'react'
import Header from './components/Header/Header'
import './App.css'
import ScreenSlider from './components/ScreenSlider/ScreenSlider'
import { productData } from './data/productData'

function App() {
  let data = productData()
  const [themeColor, setThemeColor] = useState('white')
  console.log(themeColor)
  return (
    <div className="main__container">
      <Header themeColor={themeColor} />
      <ScreenSlider
        store={data}
        themeColor={themeColor}
        setThemeColor={setThemeColor}
      ></ScreenSlider>
    </div>
  )
}

export default App
