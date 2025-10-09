import React from 'react';
import useInputField from '../../hooks/useInputField';

const CustomHookForm = () => {
    const[name,changeName]=useInputField('');
    const[email,emailOnChange]=useInputField('');
    const [password,passwordOnChange]=useInputField('');
    const handleOnSubmit=(e)=>{
          e.preventDefault();
          console.log(name,email,password);
    }
    return (
        <div>
           <form onSubmit={handleOnSubmit}>
             <input onChange={changeName} type="text" name="name"  placeholder='Your Name'/>
             <br />
             <input onChange={emailOnChange} type="email" name="email" placeholder='Your Email' />
             <br />
             <input onChange={passwordOnChange} type="password" name="password" placeholder='password' />
             <br />
             <input type="submit" value="Submit" />
           </form>
        </div>
    );
};

export default CustomHookForm;