import React from 'react'
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import avatarImage from "../assets/avatar.jpg"
import '../styles/Notification.css';

export default function Notification() {
  return (
    <div className='Nav'>
        <div className='notification'>
            <AiOutlineCalendar className="font_icon" />
            <AiOutlineBell className="font_icon" />

            <div className='image'>
                <img src={avatarImage} alt="" />
            </div>

            <AiOutlineCaretDown />
        </div>
    </div>
  )
}
