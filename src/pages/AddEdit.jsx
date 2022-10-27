import React,{useState,useEffect} from 'react'
import {useLocation, useParams} from "react-router-dom"
import axios from "axios"
import "./AddEdit.css"
import {toast} from "react-toastify"
 
const initialState={
    name:"",
    email:"",
    contact:"",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState)
  const {name,email,contact}=state;

  const {id} =useParams();
  useEffect(()=>{
    if(id){
        getSingleUser(id);
    }
  },[id])
const getSingleUser= async (id)=>{
    const response=await axios.get(`http://localhost:8000/user/${id}`)
if(response.status===200){
    setState({...response.data[0]})
}
}
  
const addUser=async(data)=>{
    const response=await axios.post("http://localhost:8000/user",data)
    if(response.status===200){
        toast.success(response.data);
    }
}

const updateUser=async(data,id)=>{
    const response=await axios.put(`http://localhost:8000/user/${id}`,data)
    if(response.status===200){
        toast.success(response.data);
    }
}

  const handleSubmit=(e)=>{
e.preventDefault();
if(!name || !email || !contact){
    toast.error("Please provide value into each input field");
}else
{
    if(!id){
 addUser(state);
    }else{
        updateUser(state,id)
    }
  
}
  }

  const handleInputChange=(e)=>{
    let{name,value}=e.target;
    setState({...state,[name]:value})
  }

    return (
    <div style={{marginTop:"100px"}} >
        <h1 style={{textDecoration:"underline",fontWeight:"700", padding:"20px"}}>Employee Details</h1>
        <form style={{margin:"auto",padding:"15px",maxwidth:"400px",alignContent:"center"}} onSubmit={handleSubmit} className="formContainer">
<div className='formItem'>
<label htmlFor='name'>Name</label>
<input className="formClass" type="text"  name="name" placeholder='Enter Name....' onChange={handleInputChange} value={name} />
</div>
<div className='formItem'>
<label htmlFor='name'>Email</label>
<input className="formClass" type="email"  name="email" placeholder='Enter Email....' onChange={handleInputChange} value={email} />
</div>
<div className='formItem'>
<label htmlFor='name'>Contact</label>
<input className="formClass" type="number"  name="contact" placeholder='Enter contact....' onChange={handleInputChange} value={contact} />
</div>
<input  type='submit' value={id ? "Update":"Add"}/>
        </form>
    </div>
  )
}

export default AddEdit