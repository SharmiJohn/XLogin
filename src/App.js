import { useState } from "react";

function App() {
  const [username,setusername]=useState("");
  const[password,setpassword]=useState("");
  const[data,setdata]=useState({Username:"user",Password:"password"});
  const[result,setresult]=useState(false);
 const [error,seterror]=useState("");
  const handleSubmit=(e)=>{
    e.preventDefault();
      if(username===data.Username && password===data.Password){
        seterror("");
        setresult(true);

      }
      else{
        seterror("Invalid username or password")
         setresult(false)

      }
     
  }
 
  return (
    <div className="App" style={{display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center"}}>
      <h1>Login Page</h1>
      {result===true&&(<h3>Welcome,user!</h3>)}
      {result===false && <form onSubmit={(e)=>handleSubmit(e) } style={{display:"flex",flexDirection:"column" ,alignItems:"flex-start",justifyContent:"center"}}>
        {error.length!==0 && <p>{error}</p>}
        <label>UserName:  <input label="UserName" value={username} placeholder="username" onChange={(e)=>setusername(e.target.value)} required/> </label>
      
        <label>Password:  <input label="Password" value={password} placeholder="password" onChange={(e)=>setpassword(e.target.value)} required/></label>
       
        <button type="submit">Submit</button>
      </form>}
     
     
    </div>
  );
}

export default App;
