import React, { useState } from 'react'
import "./Crud.css"
import { MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from 'react-router-dom';

const Useradd = () => {

    const [id, setId] = useState()
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const navigate = useNavigate()

    const handleadd = () => {
        // console.log("handleadd");
        // console.log(id,name,email,password);
        const data = { id, name, email, password }
        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((result) => {
            result.json().then((resp) => {
                setName("")
                setEmail("")
                setPassword("")
                navigate("/admin")
            }).catch((error) => {
                console.log(error.msg);
            })
        })

    }

    return (
        <>
            <h1 className='txtcnt'>Add User</h1>
            <MDBContainer fluid className="p-3 my-5 h-custom">

                <MDBRow>

                    <MDBCol col='10' md='6'>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
                    </MDBCol>

                    <MDBCol col='4' md='6'>

                        <MDBInput value={id} onChange={(e) => setId(e.target.value)} disabled wrapperClass='mb-4' label='Id' id='formControlLg' type='email' size="lg" />
                        <MDBInput value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='Name' id='formControlLg' type='email' size="lg" />
                        <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg" />
                        <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" />
                        <div className='text-center text-md-start mt-4 pt-2'>
                            <MDBBtn onClick={handleadd} className="mb-0 px-5" size='lg'>Add User</MDBBtn>
                        </div>

                    </MDBCol>

                </MDBRow>

                <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">

                    <div className="text-white mb-3 mb-md-0">
                        Copyright © 2020. All rights reserved.
                    </div>

                </div>

            </MDBContainer>
        </>
    )
}

export default Useradd