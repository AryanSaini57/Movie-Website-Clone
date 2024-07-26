import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css'
import Nav from './component/Nav'
import Movies from './component/Movies'
import WatchList from './component/WatchList'
import Banner from './component/Banner'

function App() {
  const [watchList, setWatchList] = useState([])

  const handleAddtoWatchList = (movieObj)=>{
    let newWatchList = [...watchList, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    console.log(newWatchList)
  }

  const handleRemovetoWatchList =(movieObj)=>{
    let filterWatchList = watchList.filter((movie)=>{
      return movie.id!=movieObj.id
    })
    setWatchList(filterWatchList)
    localStorage.setItem('moviesApp', JSON.stringify(filterWatchList))
    console.log(filterWatchList)
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  },['moviesApp'])

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<> <Banner/> <Movies handleAddtoWatchList={handleAddtoWatchList} handleRemovetoWatchList={handleRemovetoWatchList} watchList={watchList}/></>}/>
        <Route path='/watchlist' element={<WatchList watchList={watchList} setWatchList={setWatchList} handleRemovetoWatchList={handleRemovetoWatchList}/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
