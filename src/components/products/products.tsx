import Header from '../header/header';
import './products.scss';
import { Product } from '../../model/model'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { ShoppingCart as CartIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Footer from '../footer/footer';
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { CartState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
const Products = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: CartState) => state.cart.items);
    const Products: Product[] = useSelector((state: CartState) => state.cart.allProducts);
    const navigate = useNavigate();
    const handleProductClick = (id: number) => {
        // Navigate to the product description page with the product id
        navigate(`/productDescription/${id}`);
    };

    const handleClickAddCart = (product: Product) => {
        dispatch(addToCart(product.id));
    }
    const handleClickRemoveCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    const [search, setSearch] = useState('');
    let filtered = Products

    var searchFilter = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const filterNames = (Product: Product) => {
        return Product.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    };



    return (
        <div className="products_main_block">
            <Header></Header>

            <section className="cardListContainer">
                <div className="search-bar">
                    <SearchIcon /><input
                        className="search-bar-input"
                        value={search}
                        type="text"
                        onChange={searchFilter}
                    />
                </div>

                <ul className="cardList">
                    {filtered.filter(filterNames).length === 0 ? (
                        <li className="noProducts">No product found</li>
                    ) : (
                        filtered.filter(filterNames).map((product: Product) => (
                            <li className="card" key={product.id}>
                                <div className="cartIconWrapper">
                                    {cartItems.some(item => item.id === product.id) ? (
                                        <RemoveShoppingCartIcon
                                            className="cartIcon"
                                            onClick={() => handleClickRemoveCart(product.id)}
                                        />
                                    ) : (
                                        <CartIcon
                                            className="cartIcon"
                                            onClick={() => handleClickAddCart(product)}
                                        />
                                    )}
                                </div>
                                <div onClick={() => handleProductClick(product.id)}>
                                    <img
                                        className="product_image"
                                        src={product.imageUrl}
                                        alt={product.title}
                                    />
                                </div>
                                <div className="cardBody" onClick={() => handleProductClick(product.id)}>
                                    <div>{product.title}</div>
                                    <div className="price_container">
                                        <CurrencyRupeeIcon /> {product.price}
                                    </div>
                                    <div>&nbsp;</div>
                                    <div>&nbsp;</div>
                                </div>
                            </li>
                        ))
                    )}
                </ul>

            </section>
            <Footer></Footer>

        </div>
    )
}
export default Products;
