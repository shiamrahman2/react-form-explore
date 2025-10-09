import React, { useRef } from 'react';

const UnControlledField = () => {
    const emailRef=useRef('');
    const passwordRef=useRef('');
    const handleSubmit=(event)=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        console.log(email);
        console.log(password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="" placeholder='Your Email' />
                <br />
                <input ref={passwordRef} type="password" name="" placeholder='password' />
                <br />
                 <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UnControlledField;