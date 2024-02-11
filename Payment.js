import { FormControl, FormControlLabel, FormLabel, Grid, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup, TextField,Button, FormHelperText, Paper } from "@mui/material";
import Heading from "./Heading";





import { useCallback, useState } from "react";
import useRazorpay from "react-razorpay";
import FormHelpText from "rsuite/esm/FormHelpText";
import Swal from "sweetalert2";
export default function Payment()
{   const [Razorpay] = useRazorpay();
    const [value, setValue] = useState('female');
    const [paymentmode,setPaymentMode]=useState()
    const [amount,setAmount]=useState('')
    const [erroramount,setErrorAmount]=useState({message:'hellow',status:'false'})
    const [paymentmodeerror,setPaymentModeError]=useState({message:'',status:''})
    const [resError,setResError]=useState({})

    const handleError = (error, input,message)=>{
        setResError(prevState=>({...prevState,[input]:{'error':error,'message':message}}))
         }  
    const handleChange = (event) => {
      setValue(event.target.value);
    };

    ////////////////////Payment API/////////////////////
   
    const validation=()=>{
        var submitRecord=true
         
         if(amount.length<0)
         {
            handleError(true,'erroramount','Pls Enter Amount')
            submitRecord=false
         }
        
        return submitRecord
       }
  
  const handlePayment = useCallback(async(na) => {
     
    var error=validation()
    if(error)
    {
    const options = {
      key: "rzp_test_GQ6XaPC6gMPNwH",     //es key ko lene ke liye hame ek website pr jaana hota hai jismai hame registration karna hota hai aur us registration mai apna account aur sabhi documentation lagaye jaate hai fir hame key milte hai us key ke duhara payment direct apne account mai pahuch jaata hai.
      amount: na*100,
      currency: "INR",
      name: "library payment",
      description: "Online Payments",
      image: 'payment.png',
     
      handler: (res) => {
        console.log("Payment Details",res);
      },
      prefill: {
        name: "ajaysingh",
        email: "youremail@example.com",
        contact: 6261448735,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    

    const rzpay = new Razorpay(options);
    rzpay.open();}
  }, [Razorpay]);






  ////////////////////////////////////////////////////////
  const handleSubmit=()=>{
    var result="true"
   
    
       if(result)
        {
         Swal.fire({
             icon: 'success',
             title: 'Library Offline Payment save in database',
             text: "Successfully Saved  ₹ " + amount,
            
             
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
    return(<div style={{display:'flex',justifyContent:'center'}}>
         <Paper style={{marginTop:100}}>
       <div style={{alignItems:'center',display:'flex',marginLeft:'31%',paddingTop:20}}>
       
        <Grid container spacing={2} >
            <Grid item xs={12}>
                <Heading title={"Payment"} picture={'payment.png'}/>
            </Grid>
            <Grid item xs={12} style={{marginTop:10}}>
            <FormControl  sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">₹</InputAdornment>}
            label="Amount"
            onChange={(event)=>setAmount(event.target.value)}
            onFocus={()=>handleError(false,'erroramount','')}
          />
        <FormHelpText style={{color:'red',fontSize:12,fontWeight:"bold"}}>{resError?.erroramount?.message}</FormHelpText>
        </FormControl>

        <Grid item xs={12} style={{margin:10}}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label" style={{fontWeight:'bold'}}>Payment Mode</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onClick={(event)=>setPaymentMode(event.target.value)}
      >
        <FormControlLabel value="Offline" control={<Radio />} label="Offline" />
        <FormControlLabel value="Online" control={<Radio />} label="Online" />
   
        
      </RadioGroup>
    </FormControl>
        </Grid>
            </Grid>
            <Grid item xs={12} style={{marginBottom:20}}>
                {paymentmode=="Online"?
                <div><Button   component='label' variant="contained" onClick={()=>handlePayment(amount)}>Click Now for online Payment</Button></div>
                :<div><Button   component='label' variant="contained" onClick={()=>handleSubmit()}>Click Now for Save All data in Database </Button></div>
            }
            </Grid>
        </Grid>
     
        </div>   </Paper>
    {console.log("check amount state:",amount.length)}
    </div>)
}