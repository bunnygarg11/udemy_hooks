import React,{useState,useEffect} from "react"
import Axios from "axios"

const ResourceList =({resourcelist})=>{
    const fetchPost=async ()=>{
        const res=await Axios.get(`http://jsonplaceholder.typicode.com/${resourcelist}`)
        return res.data
    }
    const data=fetchPost()
    return (
    <div>{data.length}</div>
    )
}
export default ResourceList