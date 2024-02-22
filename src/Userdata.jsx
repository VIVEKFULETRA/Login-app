import React, { useEffect, useState } from "react";
import "./Crud.css";
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate } from "react-router-dom";

const Userdata = () => {
  const [userdata, setUserdata] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/user").then((result) => {
      result
        .json()
        .then((resp) => {
          setUserdata(resp);
        })
        .catch((error) => {
          console.log(error.msg);
        });
    });
  }, []);

  const Detail = (id) => {
    // console.log("Detail");
    navigate("/admin/userdetails/" + id);
  };
  const Edit = (id) => {
    // console.log("Edit");
    navigate("/admin/useredit/" + id);
  };
  const Delete = (id) => {
    // console.log("Delete");
    if (window.confirm("Pakku ne??")) {
      fetch("http://localhost:5000/user/" + id, {
        method: "DELETE",
      })
        .then((resp) => {
          alert("Deleted Successfully.");
          window.location.reload();
        })
        .catch((err) => {
          console.log("err.msg");
        });
    }
  };

  return (
    <>
      <h1 className="txtcnt">Database</h1>
      <MDBTable align="middle">
        <MDBTableHead>
          <tr align="middle">
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col">Actions</th>
          </tr>
        </MDBTableHead>

        {userdata &&
          userdata.map((item) => (
            <MDBTableBody>
              <tr align="middle">
                <td>
                  <div className="d-flex align-items-center cnt">
                    <p className="fw-bold mb-1">{item.id}</p>
                  </div>
                </td>
                <td>
                  <p className="fw-normal mb-1">{item.name}</p>
                </td>
                <td>
                  <p className="fw-normal mb-1">{item.email}</p>
                </td>
                <td>{item.password}</td>
                <td>
                  <MDBBtn
                    onClick={() => Detail(item.id)}
                    className="mr-0 pd-0"
                    color="link"
                    rounded
                    size="sm"
                  >
                    Details
                  </MDBBtn>
                  <MDBBtn
                    onClick={() => Edit(item.id)}
                    className="mr-0 pd-0"
                    color="link"
                    rounded
                    size="sm"
                  >
                    Edit
                  </MDBBtn>
                  <MDBBtn
                    onClick={() => Delete(item.id)}
                    className="mr-0 pd-0"
                    color="link"
                    rounded
                    size="sm"
                  >
                    Delete
                  </MDBBtn>
                </td>
              </tr>
            </MDBTableBody>
          ))}
      </MDBTable>
    </>
  );
};

export default Userdata;
