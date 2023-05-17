import Typed from "react-typed";
import { AiFillFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';


const Header = () => {

    return <header>
        <div className='header-wrapper'>
            <h1 className='main-title'>Nevena Gajdov</h1>
            <div className='main-description'>
                <span className='main-description-light'>I am</span>
                <Typed
                    strings={[
                        "Vladina Ljubav",
                        "Sve sto zelim",
                        "Asistentkinja :)",
                    ]}
                    typeSpeed={50}
                    backSpeed={10}
                    loop
                />
            </div>
            <div className="header-bottom">
                <a href='#' className='social-link facebook'>
                    <AiFillFacebook />
                </a>
                <a href='#' className='social-link instagram'>
                    <AiOutlineInstagram />
                </a>
                <a href='#' className='social-link linkedin'>
                    <AiOutlineLinkedin />
                </a>
            </div>
        </div>
    </header>
}

export default Header