 import Navbar from "./components/Navbar";
 import Carousel from "./components/Carousel"
 import "./App.css";
 import ImageList from "./components/ImageList/ImageList.js";
 import Searchbar from "./components/Searchbar/Searchbar.js";
 import searchImages from "./api";
 import { useState } from "react";
 import Homepage from "./components/Homepage.js";
 import Categories from "./components/Categories/Categories.js";
 import Header from "./components/Header/Header.js";
 import Buy from "./components/Buy/Buy.js";
 import Accounts from "./components/Accounts/Accounts.js";
 import Products from "./components/Products.js";
import SignIn from "./components/SignIn/SignIn.js";
import { useRoutes} from "react-router-dom";

 function App(){
  let routeElements = useRoutes([
    {
        path: "/",
        children: [
            {
                index: true,
                path:'/',
                element:<Homepage/>
            },
        
            {
                path: 'signin',
                element: <SignIn />
            },
            {
                path: "accounts",
                element: <Accounts />
            },
            {
              path: "categories",
              element: <Categories />
          }
        ]
    }
  ])
    const [images,setImages]=useState([])
    const handleSubmit=async (userwish) =>{
        const result= await searchImages(userwish);
        setImages(result)
    }
    return(
        <>
        <Searchbar onSubmit={handleSubmit}/>
        <ImageList images={images}/>
         <Navbar/>
         {routeElements}
         <Header/>
        <Carousel/>
        <Buy/>
        <Carousel/>
        <Products/>      g
        </>
       
    )
 }
export default App;