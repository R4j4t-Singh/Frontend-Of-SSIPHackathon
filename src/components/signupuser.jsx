import React, { useEffect,useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios"



const theme = createTheme();


function SignUpUser() {
  const [ home, setHome ] = useState("")

	useEffect(() => {
		axios.get("http://localhost:4000/home").then(function(response) {
			setHome(response.data)
		})
    
	}, [])
  const [ FN, SetFN ] = useState("")
  const [ LN, SetLN ] = useState("")
  const [ ML, SetML ] = useState("")
  const [ MN, SetMN ] = useState("")
  const [ PD, SetPD ] = useState("")

  async function postUserDetails(e) {
    let Userdetails = {
      Firstname : FN,
      Lastname: LN,
      Mail : ML,
      Mobilenumber : MN,
      Password : PD,

    }
		e.preventDefault()
		try {
			await axios.post("http://localhost:4000/post_user", {
				Userdetails
			})
		} catch (error) {
			console.error(error)
		}
	}


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography variant="h9" sx={{color:"red"}}>
{home}
          </Typography>
          <Typography component="h1" variant="h5">
            Sign up as User
          </Typography>
          <Box component="form" noValidate onSubmit={postUserDetails} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={FN} onChange={(e) => SetFN(e.target.value)} 
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
                  value={LN} onChange={(e) => SetLN(e.target.value)} 
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
                  value={ML} onChange={(e) => SetML(e.target.value)} 
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="mobile"
                  label="Mobile Number"
                  name="mobile"
                  autoComplete="mobile"
                //   type="number"
                value={MN} onChange={(e) => SetMN(e.target.value)} 

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
                  value={PD} onChange={(e) => SetPD(e.target.value)} 
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="none" color="primary" />}
                  label="Hereby ........."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
  );

        }

   export default SignUpUser;