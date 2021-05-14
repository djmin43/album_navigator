import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface Title {
    userId: number;
    id: number;
    title: string
}

const Album = () => {

    const [post, setPost] = useState<Title[]>([])
    // Fetch data from jsonplaceholder
    const fetchPosts = async () => {
        try {
            const titles = await axios.get('https://jsonplaceholder.typicode.com/albums')
            await setPost(titles.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteItem = (id: number) => {
        const deleteItem = post.filter(item => item.id !== id)
        setPost(deleteItem)
    }

    // get data on render
    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            <h1>Album</h1>
            {post.map((item: Title) => 
                <div key={item.id}>
                <h4>Title:</h4>
                <p>{item.title}</p>
                <img src="https://via.placeholder.com/150" alt="album"/>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default Album
