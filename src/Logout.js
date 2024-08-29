import { Link, Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import { useState } from 'react';
function Logout() {
  const [result, setresult] = useState(false)
  const log = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "are You want be log out !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out !"

    }).then((result) => {
      if (result.isConfirmed) {
        setresult(true)
        Swal.fire({

          title: "Ok!",
          text: " You are logged out.",
          icon: "success"
        });
      }
    });
  }

  if (result) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Link onClick={log}> <Button variant="danger" >Log Out</Button></Link>
    </>
  )
}
export default Logout;