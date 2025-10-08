import React, { useState } from 'react';

const ControlledField = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
       //  console.log('submitted');
    }
    const handleOnchange=(e)=>{
          console.log(e.target.value);
    }
    const[password,setPassword]=useState('');
    return (
        <div>
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" id="" placeholder='Your Email' required />
              <br />
              <input type="password" defaultValue={password} onChange={handleOnchange} name="password" placeholder='Your Password' id="" required/>
              <br />
              <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default ControlledField;