import './footer.scss';
import logo from '../../assets/image/header-logo.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className="footer_main_block">
            <div className='footer_container'>
                 <div className='footer_logo_container'>
                     <img className="footer_logo_image" src={logo} alt={logo} onClick={() => navigate("/")}/>
                 </div>
                 <div className="footer_navigation_links">
                     <span className="footer_category_list" onClick={() => navigate("/")}>HOME</span>
                     <span className="footer_category_list" onClick={() => navigate("/products")}>SHOP</span>
                     <span className="footer_category_list" onClick={() => navigate("/about")}>ABOUT</span>
                     <span className="footer_category_list" onClick={() => navigate("/contact")}>CONTACT</span>
                </div>
                 <div className='footer_icons'>
                    <span>
                        <FacebookIcon></FacebookIcon>
                    </span>
                    <span>
                        <InstagramIcon></InstagramIcon>
                    </span>
                    <span>
                        <XIcon></XIcon>
                    </span>
                    <span>
                        <YouTubeIcon></YouTubeIcon>
                    </span>

                 </div>
            </div>
            <div className='copyRightsContainer'>
                <p>Copyright © 2025 Urban Jungle Co.</p>
            </div>


        </div>
    )
}
export default Footer;
