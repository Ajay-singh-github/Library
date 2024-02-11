import { Box, Paper } from "@mui/material";

export default function Time()
{
    return (<div>
         <div style={{color:'yellow',display:'flex'}}>
        <Box style={{display:'flex'}}>
            <Paper style={{width:"auto",height:'auto',fontFamily:'kanit' ,fontWeight:'bold'}}>
               <div style={{marginLeft:5,paddingLeft:30}}> Time  From:</div>
           <div style={{marginLeft:20,marginRight:20}}> <input type="time"/></div>

            </Paper>
      
        </Box>

        <Box style={{display:'flex',margin:10}}>
            <Paper style={{width:"auto",height:'auto',fontFamily:'kanit' ,fontWeight:'bold'}}>
               <div style={{marginLeft:5,paddingLeft:30}}> Time To:</div>
           <div style={{marginLeft:20,marginRight:20,height:"auto",marginBottom:5}}> <input type="time"/></div>

            </Paper>
      
        </Box>


       </div>
    </div>)
}