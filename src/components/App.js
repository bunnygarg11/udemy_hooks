import React ,{useState} from "react"
import ReactDOM from "react-dom"
import Resourcelist from "./ResourceList"

const App=()=>{
    // state={
    //     resource:""
    // }
    const [resource,setResource]=useState("posts")
    
        return (
            <div>
                <div>
                    <button onClick={()=>{setResource("posts")}}> 
                        Posts
                    </button>
                    <button onClick={()=>{setResource("todos")}}>
                        ToDos
                    </button>
                </div>
                {/* {resource} */} 
                <Resourcelist resourcelist={resource}/>
            </div>
        )
    
}
export default App