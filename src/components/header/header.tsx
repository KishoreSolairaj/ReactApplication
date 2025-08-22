import './header.scss';
import logo from '../../assets/image/header-logo.svg';
import { useNavigate } from "react-router-dom";
// import { LuIndianRupee } from "react-icons/lu";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import { RiShoppingBag2Fill } from "react-icons/ri";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import {Badge} from "@mui/material";
import {  useSelector } from 'react-redux';
import { CartState } from '../../redux/store';

const Header = () => {
    const totalCount = useSelector((state: CartState) => state.cart.totalCount);
    const totalPrice = useSelector((state: CartState) => state.cart.totalPrice);
    const navigate = useNavigate();
    return (
        <div className="header_main_block">
            <div className='header_container'>
                 <div className='logo_container'>
                     <img className="logo_image" src={logo} alt={logo} onClick={() => navigate("/")}/>
                 </div>
                 <div className="navigation_links">
                     <span className="category_list" onClick={() => navigate("/")}>HOME</span>
                     <span className="category_list" onClick={() => navigate("/products")}>SHOP</span>
                     <span className="category_list" onClick={() => navigate("/about")}>ABOUT</span>
                     <span className="category_list" onClick={() => navigate("/contact")}>CONTACT</span>

                     <div className="shopping_icon_block" onClick={() => navigate("/cart")}>
                         <div className="todatl_price_block" >
                             <span>
                                 <CurrencyRupeeIcon />
                             </span>
                             <span>
                                 {totalPrice}.00
                             </span>
                         </div>
                         <Badge badgeContent={totalCount ?? 0} sx={{'& .MuiBadge-badge': {backgroundColor: '#88AD35', color: '#fff'}}} showZero>
                             <LocalMallIcon className="shopping_icon" />
                         </Badge>
                     </div>
                 </div>

            </div>
            

        </div>
    )
}
export default Header;
