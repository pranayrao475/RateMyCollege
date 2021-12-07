import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'


const Wrapper = styled.nav`
  width: 100%;
  height: 85px;
  line-height: 65px;
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  position: fixed;
  z-index: 1000;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Left = styled.div`
  flex-basis: auto;
  align-self: flex-start !important;
`

const Right = styled.div`
  flex-basis: 12%;
  align-self: flex-end !important;
  margin-right: 24px;
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer
  }
`

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0;
  margin:0;
  list-style-type: none;
`

const Logo = styled.span`
  font-family: 'Poppins-ExtraBold';
  font-weight: bold;
  font-size: 30px;
  a {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: #fff;
    text-decoration: none;
  }
`

const Navbar = (props) => {
  return (
    
      
        <Wrapper>
          <Container>
            <Nav>
              <Left>
                <Logo><Link to="/">RateMyCollege</Link></Logo>
              </Left>
              <Right>
                <Menu>
                     
                    <Fragment>
                      <li><Link to="/">Home</Link></li>
                       {/* <li><a >Log Out</a></li> */}
                    </Fragment> 
                    <Fragment>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/register">Signup</Link></li>
                    </Fragment>
                  
                </Menu>
              </Right>
            </Nav>  
          </Container>
        </Wrapper>
    
  )
}

export default Navbar