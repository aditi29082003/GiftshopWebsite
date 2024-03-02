import chocolates from '../../assets/chocolates.png';
import alarmclock from "../../assets/alarmclock.png";
import happybirthday from "../../assets/happybirthday.png";
import images from "../../assets/images.png";
import "./Headerstyle.css";

const Header=()=>{
    return(
        <ul className="pamplets">
            <li className='roundimg'>
                <img src={chocolates}style={{width:"40%",marginLeft:"180px"}} alt =""></img>
                <h5>chocolates</h5>
                
            </li>
            <li  className='roundimg'>
                <img src={happybirthday}style={{width:"44%"}} alt =""></img>
                <h5 style={{marginLeft:"92px"}}>Birthday</h5>
            </li>
            <li  className='roundimg'>
                <img src={images}style={{width:"120%",marginLeft:"-40px"}} alt =""></img>
                <h5 className="images">gifts</h5>
            </li>
            <li  className='roundimg'>
                <img src={alarmclock}style={{width:"34%"}} alt =""></img>
                <h5  style={{marginLeft:"109px"}}>alarmclock</h5>
            </li>
        </ul>
    )
}
export default Header;