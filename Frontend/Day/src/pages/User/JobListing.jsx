
import ProfileCard from "../../components/Card";
import '../../assets/css/jobs.css'; // Import the CSS file
import ApplyJobCard from "../../components/ApplyJobCard";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, TextField } from "@mui/material";
import { useState } from "react";

// Dummy data
const dummyData = [
    {
        id: 1,
        name: 'Frontend Developer',
        username: 'ABC Company',
        bio: "Looking for a Front End Developer with good designing skills",
        views: '15000/month',
        projects: 'free',
        followers: '1.3M'
    },
    {
        id: 1,
        name: 'Frontend Developer',
        username: 'ABC Company',
        bio: "Looking for a Front End Developer with good designing skills",
        views: '15000/month',
        projects: '82',
        followers: '1.3M'
    },
    {
        id: 1,
        name: 'Frontend Developer',
        username: 'ABC Company',
        bio: "Looking for a Front End Developer with good designing skills",
        views: '15000/month',
        projects: '82',
        followers: '1.3M'
    },
    {
        id: 1,
        name: 'Frontend Developer',
        username: 'ABC Company',
        bio: "Looking for a Front End Developer with good designing skills",
        views: '15000/month',
        projects: '82',
        followers: '1.3M'
    },
    {
        id: 1,
        name: 'Frontend Developer',
        username: 'ABC Company',
        bio: "Looking for a Front End Developer with good designing skills",
        views: '15000/month',
        projects: '82',
        followers: '1.3M'
    },
    
    
];

export default function JobListing() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className="admin-job">
         
        <div className="jobs-container"> {/* Apply the jobs-container class */}
            {dummyData.map(profile => (
                <ApplyJobCard
                key={profile.id}
                name={profile.name}
                username={profile.username}
                bio={profile.bio}
                views={profile.views}
                />
                ))}
        </div>
                </div>
    );
}
