import React from 'react';
import {Link} from 'react-router-dom';
import {UserAuth} from '../context/AuthContext';

const Navbar=()=>{
    const {user,logOut}=UserAuth();
    const handleSignOut =async()=>{
        try{
            await logOut();
        }catch(error){
            console.log(error);
        }
    };
    return(
        <div className='flex justify-between w-full p-4 bg-gray-200'>
            <h1 className='text-2xl font-bold text-center'>
                Firebase Google Auth & Context
            </h1>
            {user?.displayName? <button onClick={handleSignOut}>Logout</button>:
                (<div>
                <Link to='/signin'>Sign In</Link>   
                <Link className='ml-4' to='/biometricsignin'>Biometric sign</Link>   
                </div>
                )        
             
            }

        </div>
    )
}
export default Navbar;