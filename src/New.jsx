
import React,{useState} from "react";
function New(){
    function copyText() {
        var text = document.getElementById("copyText").innerText;
        navigator.clipboard.writeText(text)
            .then(function() {
              
                    document.getElementById("span").innerHTML="Copied to clipboard";
                    setTimeout(()=>{
                        document.getElementById("span").innerHTML="";
                    },2000)
            })
            .catch(function(err) {
                console.error('Failed to copy: ', err);
            });
    }
   
    const[val,setval]=useState("#ffff");
    const change=(e)=>{
      
        setval(e.target.value);
        
        
    }

    return(
        <>

      <div className="div" style={{backgroundColor:val}}>
       
            <span className="span">{val}</span>
        
        <input className="input" type="color" onChange={change}/><br></br>
      
     

     </div>
     <span  style={{textAlign:"center",marginLeft:"29%",fontSize:"clamp(22px,10px,40px)",color:'black',fontWeight:"bold",display:"inline-block"}}>Color Code: </span> <p id="copyText"   style={{textAlign:"center",fontSize:"clamp(22px,10px,40px)",color:'black',fontWeight:"bold",display:"inline-block"}}>{val} </p> 
        <i onClick={copyText}  style={{marginLeft:"10px",color:"black"}}class="fa-solid fa-copy fa-xl"></i>

     <br></br>
     <p id="span" style={{fontWeight:"bold",fontSize:"20px",color:"#22d00b",textAlign:"center"}}></p>
        
        </>
    );
}

New.defaultProps={
    name:"GUEST",
    age:19,
    dob:"08-08-2030",
}
export default New;
