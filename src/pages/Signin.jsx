import React,{useEffect} from 'react';
import {GoogleButton} from 'react-google-button';
import {UserAuth} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';

function Signin() {
    const {googleSignInPopUp,googleSignInRedirect,user}=UserAuth();
    const navigate=useNavigate();

    const handleGoogleSignInPopUp= async()=>{
            try{
                    await googleSignInPopUp();
            }catch(error){
               console.log(error);
            }
      };
    const handleGoogleSignInRedirect= async()=>{
            try{
                    await googleSignInRedirect();
                    if (user!=null) {
                      navigate('/account');
                    }
            }catch(error){
               console.log(error);
            }
      };
      useEffect(() => {
        if (user!=null) {
            navigate('/account');
        }
      }, [user])
      
  return (
    <div>
        <h1 className='py-8 text-3xl font-bold text-center'>
            Signin using Popup
        </h1>
        <div className='max-w-[240px] m-auto py-4'>
                <GoogleButton onClick={handleGoogleSignInPopUp}/>
        </div>
        {/* <h1 className='py-8 text-3xl font-bold text-center'>
            Signin using Redirect
        </h1>
        <div className='max-w-[240px] m-auto py-4'>
                <GoogleButton onClick={handleGoogleSignInRedirect}/>
        </div> */}
    </div>
  )
}

export default Signin;