
import PropTypes from 'prop-types';
import '../assets/css/card.css'; // Import the CSS file

function ProfileCard(props) {
    const { name, username, bio, views, projects, followers } = props;

    return (
        <div className="profile-card">
            <div className="img">
                <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Profile" />
            </div>
            <div className="infos">
                <div className="name">
                    <h2>{name}</h2>
                    <h4>@{username}</h4>
                </div>
                <p className="text">{bio}</p>
                <ul className="profile-stats">
                    <li>
                        <h3>{views}</h3>
                        <h4>Views</h4>
                    </li>
                    <li>
                        <h3>{projects}</h3>
                        <h4>Projects</h4>
                    </li>
                    <li>
                        <h3>{followers}</h3>
                        <h4>Followers</h4>
                    </li>
                </ul>
                <div className="links">
                    <button className="follow">View profile</button>
                    <button className="view">Delete</button>
                </div>
            </div>
        </div>
    );
}

ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    projects: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired
};

export default ProfileCard;
