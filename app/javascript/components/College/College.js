import React, {useState, useEffect, Fragment} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import Header from './Header';
import ReviewForm from "./ReviewForm";
import Review from "./Review";
import styled from 'styled-components'


const Wrapper= styled.div`
margin-left: auto;
margin-right: auto;
`

const Column = styled.div`
background: rgba(240, 226, 233, 0.8); 
  max-width: 50%;
  width: 50%;
  float: left; 
  height: 100vh;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:last-child {
    background: white;
    border-top : 1px solid red;
    
  }
`
const Main = styled.div`
padding-left: 60px;
`



const College = (props) => {
    const [college, setCollege] = useState({})
    const [review, setReview]= useState({})
    const [loaded, setLoaded] = useState(false)
    const { slug } = useParams();
   
    useEffect(() =>{
        
        const url = `/api/v1/colleges/${slug}`
        axios.get(url)
        .then(resp => {
    
            setCollege(resp.data)
            setLoaded(true)
        })
        .catch(resp => console.log(resp))
    }, [])

     // Modify text in review form
  const handleChange = (e) => {
    e.preventDefault()
    
    setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))
  }

  // Create a review
  const handleSubmit = (e) => {
    e.preventDefault()

    const csrfToken = document.querySelector('[name= csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

    const college_id= college.data.id
    axios.post('/api/v1/reviews', {review, college_id})
    .then(resp => {
        const included = [...college.included, resp.data.data]
  
        setCollege({...college, included })
        setReview({title:'', description:'',score: 0})
    })
    .catch(resp => {})

    
    
  }
  const setRating = (score, e) => {
    e.preventDefault()
    setReview({...review, score})
        }

let reviews
if(loaded && college.included) {
        reviews = college.included.map((item, index) => {
           
            return (
                <Review
                key={index}
                attributes={item.attributes}
                />
            )
        })
}
    return  (
                <Wrapper>
                    
                    {
                        loaded &&
                        <Fragment>
                            <Column>
                                <Main>
                                    <Header
                                    attributes={college.data.attributes}
                                    reviews = {college.included}
                                    />
                                {reviews}
                                </Main>
                            </Column>
                            <Column>
                                <ReviewForm
                                handleChange={handleChange}
                                handleSubmit={handleSubmit}
                                setRating={setRating}
                                attributes= {college.data.attributes}
                                review={review}
                                />
                            </Column>
                        </Fragment>
                    }

                </Wrapper>
            )
    
}

export default College 