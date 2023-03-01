import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { updateProfile } from '../../actions/users'

const EditProfileForm = ({currentUser, setSwitch}) => {

    const [name, setName] = useState(currentUser?.result?.name)
    const [about, setAbout] = useState(currentUser?.result?.bio)
    const [tags, setTags] = useState('')
    const [link, setLink] = useState(currentUser?.result?.link)

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(tags.length === 0){
            dispatch(updateProfile(currentUser?.result?._id, {name, about, tags: currentUser?.tags, link}))
        }else {
            dispatch(updateProfile(currentUser?.result?._id, {name, about, tags, link}))
        }
        setSwitch(false)
    }

  return (
    <div>
        <h2 className='edit-profile-title'>
            Edit Your Profile
        </h2>
        <h3 className="edit-profile-title-2">
            Public Information
        </h3>
        <form className="edit-profile-form" onSubmit={handleSubmit}>
            <label htmlFor="name">
                <h3>Display Name</h3>
                <input id='name' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </label>
            <label htmlFor="about">
                <h3>Bio</h3>
                <textarea id='about' type="text" value={about} onChange={(e) => setAbout(e.target.value)}/>
            </label>
            <label htmlFor="tags">
                <h3>Tags</h3>
                <p>Add your Tags</p>
                <input id='tags' type="text" value={tags} onChange={(e) => setTags(e.target.value.split(' '))}/>
            </label>
            <label htmlFor="link">
                <h3>Link</h3>
                <p>Add your LinkedIn</p>
                <input id='link' type="text" value={link} onChange={(e) => setLink(e.target.value)}/>
            </label>
            <br />
            <input type="submit" value='Save Changes' className='user-submit-btn'/>
            <button type='button' className='user-cancel-btn' onClick={() => (setSwitch(false))}>Cancel</button>
        </form>
    </div>
  )
}

export default EditProfileForm