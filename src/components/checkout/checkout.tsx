import Footer from '../footer/footer'
import Header from '../header/header'
import './checkout.scss'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { CartState } from '../../redux/store';
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { Product } from '../../model/model';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
    const cartItems = useSelector((state: CartState) => state.cart.items);
    const totalPrice = useSelector((state: CartState) => state.cart.totalPrice);
    // const totalCount = useSelector((state: CartState) => state.cart.totalCount);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required').min(6, 'Username must be at least 6 characters').max(20, 'Username must not exceed 20 characters'),
        email: Yup.string().required('Email is required').email('Email is invalid'),
        house: Yup.string().required("House number is required"),
        street: Yup.string().required("Street is required"),
        city: Yup.string().required("City is required"),
        state: Yup.string().required("State is required"),
        country: Yup.string().required("Country is required"),
        zipCode: Yup.string().matches(/^\d{5,6}$/, "Invalid ZIP Code").required("ZIP Code is required"),
        phoneNumber: Yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone number is required"),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = (data: any) => {
        console.log(JSON.stringify(data, null, 2));
         Swal.fire({
                    text: `Order Placed Sucessfully...`,
                    icon: "success",
                    confirmButtonText: "OK",
                    allowOutsideClick: false,
                    customClass: {
                        confirmButton: "custom-confirm-btn"
                    }
                }).then(() => {
                   reset();
                    dispatch(clearCart());
                   navigate("/");
                });
    };
    return (
        <div>
            <Header></Header>

            <div className='checkout_container'>
                <h1 className='checkout_header_txt'>Checkout</h1>

                <div className='address_price_details'>
                    <div className="checkout_register-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='form-detail-seperation'>
                                <div className="checkout_form-group">
                                    <label>Username</label>
                                    <input
                                        type="text"
                                        {...register('username')}
                                        className={`checkout-form-control ${errors.username ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.username?.message}</div>
                                </div>

                                <div className="checkout_form-group">
                                    <label>Email</label>
                                    <input
                                        type="text"
                                        {...register('email')}
                                        className={`checkout-form-control ${errors.email ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.email?.message}</div>
                                </div>

                            </div>
                            <div className='form-detail-seperation'>
                                <div className="checkout_form-group">
                                    <label>House NO</label>
                                    <input
                                        type="tesxt"
                                        {...register('house')}
                                        className={`checkout-form-control ${errors.house ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.house?.message}</div>
                                </div>

                                <div className="checkout_form-group">
                                    <label>Street</label>
                                    <input
                                        type="text"
                                        {...register('street')}
                                        className={`checkout-form-control ${errors.street ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.street?.message}</div>
                                </div>

                            </div>
                            <div className='form-detail-seperation'>
                                <div className="checkout_form-group">
                                    <label>City</label>
                                    <select {...register('city')} className={`checkout-form-control-select ${errors.city ? 'is-invalid' : ''}`}>
                                        <option value="Sattur">Sattur</option>
                                        <option value="Virudhunagar">Virudhunagar</option>
                                        <option value="Sivakasi">Sivakasi</option>
                                        <option value="Kovilpatti">Kovilpatti</option>
                                    </select>
                                    <div className="invalid-feedback">{errors.city?.message}</div>
                                </div>

                                <div className="checkout_form-group">
                                    <label>State</label>
                                    <select {...register('state')} className={`checkout-form-control-select ${errors.state ? 'is-invalid' : ''}`}>
                                        <option value="Tamilnadu">Tamilnadu</option>
                                        <option value="Kerla">Kerla</option>
                                        <option value="Assam">Assam</option>
                                        <option value="Bihar">Bihar</option>
                                    </select>
                                    <div className="invalid-feedback">{errors.state?.message}</div>
                                </div>

                            </div>
                            <div className='form-detail-seperation'>
                                <div className="checkout_form-group">
                                    <label>Country</label>
                                    <select {...register('country')} className={`checkout-form-control-select ${errors.country ? 'is-invalid' : ''}`}>
                                        <option value="India">India</option>
                                        <option value="China">China</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                    </select>
                                    <div className="invalid-feedback">{errors.country?.message}</div>
                                </div>

                                <div className="checkout_form-group">
                                    <label>Zip Code</label>
                                    <input
                                        type="text"
                                        {...register('zipCode')}
                                        className={`checkout-form-control ${errors.zipCode ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.zipCode?.message}</div>
                                </div>

                            </div>
                            <div className='form-detail-seperation'>
                                <div className="checkout_form-group">
                                    <label>Phone</label>
                                    <input
                                        type="text"
                                        {...register('phoneNumber')}
                                        className={`checkout-form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
                                    />
                                    <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
                                </div>

                                <div></div>

                            </div>

                            <div className="checkout_form-group">
                                <button type="submit" className="btn checkout-btn-primary">
                                    Place Order
                                </button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <div className='checkout-products'>
                            <TableContainer component={Paper}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>Product</StyledTableCell>
                                            <StyledTableCell>Subtotal</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {cartItems.map((item: Product) => (
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    <Box display="flex" alignItems="center">
                                                        {/* <Avatar src={item.imageUrl} alt={item.title} sx={{ width: 50, height: 50, mr: 2 }} /> */}
                                                        {item.title} × {item.quantity}
                                                    </Box>
                                                </TableCell>
                                                <TableCell><span className='checkout_price_container'><CurrencyRupeeIcon />{item.price * item.quantity}</span></TableCell>
                                            </TableRow>
                                        ))}
                                        <TableRow key={0}>
                                            <TableCell>Total</TableCell>
                                            <TableCell><span className='checkout_price_container'><CurrencyRupeeIcon />{totalPrice}</span></TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>

                    </div>

                </div>
            </div>
            <Footer></Footer>

        </div>
    )
}

export default Checkout