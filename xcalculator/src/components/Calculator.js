import React, { useState } from 'react'

function Calculator() {
    const[numDisplay,setNumDisplay]=useState('');
    const[result,setResult]=useState('');

   const handleButton=(e)=>{
    setNumDisplay(numDisplay+ (e.target.id))

   }
   const clearButton=()=>{
    setNumDisplay("");
    setResult("");
   }

   const evaluateExpression=()=>{
     try{
        const result=eval(numDisplay);
        setResult(result.toString());

     }catch(error){
     console.log("invalid expression",error);
     setResult("Error");
     }
   }
    
  return (
   <>
     <center>
        <div style={{maxWidth:"300px"}}>
            <center>
                <h1 style={{fontFamily:"sans-serif"}}>React Calculator</h1>
                <input type='text' 
                value={numDisplay} readOnly/>
                <div style={{height:"40px",marginTop:"10px"}}>
                    <p style={{margin:"0",padding:"0"}}>{result}</p>
</div>
   <div style={{marginTop:"10px"}}>
    <button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='7'>7</button>
    <button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='8'>8</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='9'>9</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='+'>+</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='4'>4</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='5'>5</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='6'>6</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='-'>-</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='1'>1</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='2'>2</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='3'>3</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='*'>*</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={clearButton} id='C'>C</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='0'>0</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={evaluateExpression} id='='>=</button>
<button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id='/'>/</button>
    {/* <button style={{width:"60px",height:"60px",borderRadius:"10px",marginRight:"10px",marginTop:"15px"}}
    onClick={handleButton} id=""></button> */}



   </div>
            </center>
</div>
        </center>  
        
   </>    
  )
}

export default Calculator