import React from 'react'
import styled from 'styled-components'
import { db } from './firebase'
const CartItem = ({ id,item }) => {

    let options = []
    for(let i=1; i<Math.max(item.quantity + 1,20); i++){
        options.push(<option value={i}> Qty: {i} </option>)
    }

    return (
        <Container>
            <ImageContainer>
                <img src={item.image} />
            </ImageContainer>

            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>
                        <select
                            value={item.quantity}
                        >
                            {options}
                        </select>
                    </CartItemQuantityContainer>
                    <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                ₹{item.price}
            </CartItemPrice>
        </Container>
    )
}

export default CartItem
const Container = styled.div`
padding-top: 120px;
padding-bottom: 12px;
display: flex;
`
const ImageContainer = styled.div`
width: 180px;
height: 180px;
flex-shrink:0;
flex-grow: 0;
img{
    object-fit: contain;
    height: 100%;
    width: 100%
}
`
const CartItemInfo = styled.div`
flex-grow: 1;
`
const CartItemInfoTop = styled.div`
color: #007185;
h2{
    font-size: 18px;
}
`
const CartItemInfoBottom = styled.div`
diplay: flex;
margin-top: 4px;
`
const CartItemQuantityContainer = styled.div`
select{
    border-radius: 7px;
    background-color: #F0F2F2;
    padding 8px;
    box-shadow: 0 2px 5px rgba(15,17,17,.15);
    :focus{
        outline: none;
    }
}
`
const CartItemDeleteContainer = styled.div`
color: #007185;
margin-left: 160px;
cursor-pointer: 
`
const CartItemPrice = styled.div`
font-size: 18px;
font-weihgt: 700;
margin-left: 16px;
`