import { Button, Container, Image } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { clear, deleteFromCart } from './rtk/Cart-slice';
import Swal from 'sweetalert2'
import AppNav from './Nav';
import { SlBasket } from "react-icons/sl";

function Cart() {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const totalprice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0)
  return (
    <>
      < AppNav />
      <Container>
        <h1 className='py-5'>Welcom To Cart
          {' '}
          <SlBasket />
        </h1>
        <Button variant='danger' className='mb-3' onClick={() => {

          Swal.fire({
            title: "Are you sure?",
            text: "You want to delete all data!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

              dispatch(clear())

              Swal.fire({
                title: "Deleted!",
                text: "Your data has been deleted.",
                icon: "success"
              });
            }
          });


        }}>Delete All Data
          {' '}
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
          </svg>
        </Button>
        <h4  >Total Price : {totalprice.toFixed(2)} $</h4>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Img</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td><Image src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} /></td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td><Button variant='danger' onClick={() => {
                  dispatch(deleteFromCart(product))
                }}
                >Delete
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                  </svg>
                </Button></td>
              </tr>



            ))}


          </tbody>
        </Table>
      </Container>
    </>
  )
}
export default Cart;