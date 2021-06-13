import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search'; // for search bar icon
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; //for shopping cart icon
import LocationOnIcon from '@material-ui/icons/LocationOn'; 
function Header() {
    return (
        <Container>
            <HeaderLogo>
                <img src={"https://mikekitko.com/wp-content/uploads/2019/10/amazon-logo-white-768x232.png"}/>
            </HeaderLogo>

            <HeaderOptionAddress>
                <HeaderOption>
                    <LocationOnIcon/>
                    <OptionLineOne>hello</OptionLineOne>
                    <OptionLineTwo>Select your address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>

            <HeaderSearch>
                <HeaderSearchInput type='text' />
                <HeaderSearchIconContainer>
                    <SearchIcon/>
                </HeaderSearchIconContainer>
            </HeaderSearch>

            <HeaderNaviItems>
                <HeaderOption>
                    <OptionLineOne>Hello Raj</OptionLineOne>
                    <OptionLineTwo>Accounts & Lists</OptionLineTwo>
                </HeaderOption>
                    
                <HeaderOption>
                    <OptionLineOne>Returns</OptionLineOne>
                    <OptionLineTwo>& Orders</OptionLineTwo>
                </HeaderOption>

                <HeaderOptionCart>
                    <ShoppingCartIcon/>
                    <CartCount>5</CartCount>
                    <OptionLineOne>Cart</OptionLineOne>
                </HeaderOptionCart>
            </HeaderNaviItems>
        </Container>
    )
}

export default Header


const Container = styled.div`
height: 60px;
background-color: #0F1111;
display: flex;
align-items: center;
justify-content: space-between;
color: white;
`

const HeaderLogo = styled.div`
img{
    width :100px;
    margin-left = 11px;
}

`
const HeaderOptionAddress = styled.div`
padding-left: 9px;
display: flex;
align-items:center;
`
const OptionLineOne = styled.div`

`
const OptionLineTwo = styled.div`
font-weight:700;
`
const HeaderSearch = styled.div`
display: flex;
flex-grow:1;
height: 40px;
border-radius: 4px;
overflow: hidden;
margin-left: 4px;
`
const HeaderSearchInput = styled.input`
flex-grow:1;
:focus{
    outline:none;
}
`
const HeaderSearchIconContainer = styled.div`
background-color: #febd69;
width 45px;
color:black;
display: flex;
justify-content:center;
align-items:center;
`

const HeaderNaviItems = styled.div`

`

const HeaderOption = styled.div`
    padding: 10px 9px 10px 9px;
`
    //padding-left:9px;
    //padding-right:9px;
    //padding-top: 10px;
    //padding-bottom: 10px;

const HeaderOptionCart = styled.div`
display: flex;
align-items:center;
padding-right:9px;
padding-
`
const CartCount = styled.div`

`