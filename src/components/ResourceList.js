import React,{useState,useEffect} from "react"
import Axios from "axios"
import useResource from "./useResources"
// const useResources=(resourc)=>{
//     const [resources,setResources]=useState([])

//     const fetchposts=async (resourc)=>{
//         const res=await Axios.get(`http://jsonplaceholder.typicode.com/${resourc}`)
//         setResources(res.data)
//     }

//     useEffect(()=>{
//         fetchposts(resourc)
//     },[resourc])

//     return resources
// }

// const ResourceList =({resourcelist})=>{
//     // const {resourcelist}=props
//     // state={resources:[]}
//     // async componentDidMount(){
//     //   const res= await Axios.get(`http://jsonplaceholder.typicode.com/${this.props.resourcelist}`)
//     //    console.log(`http://jsonplaceholder.typicode.com/${this.props.resourcelist}`);
//     //    this.setState({resources:res.data})
       
//     // }

//     // async componentDidUpdate(prevProps){
//     //     // console.log(prevProps);

//     //     if(prevProps.resourcelist!==this.props.resourcelist){
//     //         const res= await Axios.get(`http://jsonplaceholder.typicode.com/${this.props.resourcelist}`)
//     //         this.setState({resources:res.data})
//     //     }
//     // }
//     const resources=useResources(resourcelist)
    
//         return (
//         // <div>{resources.length}</div>
//         <div>
//             <ul>
//                 {resources.map(({id,title})=>(
//                     <li key={id}>
//                         {title}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//         )
    
// }


// export default ResourceList




// import React,{useState,useEffect} from "react"
// import Axios from "axios"

// const ResourceList =({resourcelist})=>{
//     const [data,setdata]=useState([])
//     const fetchPost=async ()=>{
//         const res=await Axios.get(`http://jsonplaceholder.typicode.com/${resourcelist}`)
//         setdata(res.data)
//     }
//     const data1=fetchPost()
//     // console.log(data);
    
//     return (
//     <div>{data.length}</div>
//     )
// }
// export default ResourceList/

const ResourceList=({resourcelist})=>{
    const resources=useResource(resourcelist)
    return (
        <div>
            <ul>
                {resources.map(({id,title})=>(
                    <li key={id}>{title}</li>
                ))}
            </ul>
        </div>
    )
}



export default ResourceList