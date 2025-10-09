
import './App.css'
import ControlledField from './Components/ControlledField/ControlledField'
import CustomHookForm from './Components/CustomHookForm/CustomHookForm'
import FormAction from './Components/FormAction/FormAction'
import ProductManagement from './Components/ProductMangement/ProductManagement'
import SimpleForm from './Components/SimpleForm/SimpleForm'
import UnControlledField from './Components/UnControlledField/UnControlledField'

function App() {
  

  return (
    <>
         <h1>Explore Form</h1>
         {/* <SimpleForm></SimpleForm> */}
         {/* <FormAction></FormAction> */}
         {/* <ControlledField></ControlledField> */}
         {/* <UnControlledField></UnControlledField> */}
         {/* <CustomHookForm></CustomHookForm> */}
        <ProductManagement></ProductManagement>
    </>
  )
}

export default App
