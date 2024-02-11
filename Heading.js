import { useNavigate } from "react-router-dom"
export default function Heading({title,myroute,picture})
{   var navigate=useNavigate()

    return(

       <div style={{fontFamily: 'Kanit',
       fontWeight:'bold',
       fontSize:20,
       latterSpacing:1,
       display:'flex',
       flexDirection:'row',
    
       alignItems:'center'}}>
        {/*icon add student.png*/}
        <img src={picture} style={{width:50}}/> 
        <div style={{fontFamily:'Anton',latterSpacing:2 ,marginLeft:20}}> {title}</div>
        {/* <img src="/list.png" style={{width:40,marginLeft:'auto'}} onClick={()=>navigate(`${myroute}`)} />  */}

       </div>
    )
}