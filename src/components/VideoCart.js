import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Avatar from "react-avatar";
import API_KEY from '../constant/youtube';


const VideoCart = ({item}) => {
    const [ytIcon, setYtIcon] = useState("");
    const getYoutubeChannelName = async () =>{
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
            setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getYoutubeChannelName();
    },[])

    return (
        <div className='w-94 cursor-pointer my-2'>
            <img className='rounded-xl w-full' src={item.snippet.thumbnails.medium.url} alt="ytvideo" />
            <div>
                <div className='flex mt-2'>
                    <Avatar src={ytIcon} size={35} round={true} />
                    <div className='ml-2'>
                        <h1 className='font-bold'>{item.snippet.title}</h1>
                        <p className='text-sm text-gray-500'>{item.snippet.channelTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCart