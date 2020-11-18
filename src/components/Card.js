import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle } from 'mdbreact'

const Card = (props) => {
    const { title, image } = { ...props.cardInfos }
    return ( 
        <div className='col-lg-4 col-sm-12'>
            <MDBCard>
                <MDBCardImage className="img-fluid" src={image} waves />
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBBtn 
                        data-toggle="modal" 
                        data-target="#exampleModalCenter"
                        onClick={() => props.onSelectClick()}
                    >Info</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    )
}
export default Card;
