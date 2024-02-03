import ''

const Profile = ({prof}) => {

  return (
  <div className="profile-container">
    <h1 className="profile-title">Name</h1>
    <img src="path/to/your-image.jpg" alt="Profile Image" class="profile-image"></img>
    <div className="grid-container">
      <div className="grid-item">Section 1</div>
      <div className="grid-item">Section 2</div>
      <div className="grid-item">Section 3</div>
      <div className="grid-item">Section 4</div>
    </div>
    <img src="path/to/button-image1.jpg" alt="Button 1" class="button-image" onclick="buttonClick1()"></img>
    <img src="path/to/button-image2.jpg" alt="Button 2" class="button-image" onclick="buttonClick2()"></img>
  </div>
  );
}

export default Profile;