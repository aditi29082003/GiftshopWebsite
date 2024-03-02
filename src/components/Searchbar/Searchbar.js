import "./Searchbar.css"
import { useState } from "react";
import gifts from "../../assets/gifts.png";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown"

function Searchbar({onSubmit}){
    const [userwish, setUserWish] = useState("");
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit(userwish);
    }
    const handleChange = (e) =>{
        setUserWish(e.target.value);
        console.log(e)
    }
    return (
    <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
        <img src={gifts} alt =""style={{width:"80px",marginLeft:"6%"}}></img>
            <input value = {userwish} onChange={handleChange} placeholder="search" className="search"/>            
            <Button variant="primary"style={{width:"120px",marginLeft:"1200px",marginTop:"-80px",padding:"0px"}}> <Dropdown style={{}}>
              <Dropdown.Toggle id="dropdown" variant='none'>
               <a href="./SignIn" className="signin">login</a>
              </Dropdown.Toggle>
              <Dropdown.Menu>
            <Button variant="primary"style={{width:"170px"}}>login</Button> 
                <Dropdown.Item href="#/action-1 ">My Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Orders</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Wishlist</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Rewards</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Family Gifts</Dropdown.Item>
                <Dropdown.Item href="#/action-3"> Gift cards</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>   
            </Button>
        </form>
    </div>
    )
}
export default Searchbar;