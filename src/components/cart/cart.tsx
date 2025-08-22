import './cart.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Product } from '../../model/model'
import { Add, Remove } from '@mui/icons-material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/cartSlice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Header from '../header/header';
import Footer from '../footer/footer';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import { CartState } from '../../redux/store';

const Cart = () => {
  const cartItems = useSelector((state: CartState) => state.cart.items);
  const totalPrice = useSelector((state: CartState) => state.cart.totalPrice);
  const totalCount = useSelector((state: CartState) => state.cart.totalCount);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  return (
    <div>
      <Header></Header>

      {cartItems.length === 0 && (
        <div className='cart_container'>
          {/* <h1 className='cart_header_txt'>Your Shopping Cart</h1> */}
          <h1 className='empty_cart_txt'>Your cart is currently empty.</h1>
        </div>
      )}


      {cartItems.length !== 0 && (
        <div className='cart_container'>
          <h1 className='cart_header_txt'>Your Shopping Cart</h1>
          <div>
            <div className='cart_items'>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Product</StyledTableCell>
                      <StyledTableCell>Price</StyledTableCell>
                      <StyledTableCell>Quantity</StyledTableCell>
                      <StyledTableCell>Subtotal</StyledTableCell>
                      <StyledTableCell>Remove</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  
                    {cartItems.map((item: Product) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Avatar src={item.imageUrl} alt={item.title} sx={{ width: 50, height: 50, mr: 2 }} />
                            {item.title}
                          </Box>
                        </TableCell>
                        <TableCell ><span className='cart_price_container'><CurrencyRupeeIcon />{item.price}</span></TableCell>
                        <TableCell>
                          <IconButton onClick={() => dispatch(decreaseQuantity(item.id))}>
                            <Remove />
                          </IconButton>
                          {item.quantity}
                          <IconButton onClick={() => dispatch(increaseQuantity(item.id))}>
                            <Add />
                          </IconButton>
                        </TableCell>
                        <TableCell><span className='cart_price_container'><CurrencyRupeeIcon />{item.price * item.quantity}</span></TableCell>
                        <TableCell>
                          <IconButton onClick={() => dispatch(removeFromCart(item.id))} color="error">
                            <DeleteOutlineIcon />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                    <TableRow key={0}>
                      <TableCell></TableCell>
                      <TableCell></TableCell>
                      <TableCell>Total Quantity: {totalCount}</TableCell>
                      <TableCell><span className='cart_price_container'>Total Price: <CurrencyRupeeIcon />{totalPrice}</span></TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className='cart_items_checkout'>
              <button className="cart-btn-primary" onClick={() => navigate("/checkout")}>
                Proceed to checkout
               </button>
            </div>
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  )
}

export default Cart