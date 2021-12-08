import React from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'
import Rating from '../Rating/Rating'

const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    
   

`
const Collegelogo = styled.div`
    width: 50px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    img{
        
        height: 70px;
        width: 70px;
        border-radius: 100%;
        border: 1px solid #efefef;
    }
`
const CollegeName = styled.div`
padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;
    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`



const College = (props) => {
   
    
    return (
        <Card>
            <Collegelogo>
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </Collegelogo>
            <CollegeName>{props.attributes.name}</CollegeName>
            <Rating score={props.attributes.avg_score}/>
            
            <LinkWrapper>
                <Link to={`/colleges/${props.attributes.slug}`}>View College</Link>
            </LinkWrapper>
        </Card>
    )
}

export default College