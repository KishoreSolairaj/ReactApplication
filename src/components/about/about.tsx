import Header from '../header/header';
import './about.scss';
import about from '../../assets/image/about-us-content.jpg'
import Footer from '../footer/footer';


const About = () => {
    return (
        <div className="about_main_block">
            <Header></Header>
            <div className='about_container'>
                <div className="about_overlay"></div>
                <div className='about_content'>
                    <p className='about_topic'>About</p>
                    <p className='about_topics'>We are Passionate</p>
                    <p className='about_topics'>About Our Work</p>
                </div>
            </div>
            <div className='about_us_content_container'>
                <div className='about_us_content_image'>
                    <img src={about} alt={about} />
                </div>
                <div className='about_side_contents'>
                    <p className='about_side_headline'>We strive to provide our customers with the highest quality</p>
                    <p className='about_side_content'>Urban Jungle Co. was founded in 1960 by a group of plant enthusiasts who recognized the positive impact that plants can have on our lives. Whether it’s purifying the air, reducing stress, or simply adding a touch of beauty to your environment, plants are more than just decoration—they’re a lifestyle.</p>
                    <p className='about_feel_content'>“We love what we do & create partnerships with our clients to ensure their digital transformation is positioned for long-term success.”</p>
                </div>

            </div>
            <Footer></Footer>

        </div>
    )
}
export default About;
