import React from 'react'
import { Col, Row } from "react-bootstrap"
import productItems from "../data/db.json"
import ProductList from '../components/ProductList'


export default function Products() {

  return (
    <>
      <h1>Products</h1>
      
      <Row md={2} xs={1} lg={3} className="g-3">
        {productItems.map( prod => {
          return(
            <Col key={prod.id}>
              <ProductList
              {...prod}
              />

            </Col>
          )
        }
          
        )}
      </Row>
    </>
  )
}
