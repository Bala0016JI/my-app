import{Route,Routes,Navigate} from 'react-router-dom';
import Dashboard from '../Components/Dashboard/Dashboard';
import About from '../Components/About/About';
import Home from '../Components/Home/Home';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import NoPage from '../Components/NoPage/NoPage';
import Profile from "../Components/Profile/Profile";
import Customerprofile from '../Components/Customerprofile/Customerprofile';
import Student from '../Components/Student/Student';
import ProfileView from '../Components/ProfileView/ProfileView';
import ProfileViewCart from '../Components/ProfileView/ProfileViewCart';
function Main(){
    return(
        <Routes>
        <Route path='' element={<Navigate to ='/login' />}/>
         <Route path='/login' element={<Login/>}/>
         <Route path='/signup' element = {<Signup/>}/>

         {/* wrong path url handled -no page navigate */}
         <Route path='*' element={<NoPage/>}/>

         {/* once login navigate to dashboard -appln layout */}
         <Route path="/my-app" element={<Dashboard/>}> 
         
         <Route path="home" element={<Home/>}/>
         <Route path="about" element={<About/>}/>
         <Route path="profile" element={<Profile/>}/>
         <Route path= "Customerprofile" element={<Customerprofile/>}/>
         <Route path= "Student" element={<Student/>}/>
         <Route path="profile-view" element={<ProfileView/>}/>
         <Route path='Profile-View-Cart' element={<ProfileViewCart/>}/>
         

        


         </Route>

        </Routes>
    )
}
export default Main;