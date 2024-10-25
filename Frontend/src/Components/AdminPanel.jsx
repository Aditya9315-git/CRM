import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function AdminPanel() {

  let [data,setdata]=useState([])

  useEffect(()=>{
  fetchData()
  },[])


  async function fetchData() {
    let result = await axios.get('http://localhost:4000/api/getclient')
    setdata(result.data)
    console.log(result.data)

  }


  return (
    <>
   

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Agnet Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Email
                </th>
            
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    Task status
                </th>
            </tr>
        </thead>

        
        <tbody>
          { data.map((agent,key)=>(
            <tr key={key} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {agent.username}
                </th>
                <td class="px-6 py-4">
                    {agent.email}
                </td>
                <td class="px-6 py-4">
                    Active
                </td>
                <td class="px-6 py-4">
                    Task
                </td>
                <td class="px-6 py-4">
                <Link to='/TaskForm' className='text-lg text-blue-500 p-1'>Add Task</Link>                
                </td>

            </tr>
       ))}
        </tbody>
        
    </table>
</div>

    </>
  )
}

export default AdminPanel