import React, { useState } from 'react';

const ControlledField = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
       //  console.log('submitted');
       if(password.length<6){
        setError('password should be 6 char');
       }else{
        setError('');
       }
    }
    const handleOnchange=(e)=>{
          console.log(e.target.value);
          setPassword(e.target.value);
        //   if(password.length<6){
        //     setError('PassWord Should Be 6 Character');
        //   }else{
        //     setError('');
        //   }
    }
    const[password,setPassword]=useState('');
    const [error,setError]=useState('');
    return (
        <div>
            <form onSubmit={handleSubmit}>
              <input type="email" name="email" id="" placeholder='Your Email' required />
              <br />
              <input type="password" defaultValue={password} onChange={handleOnchange} name="password" placeholder='Your Password' id="" required/>
              <br />
              <input type="submit" value="Submit" />

            </form>
            <p style={{color:'red'}}><small>{error}</small></p>
        </div>
    );
};

export default ControlledField;