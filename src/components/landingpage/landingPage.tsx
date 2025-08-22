import Footer from '../footer/footer';
import Header from '../header/header';
import './landingPage.scss'

const LandingPage = () => {
    return(<div>
        <Header></Header>
        <div className='landing_container'>
            <div className="landing_overlay"></div>
            <div className='landing_content'>
                <p className='landing_topic'>Welcome to Urban Jungle Co.</p>
                <p className='landing_topics'>Discover the Beauty of</p>
                <p className='landing_topics'>Nature at Your Fingertips</p>
            </div>
        </div>
        <Footer></Footer>
    </div>)
}
export default LandingPage;