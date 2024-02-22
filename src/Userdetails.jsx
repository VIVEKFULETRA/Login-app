import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableBody } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
import "./Crud.css"

const Userdetails = () => {
    const { userid } = useParams()
    const [userdetail, setUserdetail] = useState({})

    useEffect(() => {
        // console.log("useeffect");
        fetch("http://localhost:5000/user/" + userid).then((result) => {
            // console.log(result)
            result.json().then((resp) => {
                // console.log(resp);
                setUserdetail(resp)
            })
        })
    }, [])

    return (
        <div className='cnt'>
            <MDBTable hover className='tbl'>
                <MDBTableBody align='middle'>
                    <tr>
                        <th scope='row'>Name</th>
                        <td>{userdetail.name}</td>
                    </tr>
                    <tr>
                        <th scope='row'>Email</th>
                        <td>{userdetail.email}</td>
                    </tr>
                    <tr>
                        <th scope='row'>Password</th>
                        <td>{userdetail.password}</td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
        </div>
    );
};

export default Userdetails