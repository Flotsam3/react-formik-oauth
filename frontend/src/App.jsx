import './App.css';
import FormCard from './components/FormCard';
import { useFormik } from 'formik';

function App() {
  const {handleChange, values, handleBlur} = useFormik({
    initialValues: {
      name: "", 
      email: "",
      password: ""
    }
  });

  console.log(values);

function handleGoogleAuth(){
  window.open("http://localhost:3000/auth/google", "_self");
}
  

  return (
    <>
      <h1>Welcome</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
          <form >
              <FormCard values={values} handleChange={handleChange} handleBlur={handleBlur} handleGoogleAuth={handleGoogleAuth}/>
          </form>
      </div>
    </>
  )
}

export default App
