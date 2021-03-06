import './profileById.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProfileById = () => {

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    const [profileData, setProfileData] = useState([]);

    useEffect(() => {
        const fetchProfileInfo = (id) => {
            setIsLoading(true)
            fetch(`/api/profile/${id}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(profileData => {
                    setProfileData(profileData);
                    console.log(profileData);
                    setIsLoading(false);
                });
        }
        fetchProfileInfo(id);
    }, [id]);

    return (
        <>
        {isLoading ? <h1>Retrieving Profile Information...</h1> : 
        profileData ? 
            <div className="profile-container">
                <h1>Hello {profileData.fullName}!</h1>
                <p>Id: {profileData.id}</p>
                <p>First Name: {profileData.firstName}</p>
                <p>Last Name: {profileData.lastName}</p>
                <p>Email: {profileData.email}</p>
                <p>Login Strategy: {profileData.loginStrategy}</p>
                <p>Lgin Strategy Id: {profileData.loginStrategyId}</p>
                <img src={profileData.imageUrl} alt={profileData.fullName} />
            </div>
            : <h1>Not Logged In :/</h1>
        }
        </>
    )
}

export default ProfileById;