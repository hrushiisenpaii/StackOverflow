import React from 'react'

const ProfileBio = ({currentProfile}) => {
  return (
    <div className='profile-bio-container'>
       <div className='user-detail-item'>
       {
            currentProfile?.tags.length !== 0 ? (
                <div className='profile-link'>
                    <h4>User tags:</h4>
                    {
                        currentProfile?.tags.map((tag) =>(
                            <p key={tag}>{tag}</p>
                        ))
                    }
                </div>
            ) :
            (
                <p>User has no tags</p>
            )
        }
       </div>
       <div className='user-detail-item'>
        {
            currentProfile?.about ? (
                <div className='profile-link'>
                    <h4>Bio:</h4>
                    <p>{currentProfile?.about}</p>
                </div>
            ) : (
                <p>User has no Bio</p>
            )
        }
       </div>
       <div className='user-detail-item'>
        {
            currentProfile?.link ? (
                <div className='profile-link'>
                    <h4>LinkedIn:</h4>
                    <a href={currentProfile?.link} target="_blank" rel="noreferrer noopener">{currentProfile?.name}</a>
                </div>
            ) : (
                <div className="profile-link">
                    <h4>LinkedIn:</h4>
                    <p>Not Connected</p>
                </div>    
            )
        }
       </div>
    </div>
  )
}

export default ProfileBio