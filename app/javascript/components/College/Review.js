import React from 'react'
import styled from 'styled-components'
import Rating from '../Rating/Rating'


const Review = (props)=>{
const{score,title, description} = props.attributes
        return (
            <Card>
                <RatingContainer>
                    <Rating score={score}/>
                </RatingContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Card>
        )
}

export default Review 

const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const Card = styled.div`
  border-radius: 4px;
  background-color: #fff;
  border: 10px solid #E6E6E6;
  padding: 20px;
  margin: 0px 0px 20px 0px;
  position: relative;
  margin-right: 12px;
`

const Title = styled.div`
  padding: 20px 0px 0px 0px;
  font-family: 'Poppins-Bold';
  font-size: 18px;
`

const Description = styled.div`
  padding: 0 0 20px 0;
  font-size: 14px;
`
const Options = styled.div`
position:absolute;
right :15px;
top: 15px;
display: flex;
flex-direction: columns;
`