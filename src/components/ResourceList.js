import React,{useState,useEffect} from "react"
import Axios from "axios"

const ResourceList =({resourcelist})=>{
    // const {resourcelist}=props
    // state={resources:[]}
    // async componentDidMount(){
    //   const res= await Axios.get(`http://jsonplaceholder.typicode.com/${this.props.resourcelist}`)
    //    console.log(`http://jsonplaceholder.typicode.com/${this.props.resourcelist}`);
    //    this.setState({resources:res.data})
       
    // }

    // async componentDidUpdate(prevProps){
    //     // console.log(prevProps);

    //     if(prevProps.resourcelist!==this.props.resourcelist){
    //         const res= await Axios.get(`http://jsonplaceholder.typicode.com/${this.props.resourcelist}`)
    //         this.setState({resources:res.data})
    //     }
    // }
    const [resources,setResources]=useState([])

    const fetchposts=async (resourcelist)=>{
        const res=await Axios.get(`http://jsonplaceholder.typicode.com/${resourcelist}`)
        setResources(res.data)
    }

    useEffect(()=>{
        fetchposts(resourcelist)
    },[resourcelist])
    
        return (
        <div>{resources.length}</div>
        )
    
}
export default ResourceList