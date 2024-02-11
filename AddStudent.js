import {useState} from 'react'
import {Avatar, Button, FormHelperText, Grid, Paper, TextField } from "@mui/material"
import Heading from './Heading';
import { UploadFile } from '@mui/icons-material';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

// import { makeStyles } from '@mui/styles';
import { postData } from '../Services/FetchNodeServices';
// const useStyles=makeStyles({
//     root: {
//         width:"100%",
//         height:"100vh",
//         background:"#dfe6e9",
//         display:"flex",
//         justifyContent:"center",
//         alignItems:"center"
//     },
//     box:{
//         width:"50%",
//       height:"auto",
//       borderRadius:10,
//       background:"#fff",
//       padding:10
//     },
//     helpercolor:{
//         color:'#eb2f06',
//         fontSize:'0.8rem',
//         margin:5
//       }
// })

export default function AddStudent(props){
    //  const classes = useStyles()

     const [RestaurantId,setRestaurantId]=useState()
     const [CategoryName,setCategoryName]=useState('')
     const [CategoryIcon,setCategoryIcon]=useState({url:'',bytes:''})
     const [resError,setResError]=useState({})
     const [name,setName]=useState()
     const [mobile,setMobile]=useState()
     const [emailid,setEmailid]=useState()
     const [address,setAddress]=useState()
     const [parmanent,setPermanantAddress]=useState()
     const [preparation,setPreparation]=useState()


       const handleError = (error, input,message)=>{
       setResError(prevState=>({...prevState,[input]:{'error':error,'message':message}}))
        }     
  

    

       const validation=()=>{
        var submitRecord=true
         if(!name)
         {
            handleError(true,'name','Pls Input Name')
            submitRecord=false
         }
         if(!mobile)
         {
            handleError(true,'mobile','Pls Input Mobile')
            submitRecord=false
         }
         if(!emailid)
         {
            handleError(true,'emailid','Pls Input Emailid')
            submitRecord=false
         }

         if(!mobile)
         {
            handleError(true,'address','Pls Input address')
            submitRecord=false
         }

         if(!parmanent)
         {
            handleError(true,'parmanent','Pls Input parmanent address')
            submitRecord=false
         }

         if(!preparation)
         {
            handleError(true,'preparation','Pls Input preparation')
            submitRecord=false
         }

         if(!CategoryIcon.url)
         {
            handleError(true,'icon','Pls Upload Photo')
            submitRecord=false
         }
        return submitRecord
       }


     const handleIcon=(event)=>{
      setCategoryIcon({url:URL.createObjectURL(event.target.files[0]),bytes:event.target.files[0]})
      handleError(true,'icon','')

     }

       const handleSubmit=async()=>{
       
       var error=validation()
       if(error)
       {
      
       var formData = new FormData()           //form data ham jabhi banayege jab data ke sath images ho otherwise nhi otherwise ham banayege body.
       formData.append('name',name)  
       formData.append('mobile',mobile)  
       formData.append('emailid',emailid)
       formData.append('address',address)
       formData.append('parmanentaddress',parmanent)
       formData.append('preparation',preparation)
    
       formData.append('picture',CategoryIcon.bytes)   
       var result=await postData('login/student_add_submit',formData)
       if(result.status)
       {  props.setCheck(result.number)
        Swal.fire({
            icon: 'success',
            title: 'Student Add ',
            text: result.message,
            
        })
        
       }else
       {
        Swal.fire({
            icon: 'error',
            title: 'Opps...',
            text: result.message,
            
          })
       }
      }
     }

     const handleReset=()=>{
        setRestaurantId('')
        setCategoryName('')
        setCategoryIcon({url:'',bytes:''})
     }

    return(<div  style={{backgroundColor:"#bdc3c7"}}>
          <Paper>
             <div style={{margin:50}}>
                <Grid container spacing={2}>
                   <Grid item xs={12} style={{marginBottom:20}}>
                       <Heading title='Student Information' picture={"icon add student.png"} />
                   </Grid>
                   <Grid item xs={6}>
                       <TextField placeholder='Student Name' label="Student Name" fullWidth onChange={(event)=>setName(event.target.value)} 
                        error={resError?.name?.error}
                        helperText={resError?.name?.message}
                        onFocus={()=>handleError(false,'name','')}/>
                   </Grid>
                   <Grid item xs={6}>
                       <TextField fullWidth label="Mobile"
                    //    onChange={(event)=>setCategoryName(event.target.value)}
                          error={resError?.mobile?.error}
                          helperText={resError?.mobile?.message}
                          onFocus={()=>handleError(false,'mobile','')}
                    //    value={CategoryName}
                    onChange={(event)=>setMobile(event.target.value)}
                       />
                   </Grid>



                   <Grid item xs={6}>
                       <TextField placeholder='Email Id' label="Email Id" fullWidth  onChange={(event)=>setEmailid(event.target.value)} 
                          error={resError?.emailid?.error}
                          helperText={resError?.emailid?.message}
                          onFocus={()=>handleError(false,'emailid','')}/>
                   </Grid>
                    

                   <Grid item xs={6}>
                       <TextField placeholder='Address' label="Address" fullWidth  onChange={(event)=>setAddress(event.target.value)}
                        error={resError?.address?.error}
                        helperText={resError?.address?.message}
                        onFocus={()=>handleError(false,'address','')}/>
                   </Grid>


                   <Grid item xs={6}>
                       <TextField placeholder='Parmanent address' label="Parmanent address" fullWidth  onChange={(event)=>setPermanantAddress(event.target.value)} 
                        error={resError?.parmanent?.error}
                        helperText={resError?.parmanent?.message}
                        onFocus={()=>handleError(false,'parmanent','')}/>
                   </Grid>


                   <Grid item xs={6}>
                       <TextField placeholder='Preparation' label="Preparation" fullWidth  onChange={(event)=>setPreparation(event.target.value)}
                        error={resError?.preparation?.error}
                        helperText={resError?.preparation?.message}
                        onFocus={()=>handleError(false,'preparation','')}/>
                   </Grid>

                   <Grid item xs={12}>
                       <Button fullWidth component='label' variant="contained" endIcon={<UploadFile/>}>
                        <input type='file'
                        hidden accept="images/*" 
                        multiple
                        onChange={handleIcon}
                        
                        />
                        Upload Photo Of Student
                       </Button>
                      <FormHelperText> <div  style={{color:'red'}}>{resError?.icon?.message}</div></FormHelperText>
                   </Grid>
                   <Grid item xs={3}></Grid>
                    <Grid item xs={9}>
                    <Avatar
                        variant='rounded'
                        alt="Remy Sharp"
                        src={CategoryIcon.url}
                        sx={{ width: 65, height: 65 }}>
                    </Avatar>
                    </Grid>

                   <Grid item xs={6}>
                      <Button fullWidth component='label' variant="contained" onClick={handleSubmit}>Submit</Button>
                   </Grid>
                    <Grid item xs={6} style={{marginBottom:20}}>
                    <Button fullWidth component='label' variant="contained" onClick={handleReset}>Reset</Button>
                    </Grid> 
                </Grid>
               
             </div></Paper>
      </div>)
}