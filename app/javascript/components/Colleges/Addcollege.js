import {useState} from 'react'
import React from 'react'
import styled from 'styled-components'
import axios from "axios";


const Addcollege = (props) => {
    // const [isform, setIsform] = useState({  })
    // const [addcollege, setAddcollege] = useState([])
    // const [error, setError] = useState('')
    // function handleChange(e){
    //     //e.preventDefault()
    //     setIsform({...isform, [e.target.name]: e.target.value})
    //     console.log(e.target.name)
    // }
    // function handleSubmit(e){
    //     e.preventDefault()
    //     axios.post('/api/v1/colleges', {...college, college_id})
    //     .then( (resp) => {
    //         setAddcollege([...colleges, resp.data.data])
    //         setAddcollege({name:'', img_url:''})
    //         setError('')
    //     })
    //     .catch(resp => console.log(resp))
return(
    <Card> 
    <form >
                
                <Wrapper>
                <Field>
                    <input type="text" name="College" placeholder="College name"/>
                </Field>
                <Field>
                    <input   type="text" name="AddImage" placeholder="College Logo"/>
                </Field>
                <SubmitBtn type="submit" >Add College</SubmitBtn>
                </Wrapper>

    </form>
    
    </Card>
)


}

export default Addcollege

const Card = styled.div`
   
    background: #fff;
   
    align-items: center;

`
const Wrapper = styled.div`
   
    background: #fff;
   width: 80%;
   //display:flex;
   //flex-direction:row;
   //justify-content: space-evenly;
   align-items: center;
   

`


const SubmitBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;   
  padding:5px 5px;  
  border: 1px solid #71b406;
  width:30%;
  font-size:12px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`
const Field = styled.div`
  border-radius: 4px;
  input {
    width: 70%;
    min-height:15px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
    font-size: 15px;
  }
  
  textarea {
    width: 70%;
    min-height:15px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`