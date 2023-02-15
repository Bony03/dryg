import React from 'react'
import Header from './components/Header/Header'
import './App.css'
import ScreenSlider from './components/ScreenSlider/ScreenSlider'
import { productData } from './data/productData'

function App() {
  let data = productData()
  return (
    <div className="main__container">
      <Header />
      <ScreenSlider store={data}></ScreenSlider>
    </div>
  )
}

export default App
