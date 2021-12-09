import {useState} from 'react'
import React from 'react'
import styled from 'styled-components'
import axios from "axios";


const Addcollege = (props) => {
    const [isform, setisform] = useState({  })
    const [addcollege, setAddcollege] = useState([])
    const [error, setError] = useState('')
    function handleChange(e){
        //e.preventDefault()
        setisform({...isform, [e.target.name]: e.target.value})
        console.log(e.target.name)
    }
    function handleSubmit(e){
        e.preventDefault()
        console.log(e)
        axios.post('/api/v1/colleges', {...college})
        .then( (resp) => {
            setAddcollege([...colleges, resp.data.data])
            setAddcollege({name:'', img_url:''})
            setError('')
        })
        .catch(resp => console.log(resp))
return(
    <> 
    <form onSubmit={props.handleSubmit}>
                <h3> Don't see your college add here</h3>
                <Field>
                    <input onChange={props.handleChange} type="text" name="College" placeholder="College name"/>
                </Field>
                <Field>
                    <input onChange={props.handleChange}  type="text" name="AddImage" placeholder="College Logo"/>
                </Field>
                <SubmitBtn type="submit" >Add College</SubmitBtn>

    </form>
    
    </>
)


}
}
export default Addcollege


const SubmitBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #71b406;
  width:100%;
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
    width: 96%;
    min-height:30px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
    font-size: 15px;
  }
  
  textarea {
    width: 100%;
    min-height:30px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;      
  }
`