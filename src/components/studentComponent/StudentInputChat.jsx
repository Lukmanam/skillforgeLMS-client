import React from 'react'

const StudentInputChat = ({
    label='',
    name='',
    type='text', 
    className='',
    isRequired=true,
    placeholder='',
    value='',
    onChange=()=>{},
}) => {
  return (
    <div className='w-full'>
    <div className=" bg-slate-100  flex items-center p-2">
<input
             type={type} id={name}
             placeholder="Type your message..."
             className={"w-full p-2 border border-gray-300 shadow-xl rounded-2xl"}
             onChange={onChange}
           />
           <button className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-full">
           <img
               className="w-6 h-6 shadow-lg"
               src="../assets/send.png"
               alt="send"
             />
           </button> 
              
 
</div>
</div>
  )
}

export default StudentInputChat
