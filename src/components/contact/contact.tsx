import Header from '../header/header';
import './contact.scss';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Footer from '../footer/footer';
// import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
const Contact = () => {
    // const dispatch = useDispatch();
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        phone: Yup.string()
          .required('Phone number is required')
          .min(10, 'Phone number must be 10 number')
          .max(10, 'Phone number must not exceed 10 number'),
        message: Yup.string()
          .required('Message is required')
      });
    
      const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
      } = useForm({
        resolver: yupResolver(validationSchema)
      });
    
      const onSubmit = (data:any) => {
        console.log(JSON.stringify(data, null, 2));
        Swal.fire({
            text: `Thank you for reaching us our team will contact you soon...`,
            icon: "success",
            confirmButtonText: "OK",
            allowOutsideClick: false,
            customClass: {
                confirmButton: "custom-confirm-btn"
            }
        }).then(() => {
           reset();
        });
      };

    return (
        <div className="contact_main_block">
            <Header></Header>
            <div className='contact_container'>
                <div className="contact_overlay"></div>
                <div className='contact_content'>
                    <p className='contact_topic'>Contact Us</p>
                    <p className='contact_topics'>Let’s Connect</p>
                </div>
            </div>
            <div className='contact_details_container'>
                <div className='contact_details_company_container'>
                    <p className='contact_details_company_headline'>Send us Message</p>
                    <div className='contact_company_details_section'>
                        <div className='contact_company_details'>
                            <div className='contact_company_details_icon'>
                                <span><CallIcon /></span>
                            </div>
                            <div className='contact_company_detail'>
                                <p className='contact_company_detail_headline'>Phone</p>
                                <p className='contact_company_detail_content'>555-1234-678</p>
                            </div>
                        </div>
                        <div className='contact_company_details'>
                            <div className='contact_company_details_icon'>
                                <span><EmailIcon /></span>
                            </div>
                            <div className='contact_company_detail'>
                                <p className='contact_company_detail_headline'>Email</p>
                                <p className='contact_company_detail_content'>urbanjungle@example.com</p>
                            </div>
                        </div>
                        <div className='contact_company_details'>
                            <div className='contact_company_details_icon'>
                                <span><LocationOnIcon /></span>
                            </div>
                            <div className='contact_company_detail'>
                                <p className='contact_company_detail_headline'>Address</p>
                                <p className='contact_company_detail_content'>2972 Westheimer Rd. Santa Ana, Illinois 85486</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='contact_user_detail'>
                    <div className="register-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label>Full Name*</label>
                                <input
                                    type="text"
                                    {...register('fullname')}
                                    className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.fullname?.message}</div>
                            </div>

                            <div className="form-group">
                                <label>Email*</label>
                                <input
                                    type="text"
                                    {...register('email')}
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.email?.message}</div>
                            </div>

                            <div className="form-group">
                                <label>Phone*</label>
                                <input
                                    type="text"
                                    {...register('phone')}
                                    className={`form-control ${errors.phone ? 'is-invalid' : ''}`}
                                />
                                <div className="invalid-feedback">{errors.phone?.message}</div>
                            </div>
                            <div className="form-group">
                                <label>Message*</label>
                                <textarea 
                                    {...register('message')}
                                    className={`form-control ${errors.message ? 'is-invalid' : ''
                                        }`}
                                />
                                <div className="invalid-feedback">
                                    {errors.message?.message}
                                </div>
                            </div>

                            <div className="form-group-button">
                                <button type="submit" className="btn-primary">
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    )
}
export default Contact;
