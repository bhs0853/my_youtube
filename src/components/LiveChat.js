import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage.js';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../store/chatSlice.js';
import { randomNameGenerator,randomMessageGenerator } from '../utils/helpers/randomGenerator.js';

const LiveChat = () => {
    const [liveMessage,setLiveMessage] = useState('');
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.livechat.messages);
    useEffect(()=>{
        const interval = setInterval(() => {
            dispatch(addMessage({
                name: randomNameGenerator(),
                message : randomMessageGenerator(18)
            }));
        },2000);
        return () => {
            clearInterval(interval);
        }
    },[]);
  return (
    <div className='p-3 border  border-lightgray pl-5 rounded-lg w-96 bg-searchbackground text-white'>
        <div className='text-xl pt-1 pb-2 text-channel'>Live Chat</div>
        <hr/>
        <div className='w-full bg-black my-3 rounded-md overflow-y-scroll h-96 flex flex-col-reverse'>
            {chatMessages?.map((message,index) =>{
                return <ChatMessage message={message} key={index}/>
            })}
        </div>
        <form className='flex'
        onSubmit={(e)=>{
            e.preventDefault();
            dispatch(addMessage({
                name:"You",
                message: liveMessage
            }))
        }}>
            <input className='border-lightgray pl-5 h-9 rounded-lg w-4/5 bg-searchtext text-white' placeholder='Chat here...'
            onChange={(e)=>{setLiveMessage(e.target.value)}} value={liveMessage}></input>
            <button className='border-black bg-black ml-1 border-l-0 border h-9 rounded-md text-blue-400 px-5' >Send</button>
        </form>
    </div>
  )
}

export default LiveChat;