import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'date', headerName: 'Date Applied', width: 150 },
  { field: 'company', headerName: 'Company Name', width: 200 },
  { field: 'role', headerName: 'Role', width: 200 },
  { field: 'firstName', headerName: 'First Name', width: 150 },
  { field: 'lastName', headerName: 'Last Name', width: 150 },
  {
    field: 'resume',
    headerName: 'Resume',
    width: 200,
    renderCell: (params) => (
      <strong>
        <button onClick={() => handleViewResume(params.row.resume)}>View</button>
      </strong>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
    renderCell: (params) => (
      <select className="status-dropdown" onChange={(event) => handleStatusChange(event, params.row.id)}>
        <option value="">Status</option>
        <option value="accept">Accept</option>
        <option value="reject">Reject</option>
      </select>
    ),
  },
];

const rows = [
    { id: 1, date: '2024-02-26', company: 'ABC Corp', role: 'Software Engineer', firstName: 'John', lastName: 'Doe', resume: '/path/to/resume1.pdf', status: 'Pending' },
    { id: 2, date: '2024-02-25', company: 'XYZ Inc', role: 'Data Analyst', firstName: 'Jane', lastName: 'Smith', resume: '/path/to/resume2.pdf', status: 'Pending' },
    { id: 3, date: '2024-02-24', company: 'Tech Solutions Ltd', role: 'Web Developer', firstName: 'Michael', lastName: 'Johnson', resume: '/path/to/resume3.pdf', status: 'Pending' },
    { id: 4, date: '2024-02-23', company: 'DataTech Innovations', role: 'Data Scientist', firstName: 'Emily', lastName: 'Brown', resume: '/path/to/resume4.pdf', status: 'Pending' },
    { id: 5, date: '2024-02-22', company: 'Global Widgets Inc', role: 'Sales Manager', firstName: 'William', lastName: 'Taylor', resume: '/path/to/resume5.pdf', status: 'Pending' },
    { id: 6, date: '2024-02-21', company: 'MarketingPro Agency', role: 'Marketing Specialist', firstName: 'Olivia', lastName: 'Anderson', resume: '/path/to/resume6.pdf', status: 'Pending' },
    { id: 7, date: '2024-02-20', company: 'FinanceGenius Group', role: 'Financial Analyst', firstName: 'Daniel', lastName: 'Martinez', resume: '/path/to/resume7.pdf', status: 'Pending' },
    { id: 8, date: '2024-02-19', company: 'HealthTech Innovations', role: 'Healthcare IT Specialist', firstName: 'Sophia', lastName: 'Garcia', resume: '/path/to/resume8.pdf', status: 'Pending' },
    { id: 9, date: '2024-02-18', company: 'EduCo Solutions', role: 'Education Consultant', firstName: 'Alexander', lastName: 'Wright', resume: '/path/to/resume9.pdf', status: 'Pending' },
    { id: 10, date: '2024-02-17', company: 'TravelEase Corporation', role: 'Travel Coordinator', firstName: 'Ava', lastName: 'Lopez', resume: '/path/to/resume10.pdf', status: 'Pending' },
    { id: 11, date: '2024-02-16', company: 'ConsultingPro Firm', role: 'Management Consultant', firstName: 'Ethan', lastName: 'Harris', resume: '/path/to/resume11.pdf', status: 'Pending' },
    { id: 12, date: '2024-02-15', company: 'FashionForward Ltd', role: 'Fashion Designer', firstName: 'Mia', lastName: 'Lewis', resume: '/path/to/resume12.pdf', status: 'Pending' },
    // Add more rows as needed
  ];
  

const handleStatusChange = (event, id) => {
  const selectedStatus = event.target.value;
  // Implement logic to handle status change
  console.log(`Changed status to ${selectedStatus} for row with ID ${id}`);
};

const handleViewResume = (resumePath) => {
  // Implement logic to view resume, for example, open in a new tab
  window.open(resumePath);
};

export default function ViewApplications() {
  const getRowClassName = (params) => {
    return params.rowIndex % 2 === 0 ? 'even-row' : 'odd-row';
  };

  return (
    <Box sx={{ height: '100%', width: '100%', bgcolor: 'background.paper' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        autoHeight
        getRowClassName={getRowClassName}
        disableSelectionOnClick
        sx={{
          height: '100%', // Ensure DataGrid fills up the entire height of its container
          '& .even-row': {
            backgroundColor: 'yellow', // Alternate row color
          },
          '& .MuiDataGrid-columnHeader, .MuiDataGrid-overlay': {
            backgroundColor: '#000000',
            color:"#ffffff",
            borderColor: "#ffffff"// Change header color
          },
          '& .MuiDataGrid-root': {
            width: '100%', // Adjust width of the table
          },
        }}
      />
    </Box>
  );
}
