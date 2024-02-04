import './../css/profile.css'
import { FaCheck } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Profile = (pfp) => {
  return (
  <div className="profile-container">
    <h1 className="profile-title">Name: {pfp.name}</h1>
    <img src="path/to/your-image.jpg" alt="Profile Image" class="profile-image"></img>
    <div className="grid-container">
      <div className="grid-item">Age: {pfp.age}</div>
      <div className="grid-item">Gender: {pfp.gender}</div>
      <div className="grid-item">Major: {pfp.major}</div>
      <div className="grid-item">Dorm Hall: {pfp.dormhall}</div>
    </div>
    <div className="accept-reject">
      <div className="check"><FaCheck /></div>
      <div className='x'><FaX /></div>
    </div>
  </div>
  );
}

export default Profile;