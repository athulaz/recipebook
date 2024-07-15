import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';


function Singleview() {

const [view, setView]= useState()

  const params = useParams()
  console.log(params.id); 


  const singleData=async ()=>{

    const result = await axios.get(`https://dummyjson.com/recipes/${params.id}`)
    setView(result.data);

  }

  useEffect(()=>{
   singleData()
  },[])
console.log(view);



  return (
    <div>
      { view?.id?
    <Row>
<Col lg={6}>

<ListGroup.Item> <h5 className='mt-5'> {view?.name} </h5> </ListGroup.Item>
<ListGroup.Item> <b> {view?.cuisine} </b> </ListGroup.Item>
<ListGroup.Item>{view?.mealType} </ListGroup.Item>
<img src={view?.image} className='w-100% p-5' style={{height:'35%'} } alt="" />

</Col>

<Col lg={6}>
<ListGroup className='m-5 p-5'>

    
   
      <ListGroup.Item> <b> INGREDIENTS </b> 
                <>
                  {view?.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </>
              </ListGroup.Item>

              <hr />
              <ListGroup.Item> <b> INSTRUCTIONS </b> 
                <>
                  {view?.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </>
              </ListGroup.Item>
    </ListGroup>
</Col>
    
    </Row>

: 
   <div className='text-center m-4 text-success'>
   <i class="fa-solid fa-spinner fa-spin fa-4x"></i>
  </div>
    
    }
    
</div>
  )
}

export default Singleview





