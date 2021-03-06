import React from 'react'
import styled from 'styled-components'
import { db } from './firebase';
function Product({title,price,rating,image,id}) {
    const addToCart = () => {
        const cartItem = db.collection("cartItems").doc(id);
        cartItem.get()
        .then((doc)=>{
            //console.log(doc)
            if(doc.exists){
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            }
            else {
                db.collection("cartItems").doc(id).set({
                    name: title,
                    image:image,
                    price:price,
                    quantity: 1
                })
            }
        })
    }

    return (
        <Container>
            <Title>
                {title}
            </Title>
            <Price>
                ₹{price}
            </Price>
            <Rating>
                {
                    Array(rating)
                    .fill()
                    .map(rating => <p>⭐</p>)
                }
            </Rating>
            <Image src={image} />
            <ActionSection>
                <AddToCartButton
                    onClick={addToCart}>
                    Add To Cart 
                </AddToCartButton>
            </ActionSection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background-color: white;
    z-index: 100;
    height: 300px;
    padding: 20px;
    margin: 10px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    margin-top: 3px;
`
const Title = styled.span``
const Price = styled.span`
font-weight: 500;
`
const Rating = styled.div`
display: flex;
`
const Image = styled.img`
max-height: 150px;
object-fit: contain;
`
const ActionSection = styled.div`
margin-top : 12px;
display: grid;
`
const AddToCartButton = styled.button`
width: 100px;
background-color: #f0c14b;
border: 2px solid #a88734;
border-radius: 2px;
cursor: pointer;
`