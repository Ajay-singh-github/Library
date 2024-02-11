import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, FormHelperText, Grid, TextField } from "@mui/material";

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import { postData } from "../Services/FetchNodeServices";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  // TODO remove, this demo shouldn't need to reset the theme.
  
  const defaultTheme = createTheme();

  
export default function LoginpageForOwner()
{
  const navigate=useNavigate()
    const [name,setName]= useState()
    const [password,setPassword]= useState()
    const [errorname,setErrorName]=useState({error:'',message:''})
    const [errorPassword,setErrorPassword]=useState({error:'',message:''})

    const validation=(event)=>
    {
        var sin=true;
        if(!name)
        {
           setErrorName({error:'false',message:'Please Enter Name'})
            sin=false
        }

        if(!password)
        {
           setErrorPassword({error:'false',message:'Please Enter Password'})
           sin=false
        }
        return sin
    }


    const handleSubmit =async (event) => {
       
        const check=validation()
      
        if(check)
        {
            console.log("i am checking value :",name,password)
            var body={emailid:name,password:password}
            
            var result=await postData('login/loginowner',body)
            
        if(result.status)    
        {
            navigate('/dashboard/displayfirstpage')
      }else{
        
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: result.message,
       
          timer: 5000,
          showConfirmButton: false,
          toast:true,

          position: "top-end",
         
         
         
     
        })
     
      }
       
      };
    }
   
      
    return(<div>
          <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5}  square>
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
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>

            <Typography component="h1" variant="h5">
              Library Owner Login
            </Typography>
            <Box   sx={{ mt: 1 ,width:'70%'}}>
              <TextField
                margin="normal"
                required
                fullWidth
               onChange={(event)=>setName(event.target.value)}
                label="Email Address"
                onFocus={()=>setErrorName({error:'true',message:''})}
              
               
              />
            <FormHelperText><div style={{color:"#eb4d4b",paddingLeft:15}}>{errorname.error?errorname.message:<></>}</div></FormHelperText>

              <TextField
                margin="normal"
                required
                fullWidth
                
                label="Password"
                type="password"
                 onChange={(event)=>setPassword(event.target.value)}
                autoComplete="current-password"
                onFocus={()=>setErrorPassword({error:'true',message:''})}

              />
              <FormHelperText><div style={{color:"#eb4d4b",paddingLeft:15}}>{errorPassword.error?errorPassword.message:<></>}</div></FormHelperText>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  
                </Grid>
                <Grid item>
                </Grid>
              </Grid>
             
            </Box>
          </Box>
        </Grid>
      </Grid> 


      
    </div>)
}