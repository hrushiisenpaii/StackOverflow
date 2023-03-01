import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import moment from 'moment'

import Navbar from '../../components/Navbar/Navbar'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import Avatar from '../../components/Avatar/Avatar'
import ProfileBio from './ProfileBio'
import EditProfileForm from './EditProfileForm'
import cake from '../../assests/cake.png'
import pen from '../../assests/edit.svg'
import './UserProfile.css'

const UserProfile = () => {

    const users = useSelector((state) => state.usersReducer)
    const {id} = useParams()
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)

    const [Switch, setSwitch] = useState(false)

  return (
    <>
    <Navbar/>
    <div className='home-container-1'>
        <LeftSidebar />
      <div className='home-container-2'>
            <section>
                <div className="user-detail-container">
                    <div className="user-details">
                        <Avatar>
                        {currentProfile?.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <div className="user-name">
                            <h1>{currentProfile?.name}</h1>
                            <div>
                            <img src={cake} alt="cake" width={25} height={25}/>
                            <p>Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                            </div>   
                        </div>
                    </div>
                    {
                        currentUser?.result._id === id && (
                            <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                                <img src={pen} alt="pen" width={15} />
                                <p>Edit Profile</p>
                            </button>
                        )
                    }
                </div>
                <>
                    {
                        Switch ? (
                            <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                        ) : (
                            <ProfileBio currentProfile={currentProfile}/>
                        )
                    }
                </>
            </section>
      </div>
    </div>
    </>  
  )
}

export default UserProfile