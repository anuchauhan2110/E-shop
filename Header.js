import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Header.css'
import { Link } from 'react-router-dom'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'


function Header(){

     const [{basket,loggedinuser}, dispatch] = useStateValue();
     //console.log("my basket", basket)
    const logoutUser = () => {
        if(loggedinuser){
            auth.signOut();
        }
    }

    return(
        <nav className="header">
            <img className="header__logo" alt="logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
             <div className="header__search">
                    <input type="text" className="header__searchInput" />
                    <SearchIcon className="header__searchInput" />
            </div>
            <div className="header__nav">
                   {/* 1st link */}
            <Link to={!loggedinuser && "/login"} className="header__link">
                <div onCLick={logoutUser} className="header__option">
                     <span className="header__optionLineone">Hello, {loggedinuser?.email}</span>
                     <span className="header__optionLinetwo">{loggedinuser? 'singout' : 'signin'}</span>
                </div>
             </Link>
             {/* 2nd link */}
            <Link to="/" className="header__link">
                <div className="header__option">
                     <span className="header__optionLineone">Returns</span>
                     <span className="header__optionLinetwo">Orders</span>
                </div>
             </Link>
            {/*  3rd link 
            <Link to="/" className="header__link">
                <div className="header__option">
                     <span className="header__optionLineone">you</span>
                     <span className="header__optionLinetwo">prime</span>
                </div>
            </Link>*/}
            </div>
            {/* basketicon with number */}
            <Link to="/checkout" className="header__link">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon/>
                    {/*number of items  in the basket */}
                    <span className="header__optionLinetwo header__productCount">{basket?.length}</span>
                </div>
            </Link>
                
        </nav>
    );

}




























export default Header