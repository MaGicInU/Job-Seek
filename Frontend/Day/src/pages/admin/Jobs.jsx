
import ProfileCard from "../../components/Card";
import '../../assets/css/jobs.css'; // Import the CSS file
import JobCard from "../../components/JobCard";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, TextField } from "@mui/material";
import { useState } from "react";
import JobForm from "../../components/JobForm";

// Dummy data
const dummyData = [
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

export default function Jobs() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div className="admin-job">
            <Button variant="contained" onClick={handleClickOpen}>
        Add Job
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        {/* <DialogTitle>Subscribe</DialogTitle> */}
        <DialogContent>
          <JobForm/>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Add Job</Button>
        </DialogActions>
      </Dialog>
        <div className="jobs-container"> {/* Apply the jobs-container class */}
            {dummyData.map(profile => (
                <JobCard
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
