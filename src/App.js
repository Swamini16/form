import React,{useState} from 'react'
const App = () => {

        const[name,setName] =useState();
        const[password,setPassword] =useState();
        const[course,setCourse] =useState();
        const[users] =useState([]);


        const handleSubmit = (e) => {
            e.preventDefault();
            
            users.splice(1,0,name);
            console.log(users)
        }



  return (
    <center>
    <div >
        <h2>Regitration Form</h2>
        <form onSubmit={handleSubmit}>
        <input type='text' placeholder='User Id' value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
        <input type='password' placeholder='Password'  value={password} onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option value="react">React</option>
            <option value="javascript">Javascript</option>
            <option value="python">Python</option>
        </select><br /><br />

        <button type='submit'>Submit</button>
        </form>      
    </div></center>
  )
}

export default App
