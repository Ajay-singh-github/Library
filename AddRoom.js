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

export default function AddRoom(props){
    //  const classes = useStyles()

     const [RestaurantId,setRestaurantId]=useState()
     const [CategoryName,setCategoryName]=useState('')
     const [CategoryIcon,setCategoryIcon]=useState({url:'',bytes:''})
     const [resError,setResError]=useState({})
     const [name,setName]=useState()
   
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
       var body={"name":name}
       var result=await postData('login/add_room',body)
       if(result.status)
       {  
        Swal.fire({
            icon: 'success',
            title: 'Room Add ',
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

    return(<div  >
          <Paper style={{margin:100}}>
             <div style={{margin:50}}>
                <Grid container spacing={2}>
                   <Grid item xs={12} style={{marginBottom:20}}>
                       <Heading title='Add Room  Information' picture={"addroom.png"} />
                   </Grid>
                   <Grid item xs={12}>
                       <TextField placeholder='Room Name/Number' label="Room Name/Number" fullWidth onChange={(event)=>setName(event.target.value)} 
                        error={resError?.name?.error}
                        helperText={resError?.name?.message}
                        onFocus={()=>handleError(false,'name','')}/>
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