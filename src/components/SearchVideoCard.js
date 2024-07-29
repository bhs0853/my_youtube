import moment from 'moment';
import React from 'react'

const SearchVideoCard = (videoData) => {
    const {title, description, publishedAt, channelTitle,thumbnails} = videoData.videoinfo.snippet;
  return (
    <div className='flex w-full '>
        <img src={thumbnails.medium.url} className='px-12 py-5 rounded-md hover:rounded-none hover:cursor-pointer'></img>
        <div className='pt-5'>
            <div className='hover:cursor-pointer font-medium text-white pb-2'>{title}</div>
            <div className='flex text-stone-500'>
                <div className='pr-3'>X views</div> . 
                <div className='pl-3'>{moment(publishedAt).fromNow()}</div>
            </div>
            <div className='hover:cursor-pointer hover:text-white text-stone-500'>{channelTitle}</div>
            <div className='overflow-hidden text-stone-500'>{description}</div>
        </div>
    </div>
  )
}

export default SearchVideoCard