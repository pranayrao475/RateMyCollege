import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size:30px;
  img {
    margin-right: 10px;
    height: 90px;
    width: 90px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
    margin-bottom: -8px;
  }
  
`

const UserReviewCount = styled.div`
  font-size: 25px;
  padding:10px 0;
`

const ScoreOutOf = styled.div`
  padding-top: 18px;
  font-size: 18px;
  font-weight: bold;
`

const Header = (props) => {
    const {name, image_url, avg_score}= props.attributes
    const total = props.reviews.length

    return(
        <Wrapper>
            <h1><img src={image_url} alt={name} />{name}</h1>
            <div>
                <UserReviewCount>{total} User reviews</UserReviewCount>
                <div className="Rating"></div>
                <ScoreOutOf>{avg_score} out of 5</ScoreOutOf>
            </div>
        </Wrapper>
    )
}

export default Header 