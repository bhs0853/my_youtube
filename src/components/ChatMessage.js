import React from 'react';
import user from "../assests/user.png";

const ChatMessage = ({message}) => {
  return (
    <div className='flex py-2 px-3 text-slate-500 items-center shadow-sm shadow-lightgray'>
        <img src={user} className='h-7 w-7'></img>
        <div className='font-bold px-3'>{message.name}</div>
        <div className='text-white'>{message.message}</div>
    </div>
  )
}

export default ChatMessage;