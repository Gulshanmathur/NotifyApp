import Box from "./components/Box"
import React,{ useState,ChangeEvent,FormEvent} from "react";

interface user{
  name:string,
  age:number
}

const App: React.FC = () => {
  const [first, setfirst] = useState<user>({name:"",age:0});
  const handleChange  = (e:ChangeEvent<HTMLInputElement>):void=>{
    const {name,value} = e.target;
    setfirst((prev:user)=>({...prev,[name]:value}))
  }
  const handleSubmit =(e:FormEvent<HTMLFormElement>):void=>{
    console.log(e);
    const form = document.getElementById("main") as HTMLFormElement;
    form.innerHTML+= `<h3>${first.name}${" "}${first.age}</h3>`
     e.preventDefault();
     setfirst({name:"",age:0})
  }

  return (
    <>
      <div>
        <h1>Hello</h1>
        <Box name="Gulshan"  />
        <form action="#" id="main" onSubmit={handleSubmit} >
          <input type="text" placeholder="name" name="name" onChange={handleChange} />
          <input type="number" placeholder="age" name="age" onChange={handleChange} />
          <button  type="submit">submit</button>
        </form>
      </div>
    </>
  )
}

export default App
