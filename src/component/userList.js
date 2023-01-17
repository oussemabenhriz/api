
import axios from 'axios'
import React, {useEffect,useState} from 'react'
import Carduser from './carduser';


const ListUser = () => {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=> {
            console.log("res,res",res.data)
            setPosts(res.data)
    .catch((err)=>{
        console.log("err,err",err)
    } )
        })
    },[]
    )


    



  return (
    <div>
        {posts.map((e)=> (<Carduser posts={e}/>))}
    </div>
  )
}

export default ListUser
