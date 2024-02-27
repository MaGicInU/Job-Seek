import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 150 },
  {
    field: 'dateApplied',
    headerName: 'Date Applied',
    width: 250,
  },
  {
    field: 'companyName',
    headerName: 'Company Name',
    width: 300,
  },
  {
    field: 'role',
    headerName: 'Role',
    width: 300,
  },
  {
    field: 'viewResume',
    headerName: 'View Resume',
    width: 200,
    renderCell: (params) => (
      <strong>
        <button>View</button>
      </strong>
    ),
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 200,
    renderCell: (params) => (
      <strong style={{ color: getStatusColor(params.value) }}>
        {params.value}
      </strong>
    ),
  },
];

const getStatusColor = (status) => {
  switch (status.toLowerCase()) {
    case 'accepted':
      return 'green';
    case 'rejected':
      return 'red';
    case 'pending':
      return 'blue';
    default:
      return 'black';
  }
};

const rows = [
  { id: 1, dateApplied: '2024-02-26', companyName: 'ABC Corp', role: 'Software Engineer', viewResume: '', status: 'Pending' },
  { id: 2, dateApplied: '2024-02-25', companyName: 'XYZ Inc', role: 'Data Analyst', viewResume: '', status: 'Accepted' },
  { id: 3, dateApplied: '2024-02-24', companyName: 'PQR Ltd', role: 'Web Developer', viewResume: '', status: 'Rejected' },
  { id: 4, dateApplied: '2024-02-23', companyName: 'LMN Enterprises', role: 'UI/UX Designer', viewResume: '', status: 'Pending' },
  { id: 5, dateApplied: '2024-02-22', companyName: 'EFG Solutions', role: 'Project Manager', viewResume: '', status: 'Accepted' },
  { id: 6, dateApplied: '2024-02-21', companyName: 'GHI Technologies', role: 'Systems Analyst', viewResume: '', status: 'Pending' },
  { id: 7, dateApplied: '2024-02-20', companyName: 'JKL Innovations', role: 'Marketing Specialist', viewResume: '', status: 'Rejected' },
  { id: 8, dateApplied: '2024-02-19', companyName: 'MNO Corporation', role: 'Financial Analyst', viewResume: '', status: 'Pending' },
  { id: 9, dateApplied: '2024-02-18', companyName: 'STU Enterprises', role: 'Human Resources Manager', viewResume: '', status: 'Accepted' },
  { id: 10, dateApplied: '2024-02-17', companyName: 'VWX Solutions', role: 'Network Administrator', viewResume: '', status: 'Pending' },
  // Add more rows as needed
];

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
