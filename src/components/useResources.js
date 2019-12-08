import {useState,useEffect} from "react"
import Axios from "axios"

const useResources=(res)=>{
    const [resource,setResource]=useState([])

    const fetchPost=async()=>{
        const response=await  Axios.get(`http://jsonplaceholder.typicode.com/${res}`)
        setResource(response.data)
    }

    useEffect(()=>{
        fetchPost()
    },[res])

    return resource
}
export default useResources