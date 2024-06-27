import './index.css';
import { getProducts } from '../../ProductCategories/utils';
import "./index.css";

import { SlLike } from "react-icons/sl";
import { RiContactsFill } from "react-icons/ri";
import { BiShoppingBag } from "react-icons/bi";


const NavbarLanding=()=>{
    return(
        <body>
            <div className='body'>
        <div className='navbar'>
    <h3 className='furniture'>F-FurniFlex.</h3>
        <div  className='navbar'>
        <ol>Home</ol>
        <ol>Products</ol>
        <ol> Categories</ol>
        <ol>About Us</ol>
        <ol> Contact Us</ol>
        <ol>Blog</ol>
        </div>
        <div id='icons'>
        
       <SlLike />
       <RiContactsFill />
       <BiShoppingBag />
       </div>
        </div>
        <div>
            <div>
    <button>FURNITURE DESIGNS IDEAS</button>
    <h1>Modern Interior Design Studio</h1>
    <div className='productInformation'>
    Choosing the right furniture for your home online will add
    elegance and functionality to your interior while also
    being cost effective and long lasting
    </div>
        </div>
        <button>Shop Now</button>
        <h4 className='instagram'>Follow Instagram</h4>
        <div className='certifiedOutlets'>
        <div>
        <h1>2500+</h1>
        Unique Styles
        </div>
        <div>
        <h1>5000+</h1>
        Happy Customer
        </div>
        <div>
        <h1>300+</h1>
        Certified Outlets
        </div>
        <button></button>
        <button></button>
        </div>
        </div>
        {/* <div>
        <RiCaravanFill />
        <h3>Fast & Free Shipping</h3>
        </div>
        <div>
        <BiShoppingBag />
        <h3>Easy to Shop</h3>
        </div>
        <div>
        <FaRegClock />
        <h3>24/7 Support</h3>
        </div>
        <div>
        <FaRotate />
        <h3>Hassle Free Returns</h3>
        </div>

        <div>
            <div>
                <div>
                    <SlLike />
                <BsCartPlus />
                </div>
                <div>
                    <SlLike />
                <BsCartPlus />
                </div>
                <div>
                    <SlLike />

                <BsCartPlus />
                </div>
            </div>
            <div>
                <div>
                    <SlLike />
                <BsCartPlus />
                </div>
                <BsCartPlus />
                </div>
                <div>
                <BsCartPlus />
                </div>
            </div> */}
        </div>
        </body>
    )
}
export default NavbarLanding;