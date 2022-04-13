import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [values, setValues] = useState();

  useEffect(()=>{
    axios.get("https://jsonplaceholder.typicode.com/posts/1").then((response)=>{
      setValues(response.data);
    });
  },[]);

  if (!values) return null;

  //  const posts = values.map((postt)=>{
  //    return <li key={postt.id}>{postt.userId }.{ postt.title}</li>
  //  });

   const addUserHandler = () =>{
      axios.post("https://jsonplaceholder.typicode.com/posts/", {
        id:101,
        title:'hello Devi',
        body : 'Doing Good Devi!! Keep it up haha...',
      }).then((response) => {
        setValues(response.data);
      });

   };

  return (
    <div className="App">
     <h1>HTTP Request - GET, POST, PUT, DELETE</h1>
     <h1>GET User id and title</h1>
      <h1>{values.title}</h1>
      <p>{values.body}</p>
     <h1>POST User id and title</h1>
     <button onClick={addUserHandler}>Add user</button>
     
    </div>
  );
}

export default App;
