
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchproducts } from './rtk/products-slice';
import { addToCart } from './rtk/Cart-slice';
import AppNav from './Nav';
function Products() {
  const products = useSelector((state) => state.products);
 

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchproducts());
  }, []);

  return (
    <>
      < AppNav />
      <Container >
        <h1 className="text-center p-5"  >All Products</h1>
 
        <Row className='py-5'>
          {products.map((product) => (
            
            <Col key={product.id}>
              <Card style={{ width: '20rem', margin: '6px' }}>
                <Card.Img variant="top" style={{ height: '35vh' }} src={product.image} />
                <Card.Body>
                  <Card.Title style={{ height: 'auto' }}>{product.title}</Card.Title>

                  <Row >
                    <hr />
                    <Card.Text>
                      <b> Detail this product : </b>
                      {product.description}
                    </Card.Text>
                    <hr />
                    <Card.Title>  <b> Price : </b>  {product.price}$</Card.Title>
                    <Button className='m-1' variant="primary" onClick={() => dispatch(addToCart(product))}>get this product</Button>
                  </Row>


                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>


    </>
  )
}
export default Products;