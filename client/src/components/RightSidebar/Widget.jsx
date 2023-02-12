import React from 'react'
import './RightSidebar.css'
import comment from '../../assests/comment.svg'
import edit from '../../assests/edit.svg'
import logo from '../../assests/stkovrflw.svg'

const Widget = () => {
  return (
    <div className='widget'>
        <h4>The Overflow Blog</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={edit} alt="edit-icon" width={18}  />
                <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={edit} alt="edit-icon" width={18}  />
                <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>

        <h4>Featured on Overflow</h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment-icon" width={18}  />
                <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={comment} alt="comment-icon" width={18}  />
                <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='right-sidebar-div-2'>
                <img src={logo} alt="logo-icon" width={18}  />
                <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>

        <h4>Hot Post </h4>
        <div className='right-sidebar-div-1'>
            <div className='right-sidebar-div-2'>
                <p>34</p>
                <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>169</p>
                <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
            <div className='right-sidebar-div-2'>
                <p>98</p>
                <p className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </p>
            </div>
        </div>

    </div>
  )
}

export default Widget