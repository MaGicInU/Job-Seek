import { useState } from 'react'; // Import useState
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import img1 from "../../assets/images/signup.jpg";

const theme = createTheme();

export default function SignInSide() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    mobile: "",
    allowExtraEmails: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid) {
      console.log("Form submitted with data:", formData);
      // You can proceed with further actions like submitting the form data
    } else {
      console.log("Form is invalid. Please check for errors.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: fieldValue,
    });
    validateField(name, fieldValue);
  };

  const validateField = (name, value) => {
    let error = "";
    switch (name) {
      case "firstName":
      case "lastName":
        error = value.trim() === "" ? "This field is required" : "";
        break;
      case "email":
        // Basic email validation
        error = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Please enter a valid email address";
        break;
      case "password":
        error = value.length < 8 ? "Password must be at least 8 characters" : "";
        break;
      case "confirmPassword":
        error =
          value !== formData.password ? "Passwords do not match" : "";
        break;
      case "role":
        error = value === "" ? "Please select a role" : "";
        break;
      case "mobile":
        // Add your mobile number validation logic here
        break;
      default:
        break;
    }
    setFormErrors({ ...formErrors, [name]: error });
  };

  const isFieldValid = (name) => {
    return !formErrors[name];
  };

  const validateForm = () => {
    const errors = {};
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        validateField(key, formData[key]);
        if (formErrors[key]) {
          errors[key] = formErrors[key];
        }
      }
    }
    setFormErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${img1})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {/* TextField components with onChange and error props */}
                {/* Your TextField components here */}
                {/* TextField components with onChange and error props */}
<Grid item xs={12} sm={6}>
  <TextField
    autoComplete="given-name"
    name="firstName"
    required
    fullWidth
    id="firstName"
    label="First Name"
    autoFocus
    value={formData.firstName}
    onChange={handleInputChange}
    error={!!formErrors.firstName}
    helperText={formErrors.firstName}
  />
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    required
    fullWidth
    id="lastName"
    label="Last Name"
    name="lastName"
    autoComplete="family-name"
    value={formData.lastName}
    onChange={handleInputChange}
    error={!!formErrors.lastName}
    helperText={formErrors.lastName}
  />
</Grid>
<Grid item xs={12}>
  <TextField
    required
    fullWidth
    id="email"
    label="Email Address"
    name="email"
    autoComplete="email"
    value={formData.email}
    onChange={handleInputChange}
    error={!!formErrors.email}
    helperText={formErrors.email}
  />
</Grid>
<Grid item xs={12}>
  <TextField
    required
    fullWidth
    name="password"
    label="Password"
    type="password"
    id="password"
    autoComplete="new-password"
    value={formData.password}
    onChange={handleInputChange}
    error={!!formErrors.password}
    helperText={formErrors.password}
  />
</Grid>
<Grid item xs={12}>
  <TextField
    required
    fullWidth
    name="confirmPassword"
    label="Confirm Password"
    type="password"
    id="confirmPassword"
    autoComplete="new-password"
    value={formData.confirmPassword}
    onChange={handleInputChange}
    error={!!formErrors.confirmPassword}
    helperText={formErrors.confirmPassword}
  />
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    select
    required
    fullWidth
    id="role"
    label="Role"
    name="role"
    SelectProps={{
      native: true,
    }}
    value={formData.role}
    onChange={handleInputChange}
    error={!!formErrors.role}
    helperText={formErrors.role}
  >
    <option value="admin">Admin</option>
    <option value="user">User</option>
  </TextField>
</Grid>
<Grid item xs={12} sm={6}>
  <TextField
    required
    fullWidth
    id="mobile"
    label="Mobile Number"
    name="mobile"
    autoComplete="tel"
    value={formData.mobile}
    onChange={handleInputChange}
    error={!!formErrors.mobile}
    helperText={formErrors.mobile}
  />
</Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={validateForm}
              >
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
