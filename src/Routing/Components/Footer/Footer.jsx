import { Link } from 'react-router-dom';
import'../Footer/Footer.css';
// import{Link}from 'react-router-dom';
export function Footer(){
    return(
        <div>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <footer>
        <div className="footer-content">
            <h3>Footer</h3>
            {/* <p>This footer is created by me to complete the task from our institute called
                Besent technologies chennai thiruvanmiyur 
            </p> */}
            <ul className="socials">
                <li><Link to="#"><i className="fa fa-facebook"></i></Link></li>
                <li><Link to="#"><i className="fa fa-twitter"></i></Link></li>
                <li><Link to="#"><i className="fa fa-google-plus"></i></Link></li>
                <li><Link to="#"><i className="fa fa-youtube"></i></Link></li>
                <li><Link to="#"><i className="fa fa-linkedin-square"></i></Link></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy;2023 <Link to="#"></Link>  </p>
                    <div className="footer-menu">
                      <ul className="f-menu">
                        <li><Link to="#">Home</Link></li>
                        <li><Link to="#">About</Link></li>
                        <li><Link to="#">Contact</Link></li>
                        
                      </ul>
                    </div>
        </div>

    </footer>
        </div>
    )
}
