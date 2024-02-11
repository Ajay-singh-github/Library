import { Box, Paper } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function BasicDatePicker() {
    const theme = useTheme();
    const matches_md = useMediaQuery(theme.breakpoints.down('md'));
    const matches_sm = useMediaQuery(theme.breakpoints.down('sm'));
    const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
    
     <div style={{color:'yellow'}}>
        <Box style={{display:'flex'}}>
            <Paper style={{width:"auto",height:'20',fontFamily:'kanit' ,fontWeight:'bold'}}>
               <div style={{marginLeft:25,paddingLeft:30}}> Date :</div>
           <div style={{marginLeft:20,marginBottom:20,marginRight:20}}> <input type="date"/></div>

            </Paper>
      
        </Box>
       </div>
    </div>
  );
}


