import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export default function Dashboard(){
    return(
        <div>
           <Header/>
           {/* sub routing dynamic content render-outlet (where outlet is place , the content(component) should be render in that place ) */}
           <Outlet/>
           <Footer/>
        </div>
    )
}