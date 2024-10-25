import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Form() {

    const [values, setvalues] = useState({
        username:'',
        email: '',
        passowrd:''
        
    })

    const navigate=useNavigate

    const handlechnages=(e)=>{
        setvalues({...values,[e.target.name]:[e.target.value]})
    }

    const handlesubmit= async (e)=>{
        e.preventDefault()

         try{
            const response=await axios.post('http://localhost:4000/api/clientSave', values)
            // console.log(response)
            if(response.status===200){
                navigate('/login')
            }
            alert('Thanks for Registered !!!!')
         }catch(err){
            console.log(err)
         }
        
    }
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
                <div className='shadow-lg px-8 py-5 border w-96 cursor-pointer '>
                    <h2 className='text-lg font-bold mb-4'>Register</h2>

                    <form onSubmit={handlesubmit}>
                        <div className='mb-2'>
                            <label htmlFor="username" className='block text-gray-700 text-xl'>UserName</label>
                            <input type="text" placeholder='Enter EmployeeName' name="username" onChange={handlechnages} className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="email" className='block text-gray-700 text-xl'>Email</label>
                            <input type="email" placeholder='Enter Email' name="email" onChange={handlechnages} className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>


                      

                        <div className='mb-2'>
                            <label htmlFor="password" className='block text-gray-700 text-xl'>Password</label>
                            <input type="password" name="password" onChange={handlechnages} placeholder='Enter Password' className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>

                        <button className='w-full bg-green-600 text-white py-2'>Submit</button>
                    </form>
                    <div className='text-center'>
                        <span>Already have a account?</span>
                        <Link to='/Dashboard' className='text-lg text-blue-500 p-1'>Login</Link>
                    </div>
                </div>

            </div>
    </>
  )
}

export default Form