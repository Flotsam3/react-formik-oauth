import React, {useState} from 'react';
import FormCard from '../components/FormCard';
import { useFormik } from 'formik';
import { useAuth } from "../components/AuthProvider";
import { Navigate } from 'react-router-dom';

export default function Login() {
    const { user } = useAuth();
    const [register, setRegister] = useState(true);
    const {handleChange, values, handleBlur} = useFormik({
        initialValues: {
          name: "", 
          email: "",
          password: ""
        }
    });
    
    console.log(values);

    if (user) {
      return <Navigate to="/members" />;
    }  
    
    function handleGoogleAuth(){
      window.open("http://localhost:3000/auth/google", "_self");
    }

    function handleGithubAuth(){
      window.open("http://localhost:3000/auth/github", "_self");
    }

  return (
   <>
    <h1>Welcome {user ? user.displayName : null}</h1>
      <div style={{display: "flex", justifyContent: "center"}}>
          <form >
              <FormCard values={values} handleChange={handleChange} handleBlur={handleBlur} handleGoogleAuth={handleGoogleAuth} handleGithubAuth={handleGithubAuth} register={register} setRegister={setRegister}/>
          </form>
      </div>
   </>
  )
}
