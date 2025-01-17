import SideBar from "./components/side/SideBar"
import { CardsMain } from "./components/cards/CardsMain"
import NavBar from "./components/side/NavBar"



function App() {


  return (
    <>
    <div className="flex">
      <SideBar />
      <div className="flex flex-col">
      <NavBar/>
      <CardsMain/>
      </div>
    </div>
    </>
  )
}

export default App

//https://www.themealdb.com/api/json/v1/1/categories.php
//https://github.com/jorgesosa-funval/meal-app
//https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood