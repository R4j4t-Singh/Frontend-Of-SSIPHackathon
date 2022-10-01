import React, { useEffect,useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from "axios"
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/MenuList';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
});
// const HandleClick = event => {

//   let Value = event.currentTarget.dataset;

//   let person = JSON.stringify(Value)
//   let data = JSON.parse(person);
//           console.log(data)
//           if (event.currentTarget.style.backgroundColor) {
//             event.currentTarget.style.backgroundColor = null;
//             event.currentTarget.style.color = null;
//           } else {
//             event.currentTarget.style.backgroundColor = '#4267B2';
//             event.currentTarget.style.color = 'white';
//           }
// }


  
 

function Login(){
 
 

  // const [home, setHome ] = useState("")

	// useEffect(() => {
    
	// 	axios.get("http://localhost:4000/home").then(function(response) {
	// 		setHome(response.data)
  //     console.log(home)
	// 	})
    
	// }, [home])

  
  const [ P, SetP ] = useState("")

  const [ ML, SetML ] = useState("")
  const [ PD, SetPD ] = useState("")

  async function PostloginDetails(e) {

    let Userdetails = {
      Mail : ML,
      Password : PD,  
      Person : P
    }
		e.preventDefault()
		try {
			await axios.post("http://localhost:4000/post_login", {
				Userdetails
			})
		} catch (error) {
			console.error(error)
		}
 
  
    
	}


    return (
<ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.ibb.co/5KK2wF3/digi.png)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            </Avatar>
            <Typography variant="h9" sx={{color:"red"}}>
{/* {home} */}
          </Typography>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={PostloginDetails}  sx={{ mt: 1 }}>
            <Menu  sx={{display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    "& .MuiMenuItem-root.Mui-selected": {
      backgroundColor: "yellow"
      
    },}}>
            <MenuItem value={10} onClick={(e) => SetP(e.target.value)}  >User</MenuItem>
          <MenuItem value={20}   onClick={(e) => SetP(e.target.value)}> Issuer</MenuItem>
      </Menu>
     
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={ML} onChange={(e) => SetML(e.target.value)} 
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={PD} onChange={(e) => SetPD(e.target.value)} 
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
                                    
                 <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
               
              >
                Sign In
              </Button>
              
    
                Don't have an account?
                <br />

                  <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                                component={Link} to="/Signupasuser"

              >
                Sign Up as a User
              </Button>
                
                  <a href="/Signupasissuer" sx={{  textdecoration: 'none'}}>
                  <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up as a Issuer
              </Button>
                  </a>


            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
      );
    
}

export default Login;