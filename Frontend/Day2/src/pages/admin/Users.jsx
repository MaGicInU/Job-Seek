
import ProfileCard from "../../components/Card";
import '../../assets/css/jobs.css'; // Import the CSS file

// Dummy data
const dummyData = [
    {
        id: 1,
        name: 'Bradley Steve',
        username: 'bradsteve',
        bio: "I'm a Front End Developer, follow me to be the first who see my new work.",
        views: '15K',
        projects: '82',
        followers: '1.3M'
    },
    {
        id: 2,
        name: 'Steve',
        username: 'bradsteve',
        bio: "I'm a Front End Developer, follow me to be the first who see my new work.",
        views: '15K',
        projects: '82',
        followers: '1.3M'
    },
    {
        id: 2,
        name: 'Steve',
        username: 'bradsteve',
        bio: "I'm a Front End Developer, follow me to be the first who see my new work.",
        views: '15K',
        projects: '82',
        followers: '1.3M'
    },
    {
        id: 2,
        name: 'Steve',
        username: 'bradsteve',
        bio: "I'm a Front End Developer, follow me to be the first who see my new work.",
        views: '15K',
        projects: '82',
        followers: '1.3M'
    },
    {
        id: 2,
        name: 'Steve',
        username: 'bradsteve',
        bio: "I'm a Front End Developer, follow me to be the first who see my new work.",
        views: '15K',
        projects: '82',
        followers: '1.3M'
    },
    {
        id: 2,
        name: 'Steve',
        username: 'bradsteve',
        bio: "I'm a Front End Developer, follow me to be the first who see my new work.",
        views: '15K',
        projects: '82',
        followers: '1.3M'
    },
    {
        id: 2,
        name: 'Steve',
        username: 'bradsteve',
        bio: "I'm a Front End Developer, follow me to be the first who see my new work.",
        views: '15K',
        projects: '82',
        followers: '1.3M'
    },
    {
        id: 2,
        name: 'Steve',
        username: 'bradsteve',
        bio: "I'm a Front End Developer, follow me to be the first who see my new work.",
        views: '15K',
        projects: '82',
        followers: '1.3M'
    },
    {
        id: 2,
        name: 'Steve',
        username: 'bradsteve',
        bio: "I'm a Front End Developer, follow me to be the first who see my new work.",
        views: '15K',
        projects: '82',
        followers: '1.3M'
    },
    // Add more dummy data as needed
];

export default function Users() {
    return (
        <div className="jobs-container"> {/* Apply the jobs-container class */}
            {dummyData.map(profile => (
                <ProfileCard
                    key={profile.id}
                    name={profile.name}
                    username={profile.username}
                    bio={profile.bio}
                    views={profile.views}
                    projects={profile.projects}
                    followers={profile.followers}
                />
            ))}
        </div>
    );
}
