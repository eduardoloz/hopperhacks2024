import './../css/profile.css'
import { FaCheck } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';

const Profile = () => {
  return (
  <div className="profile-container">
    <h1 className="profile-title">Name</h1>
    <img src="path/to/your-image.jpg" onerror="this.src='../assets/hopper.png';" class="profile-image"></img>
    <div className="grid-container">
      <div className="grid-item">Section 1</div>
      <div className="grid-item">Section 2</div>
      <div className="grid-item">Section 3</div>
      <div className="grid-item">Section 4</div>
    </div>
    <div className="accept-reject">
      <div className="check"><FaCheck /></div>
      <div className='x'><FaX /></div>
    </div>
  </div>
  );
}

export default Profile;