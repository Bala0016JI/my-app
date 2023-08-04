import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { ENV_URL } from "../APIURL";
import '../ProfileView/ProfileViewCart.css';


export default function ProfileViewCart() {
    const [profileDetails, setProfileDetails] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        getDetails();

    }, [])

    let getDetails = () => {
        axios.get(ENV_URL).then(response => {
            console.log("response", response)
            setProfileDetails(response.data)
        }).catch(err => {
            console.log("err", err)
        })
    }
    let handleEdit = (item) => {
        navigate("/my-app/profile", {
            state: {
                details: item
            }
        })
    }
    let handleDelete = (id) => {
        axios.delete(ENV_URL + "/" + id).then(response => {
            alert("deleted succesfully");
            getDetails();
        }).catch(err => {
            console.log("err", err);
        })
    }

    return (
        <div>
            <body id='body_profile'>
                <div className='Cart_container'>
                    <h2>welcome</h2>
                    {
                        profileDetails.map((item, i) => {
                            return (
                                <ul key={i}>
                                    <li> <span id="per_head">Personnal</span>
                                        <br />
                                        <hr />
                                        Name:{item.aboutuserdetails.Name}
                                        <br />
                                        Age:{item.aboutuserdetails.Age}
                                        <br />
                                        MobileNO:{item.aboutuserdetails.MobileNO}
                                        <br />
                                        DOB:{item.aboutuserdetails.DOB}
                                    </li>
                                    <hr />
                                    <li>
                                        <span id="per_head">Family</span>
                                        <br />
                                        FatherName:{item.userparentsdetails.FatherName}
                                        <br />
                                        MotherName:{item.userparentsdetails.MotherName}
                                    </li>
                                    <hr />
                                    <li>
                                        <span id="per_head">Address</span>
                                        <br />City:{item.address.City}
                                        <br />State:{item.address.State}
                                    </li>
                                    <hr />
                                    <li><button onClick={() => handleEdit(item)}>Edit</button>
                                        <button onClick={() => handleDelete(item.id)}>Delete</button></li>
                                    <hr />
                                </ul>
                            )
                        })
                    }

                </div>

            </body>
        </div>

    )
}