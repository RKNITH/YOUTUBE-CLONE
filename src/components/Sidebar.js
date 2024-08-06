import React from 'react';
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import {useSelector} from "react-redux";

const sidebarItem = [
    {
        icons: <CiHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <CiHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <CiHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <CiHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <CiHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <CiHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <CiHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscription"
    },
    {
        icons: <CiHome size="24px" />,
        title: "Home"
    },
    {
        icons: <SiYoutubeshorts size="24px" />,
        title: "Short"
    },
    {
        icons: <MdOutlineSubscriptions size="24px" />,
        title: "Subscription"
    },
]

const Sidebar = () => { 
    const open = useSelector((store)=>store.app.open);
     
    return (
        <div className={`relative left-0 ${open? "w-[20%]" : "w-[6%]"} p-5 h-[calc(100vh-4.625rem)] bg-white overflow-y-scroll overflow-x-hidden`}>
            {
                sidebarItem.map((item, index) => {
                    return (
                        <div key={index} className='flex my-3 ml-2'>
                            {item.icons}
                            <p className={`ml-5 ${open ? "": 'hidden'}`}>{item.title}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Sidebar