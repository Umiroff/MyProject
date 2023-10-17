
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import {FiSearch} from 'react-icons/fi';
import {FiHeart} from 'react-icons/fi';


export default function Navbar() {
  return (
    <div className='nav'>
        <div className='nav_main'>
          <Link to='/' >
            <img className='nav_main_logo' src={logo} alt="logo" />
          </Link>
          <Link to='/about' className='nav_liked'>
            <FiHeart className='nav_liked_icon'/>
            <p className='nav_liked-text'>Избранное</p>
          </Link>
          <button className='nav_main_btn'>Каталог</button>
          <form action="" className='nav_main_search'>
            <input type="text"
              name=""
              id=""
              placeholder='Найти товар'
              className='nav_main_search_inp' />
              <FiSearch className='search-icon'/>
          </form>
          </div>
    </div>
  )
}
