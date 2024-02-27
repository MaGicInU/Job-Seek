
import PropTypes from 'prop-types';
import '../assets/css/card.css'; // Import the CSS file

function JobCard(props) {
    const { name, username, bio, views, projects, followers } = props;

    return (
        <div className="profile-card">
            <div className="infos">
                <div className="name">
                    <h2>{name}</h2>
                    <h4>@{username}</h4>
                </div>
                <p className="text">{bio}</p>
                <ul className="profile-stats">
                    <li>
                        <h3>{views}</h3>
                        <h4>Avg Salary</h4>
                    </li>
                    
                </ul>
                <div className="links">
                    <button className="follow">Edit</button>
                    <button className="view">Delete</button>
                </div>
            </div>
        </div>
    );
}

JobCard.propTypes = {
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    views: PropTypes.string.isRequired,
    projects: PropTypes.string.isRequired,
    followers: PropTypes.string.isRequired
};

export default JobCard;
