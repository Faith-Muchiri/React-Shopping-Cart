import React, {useState} from 'react'
import { Card , Button} from 'react-bootstrap'
import formatCurrency from '../utilities/formatCurrency'

export default function ProductList({id,name,price,imageURL}) {
    const [quantity, setQuantity] = useState(1)
  return (
    <div>
        <Card className='h-100 '>
            <Card.Img
            variant="top"
            src={imageURL}
            height="200px"
            style={{ objectFit: "cover" }}
            />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex 
                justify-content-space-between
                align-items-baseline
                mb-4'>
                    <p className='fs-2 ' >{name}</p>

                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                {
                    quantity === 0 ? (
                        <Button className='w-100'>
                            Add to Cart
                        </Button>
                    ) :
                    <div className='d-flex align-items-center
                    flex-column' style={{ gap: '.5rem'}}> 
                    <div className='d-flex align-items-center
                    justify-content-center' style={{ gap: '.5rem'}}> 
                    
                        <Button>-</Button>
                        <div><span className='fs-3'>{quantity}</span> in Cart</div>
                        <Button>+</Button>
                    </div>
                    <Button variant='danger' size='sm'>Remove</Button>
                </div>
                }
                </div>
            </Card.Body>
        </Card>
    </div>
  )
}
