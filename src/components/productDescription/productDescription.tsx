import './productDescription.scss'
import { Product } from '../../model/model'
import { useParams } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Header from '../header/header'
import Footer from '../footer/footer'
import { useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CartState } from '../../redux/store';

const ProductDescription = () => {
    const { id } = useParams();

    const Products: Product[] = useSelector((state: CartState) => state.cart.allProducts);
    const product = Products.find(p => p.id === Number(id));
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    };

    const dispatch = useDispatch();
    const cartItems = useSelector((state: CartState) => state.cart.items);


    const handleClickAddCart = (product: Product) => {
        dispatch(addToCart(product.id));
    }

        const handleClickRemoveCart = (id: number) => {
            dispatch(removeFromCart(id));
        };

    if (!product) {
        return <div>Product not found!</div>;
    }
    return (
        <div>
            <Header></Header>
            <div className="productDescriptionPage">
                <div>
                    <img src={product.imageUrl} alt={product.title} />
                </div>
                <div className='productDetaliedDescription'>
                    <h1 className='productDetailSpace'>{product.title}</h1>
                    <p className='productDetailSpace'>{product.description}</p>
                    <div className='price_container_desc'><CurrencyRupeeIcon /> {product.price}</div>
                    <div className='productDetailSpace'>Category: {product.category}</div>

                    <div className="form-group-button">
                        <button className="btn-primary" onClick={() => cartItems.some(item => item.id === product.id) ? handleClickRemoveCart(product.id) : handleClickAddCart(product)}>
                        {cartItems.some(item => item.id === product.id) ?'Remove Cart' : 'Add to cart'}
                        </button>

                        <button className="btn-primary" onClick={goBack}>
                            Back
                        </button>
                    </div>
                </div>




            </div>
            <Footer></Footer>


        </div>

    )
}
export default ProductDescription;