import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function TaskForm() {

    const [values, setvalues] = useState({
        CustomerName:"",
        email:"",
        phone:"",
        Address:"",
        Status:''
        
    })

    const navigate=useNavigate

    const handlechnages=(e)=>{
        setvalues({...values,[e.target.name]:[e.target.value]})
    }

    const handlesubmit= async (e)=>{
        e.preventDefault()

         try{
            const response=await axios.post('http://localhost:4000/api/TaskSave', values)
            // console.log(response)
            if(response.status===200){
                navigate('/Dashboard')
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
                    <h2 className='text-lg font-bold mb-4'>Task Form</h2>

                    <form onSubmit={handlesubmit}>
                        <div className='mb-2'>
                            <label htmlFor="username" className='block text-gray-700 text-xl'>CustomerName</label>
                            <input type="text" placeholder='Enter EmployeeName' name="CustomerName" onChange={handlechnages} className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="email" className='block text-gray-700 text-xl'>Email</label>
                            <input type="email" placeholder='Enter Email' name="email" onChange={handlechnages} className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>

                        
                        <div className='mb-2'>
                            <label htmlFor="phone" className='block text-gray-700 text-xl'>Phone</label>
                            <input type="phone" placeholder='Enter number' name="phone" onChange={handlechnages} className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="Address" className='block text-gray-700 text-xl'>Address</label>
                            <input type="text" placeholder='Enter Address' name="Address" onChange={handlechnages} className='w-full px-3 py-2 border-[1px] border-gray-500' />
                        </div>
                        <div className='mb-2 flex p-4 items-center justify-between border w-full ' >
                            <label htmlFor="Status" className='block text-gray-700 text-xl'>Status</label>
                            <br />

                            <label>
                            <input type="radio" name='Status' onChange={handlechnages} value="Raise" id='Raise' />Raise Query
                            </label>
                            <label>
                            <input type="radio" name='Status' onChange={handlechnages} value="OnlineApply" id='OnlineApply'/>Online Apply
                            </label>
                        </div>

                        <button className='w-full bg-green-600 text-white py-2'>Submit</button>
                    </form>
                  
                </div>

            </div>
    </>
  )
}

export default TaskForm