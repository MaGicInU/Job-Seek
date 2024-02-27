import { useState } from 'react';
import '../assets/css/jobform.css'; // Import your CSS file

const JobForm = () => {
    const [formData, setFormData] = useState({
        role: '',
        company: '',
        salary: '',
        description: '',
        jobType: 'free', // Added jobType state for the dropdown
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your submission logic here
        console.log(formData);
    };

    return (
        <div className="job-form-container">
            <h2>Add Job Details</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="role">Role:</label><br />
                <input type="text" id="role" name="role" value={formData.role} onChange={handleChange} required /><br /><br />

                <label htmlFor="company">Company Name:</label><br />
                <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required /><br /><br />

                <label htmlFor="salary">Salary:</label><br />
                <input type="text" id="salary" name="salary" value={formData.salary} onChange={handleChange} /><br /><br />

                <label htmlFor="description">Description:</label><br />
                <textarea id="description" name="description" rows="4" cols="50" value={formData.description} onChange={handleChange} required></textarea><br /><br />

                {/* Dropdown for job type */}
                <label htmlFor="jobType">Job Type:</label><br />
                <select id="jobType" name="jobType" value={formData.jobType} onChange={handleChange}>
                    <option value="free">Free</option>
                    <option value="premium">Premium ⭐</option>
                </select><br /><br />

            </form>
        </div>
    );
};

export default JobForm;
