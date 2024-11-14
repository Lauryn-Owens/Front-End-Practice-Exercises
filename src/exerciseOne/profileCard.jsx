import React, {useState} from 'react'

function ProfileCard({imgSrc, name, age, bio}) {
    const[profileAge, setProfileAge] = useState(age);
    /**
     * 1. when the user clicks on the profile card 
     * their age multiples by 2
     * 2. The profile card data is provided by props from
     * its parent component (App)
     */
  return (
    <main 
    onClick={() => {
        setProfileAge(profileage => profileAge * 2);
    }}
    className='border-2 border-red-400 rounded-md w-48 h-max '>
        <img src={imgSrc} alt="profile image" />
        <div className='flex flex-col gap-2 items-center  my-4'>
            <p className='font-bold'>Name: {name}</p>
            <p>Age: {profileAge}</p>
            <p className='pb-8 text-center'>Bio: {bio}</p>
        </div>
    </main>
  )
}

export default ProfileCard
