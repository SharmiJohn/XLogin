import { useState } from "react";

function App() {
  const [username,setUsername]=useState("");
  const[password,setPassword]=useState("");
 
  const[result,setResult]=useState(false);
 const [error,setError]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
      if(username==="user" && password==="password"){
        setError("");
        setResult(true);

      }
      else{
        setError("Invalid username or password")
         setResult(false);

      }
     
  }
 
  return (
    <div className="App" style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}}>
      <h1>Login Page</h1>
      {result===true&&(<h3>Welcome,{username}!</h3>)}
      {result===false && 
      <form onSubmit={(e)=>handleSubmit(e) } style={{display:"flex" , flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}}>
        {error.length!==0 && <p>{error}</p>}
        <div style={{display:"flex"}}>
        <label htmlFor="Username">UserName: </label>
        <input type="text" value={username} placeholder="Username" onChange={(e)=>setUsername(e.target.value)} required/> 
        </div>
       <div style={{display:"flex"}}>
       <label htmlFor="Password">Password: </label> <input  type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
       </div>
       
       
        <button type="submit">Submit</button>
      </form>}
     
     
    </div>
  );
}

export default App;
