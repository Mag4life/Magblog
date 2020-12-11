import React, {useEffect, useState} from 'react'

import axios from 'axios'


const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response=> {
                setPosts(response.data)
            })
            .catch(error=> {
                console.log(error)
            })
    })

    return (
        <div>
            <h1>Homepage</h1>
            {
                posts.map(post=> (
                    <div key={post.id}>
                        <h4>{post.title}</h4>
                        <p>{post.body}</p>
                    </div>
                ))
            }
        </div>
    )
}


export default Home