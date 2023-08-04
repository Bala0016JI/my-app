import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ENV_URL } from "../APIURL";

export default  function ProfileView(){
    const [profileDetails,setProfileDetails] =useState([]);
    const navigate=useNavigate();
    useEffect(()=>{

        getDetails();

    },[])

    let getDetails=()=>{
        axios.get(ENV_URL).then(response=>{
            console.log("response",response)
            setProfileDetails(response.data)
           }).catch(err=>{
            console.log("err",err)
           })
    }
    let handleEdit=(item)=>{
     navigate("/my-app/profile",{
        state:{
           details:item
        }
     })
    }
    let handleDelete=(id)=>{
        axios.delete(ENV_URL+"/"+id).then(response=>{
            alert("deleted succesfully");
            getDetails();
        }).catch(err=>{
            console.log("err",err);
        })
    }
    return(
        <div>
        <h1>Profile View</h1>
        {/* {JSON.stringify(profileDetails)}  */}
        {
            profileDetails.map((item,i)=>{
                return(
                    <ul key={i}>
                        <li>Personnal {item.aboutuserdetails.Name} {item.aboutuserdetails.Age}</li>
                        <li>Family {item.userparentsdetails.FatherName} {item.userparentsdetails.MotherName}</li>
                        <li>Address {item.address.City} {item.address.State}</li>
                        <li><button onClick={()=>handleEdit(item)}>Edit</button>
                        <button onClick={()=>handleDelete(item.id)}>Delete</button></li>
                        <hr/>
                    </ul>
                )
            })
        }
        </div>
    )
}