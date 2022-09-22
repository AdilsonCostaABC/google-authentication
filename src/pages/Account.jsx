import React from 'react';
import { UserAuth } from '../context/AuthContext';

function Account() {
    const {user,logOut}=UserAuth();
    const handleSignOut =async()=>{
        try{
            await logOut();
        }catch(error){
            console.log(error);
        }
    }
  return (
    <div className='w-[300px] m-auto'>
        <h1 className='pt-12 text-2xl font-bold text-center'>
            
            Welcome:{user?.displayName}
        </h1>
        <button onClick={handleSignOut} className='px-5 mt-10 border py2'> Logout</button>
    </div>
  )
}

export default Account;