import { useState } from "react"

const useInputField=(defaultValue)=>{
  
      const[fieldInput,setFieldInput]=useState(defaultValue);
      const handleOnChagne=(event)=>{
         setFieldInput(event.target.value);
      }
      return [fieldInput,handleOnChagne];
}
export default useInputField;