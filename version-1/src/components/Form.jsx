//import styles
import "./Form.css";
import {useState} from 'react';
export default function Form()
{
    const [formData, setFormData]= useState({
        fullName: '',
        email: '',
        country:'',
        bio:''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        const checked = e.target.checked;
        console.log(name,value,checked);
        setFormData((prevFormData) => ({ ...prevFormData, [name]:value
        }));
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log('formData',formData);
        setFormData({
            fullName: '',
            email: '',
            country:'',
            bio:'' 
        });
    }

    return(<>
        <form>
            <h2> My Profile</h2>
            <p> <input name="fullName" id="fullName" value={formData.fullName} type="text" placeholder="Full Name" onChange={handleChange}/> </p>          
            <p> <input name="email" id="email" value={formData.email} type="email" placeholder="Email" onChange={handleChange}/> </p>
            <p> <input name="country" id="country" value={formData.country} type="text" placeholder="Country" onChange={handleChange}/> </p>      
            <textarea placeholder="Bio" id="bio" name="bio" value={formData.bio} rows="4" onChange={handleChange} />
            <button type="submit" onClick={handleSubmit}> Submit </button>
        </form>
    </>);
}