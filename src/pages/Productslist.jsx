import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Productslist() {

    const [product, setProduct]= useState([])

    const [sdata, setSdata]= useState('')



const fetchData=async()=>{
  const result = await axios.get('https://dummyjson.com/recipes');
  setProduct(result.data.recipes);
 }

const search =()=>{
 const data= product.filter (i=>(i.name+i.cuisine).toLowerCase().trim().includes(sdata.toLowerCase().trim()))
 setProduct(data);
}

// const fetchData= async ()=>{
//    const data = await fetch('https://fakestoreapi.com/products') // to store data
//     data.json() // .then(data=>data.json())
//     .then(data=>setProduct(data))
// }

useEffect(()=>{   // fetch is asynchronous method so we can't diretly call in useeffect
    fetchData()
},[sdata])

// console.log(product);
console.log(sdata);
  return (
    <div>
  <Container className='mt-5'>
      <Row>
        <Col lg={6}>
<div className=''> 
<img src="https://t4.ftcdn.net/jpg/03/25/71/87/240_F_325718700_Fdgmb8R5H2RqGG5px27QhEkTAMvmjieo.jpg" alt="" /> 



</div>
      
       
        </Col>
        <Col lg={6}>
        <h5>   Welcome to your  <span className='text-success'>Recipe Book </span></h5>
           <div>  

            <Row>
              <Col lg={10 }>  
             <FloatingLabel onChange={(e)=>setSdata(e.target.value)} className='w-100 m-2' controlId="floatingPassword" label="Search Recipe">
             <Form.Control type="text" placeholder="Search Recipe" />
            
             </FloatingLabel>
             </Col>
             <Col lg={2 }> 
             
             <Button onClick={search} className='m-3'> Search </Button>
             </Col>
             </Row>
             </div>
        </Col>
      </Row>
    </Container>
{product.length>0?
<div  className='p-4' >

<Row>

    {

        product.map(i=>(
            <Col lg={3} md={4} sm={6}>
              <Link to={`/view/${i.id}`} style={{textDecoration:'none'}}>
            <Card style={{ width: '90%' }} className="mb-5 bg-light">
            <Card.Img style={{height:'300px'}} variant="top" src={i.image} />
            <Card.Body>
              <Card.Title> {i.name.length>35?i.name.slice(0,35)+"...":i.name} </Card.Title>
              <Card.Text>
             
              <br />
             {i.cuisine} {i.mealType}
              <br />
               Prep Time : {i.prepTimeMinutes} min
              <br />
              Rating: {i.rating}

              </Card.Text>
              <Button variant="secondary">Recipe Details</Button>
            </Card.Body>
          </Card>
          </Link>
            </Col>
        )

        )
    }
</Row>


</div>
:
<div className='text-center m-4 text-success'>
<i class="fa-solid fa-spinner fa-spin fa-4x"></i>

</div>
}
    </div>
  )
}

export default Productslist
