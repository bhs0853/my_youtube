import React,{useState} from 'react';
import YouTubeLogo from '../../assests/Youtube-Logo.svg';
import search from "../../assests/search.svg";
import HamburgerIcon from "../../assests/hamburger.svg";

/**
 * 
 * This is header UI component
 * design ->
 *          Hamburger_menu youtube_logo search_bar SignIn/signOut
 * Hamburger -> https://img.icons8.com/ios/50/FFFFFF/menu--v1.png
 * 
 * 

 * 
 */


export const Header = () => {
  const [login,setLogin] = useState(true);
  return (
    <div className="bg-black flex h-14 w-full px-7 justify-between">
      <div className='flex'>
        <img src={HamburgerIcon} className="my-auto cursor-pointer" key="hamburger" ></img>
        <img src={YouTubeLogo} className='mx-5 h-16 w-20'></img>
      </div>
      <div className='my-auto  flex w-2/5'>
        <input className='border-lightgray border h-9 rounded-l-3xl pl-5 w-full bg-searchbackground text-white' placeholder='Search'></input>
        <button className='border-lightgray bg-lightgray border-l-0 border h-9 rounded-r-3xl  px-5'>
          <img src={search}></img>
        </button>
      </div>
      <div className='my-auto w-28'>
        <button className='border w-full border-lightgray bg-lightgray px-5 py-1.5 rounded-3xl text-blue-400 font-medium' onClick={()=>{setLogin(!login)}}>{login?<>Sign In</>:<>Sign Out</>}</button>
      </div>
    </div>
  )
}
export default Header;