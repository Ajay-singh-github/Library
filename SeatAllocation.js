import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Paper, Select } from "@mui/material";
import Heading from "./Heading";
import { useState } from "react";
import BasicDatePicker from "./Date";
import Time from "./Time";
import { postData } from "../Services/FetchNodeServices";
import FormHelpText from "rsuite/esm/FormHelpText";



export default function SeatAllocation(props)
{
    
    const [age, setAge] = useState('');
    const [room, setRoom] = useState('');
    const [seat, setSeat] = useState('');
    
    const [date,setDate]=useState('')
    const [fromtime,setFromTime]=useState('')
    const [totime,setToTime]=useState('')
    const [resError,setResError]=useState({})

    const handleError = (error, input,message)=>{
        setResError(prevState=>({...prevState,[input]:{'error':error,'message':message}}))
         }  
    const handleChange = (event) => {
        setAge(event.target.value);
      };

      const handleChangeRoom = (event) => {
        setRoom(event.target.value);
      };

      const handleChangeSeat = (event) => {
        setSeat(event.target.value);
      };

        const validation=()=>{
        var submitRecord=true
        if(age=="Reserve")
        {
         if(!age)
         {
            handleError(true,'age','Pls select Reserve or Unreserve')
            submitRecord=false
         }
         if(!room)
         {
            handleError(true,'room','Pls select Room')
            submitRecord=false
         }
         if(!seat)
         {
            handleError(true,'seat','Pls select seat')
            submitRecord=false
         }

         if(!date)
         {
            handleError(true,'date','Pls select date')
            submitRecord=false
         }

         if(!fromtime)
         {
            handleError(true,'fromtime','Pls select From time')
            submitRecord=false
         }

         if(!totime)
         {
            handleError(true,'totime','Pls select To time')
            submitRecord=false
         }
        }else
        {
            if(!date)
            {
               handleError(true,'date','Pls select date')
               submitRecord=false
            }

            if(!age)
            {
               handleError(true,'age','Pls select Reserve or Unreserve')
               submitRecord=false
            }
            
            if(!fromtime)
            {
               handleError(true,'fromtime','Pls select From time')
               submitRecord=false
            }
   
            if(!totime)
            {
               handleError(true,'totime','Pls select To time')
               submitRecord=false
            }

        }
        return submitRecord
       }


      const handleSubmit=async()=>{
       
        var error=validation()
        if(error)
        {
          props.setCheck(props.check+4)
          
        var formData = new FormData()           //form data ham jabhi banayege jab data ke sath images ho otherwise nhi otherwise ham banayege body.
       
     
        
       var result=await postData('restaurants/restaurant_category_submit',formData)
     //    if(result.status)
     //    {
     //     Swal.fire({
     //         icon: 'success',
     //         title: 'Restaurant Category',
     //         text: result.message,
             
     //     })
     //    }else
     //    {
     //     Swal.fire({
     //         icon: 'error',
     //         title: 'Opps...',
     //         text: result.message,
             
     //       })
     //    }
       }
      }
    return(<div>
        <Paper>
       <div style={{margin:50}}>
        
                <Grid container spacing={2}>
                   <Grid item xs={12} style={{marginBottom:20}}>
                       <Heading title='Seat Allocation For Student' picture={"seatlogo.png"} />
                   </Grid>
                   <Grid item xs={12}>
                   <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Seat Allocation</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Seat Allocation"
          onChange={handleChange}
          error={resError?.age?.error}
        // helperText={resError?.age?.message}
          onFocus={()=>handleError(false,'age','')}>
        
          <MenuItem value="Reserve">Reserv Seat</MenuItem>
          <MenuItem value="Unreserve">Unreserv Seat</MenuItem>
        </Select>
        <FormHelpText style={{color:'red',fontSize:12,fontWeight:"bold"}}>{resError?.age?.message}</FormHelpText>
      </FormControl>
    </Box>
    </Grid>
    </Grid>

     
    
            {age=="Unreserve"?"":<div style={{marginTop:20}}>
                <Grid container spacing={2}>
           <Grid item xs={6}>
           <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Room Allocation</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={room}
          label="Room Allocation"
          onChange={handleChangeRoom}
          error={resError?.room?.error}
          // helperText={resError?.age?.message}
            onFocus={()=>handleError(false,'room','')}
        >
          <MenuItem value={1}>Room 1</MenuItem>
          <MenuItem value={2}>Room 2</MenuItem>
          <MenuItem value={3}>Room 3</MenuItem>

        </Select>
        <FormHelpText style={{color:'red',fontSize:12,fontWeight:"bold"}}>{resError?.room?.message}</FormHelpText>

      </FormControl>
    </Box>
                   </Grid>
                    

                   <Grid item xs={6}>
           <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Seat Allocation</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={seat}
          label="Room Allocation"
          onChange={handleChangeSeat}
          error={resError?.seat?.error}
          // helperText={resError?.age?.message}
            onFocus={()=>handleError(false,'seat','')}
        >
          <MenuItem value={1}>Seat 1</MenuItem>
          <MenuItem value={2}>Seat 2</MenuItem>
          <MenuItem value={3}>Seat 3</MenuItem>

        </Select>
        <FormHelpText style={{color:'red',fontSize:12,fontWeight:"bold"}}>{resError?.seat?.message}</FormHelpText>
      </FormControl>
    </Box>
                   </Grid></Grid></div>}
                   

                   <Grid container spacing={2} style={{marginTop:10}}>
                   <Grid item xs={3}>
                     Date: <input type="date" onChange={(event)=>setDate(event.target.value)}  //error={resError?.date?.error}
        //  helperText={resError?.date?.message}
            onFocus={()=>handleError(false,'date','')}/>
                    <FormHelpText style={{color:'red',fontSize:12,fontWeight:"bold"}}>{resError?.date?.message}</FormHelpText>

                    </Grid>

                    <Grid item xs={3}>
                     From Time:  <input type="time"  onChange={(event)=>setFromTime(event.target.value)}  onFocus={()=>handleError(false,'fromtime','')}/>
                     <FormHelpText style={{color:'red',fontSize:12,fontWeight:"bold"}}>{resError?.fromtime?.message}</FormHelpText>

                    </Grid>

                    <Grid item xs={3}>
                    To Time:  <input type="time"  onChange={(event)=>setToTime(event.target.value)}  onFocus={()=>handleError(false,'totime','')}/>
                   
                    <FormHelpText style={{color:'red',fontSize:12,fontWeight:"bold"}}>{resError?.totime?.message}</FormHelpText>
                    </Grid>
                    
                    <Grid item xs={3}>

                    </Grid>

                    <Grid item xs={12} style={{marginTop:10,marginBottom:20}}>
                    <Button fullWidth component='label' variant="contained" onClick={handleSubmit}>Submit</Button>

                    </Grid>
                    </Grid>
                
                
               
             </div></Paper>
    </div>)
}

