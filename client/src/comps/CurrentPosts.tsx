import React, { useState, useEffect } from 'react'

interface Title {
    userId: number;
    id: number;
    title: string
}

const CurrentPosts = ({posts, deleteItem, currentPage}: any) => {

    const [currentPosts, setCurrentPosts] = useState<Title[]>([])

    const [postsPerPage] = useState(5)

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage

    const getCurrentPosts = () => {
        const slicePosts = posts.slice(firstPostIndex, lastPostIndex)
        setCurrentPosts(slicePosts)   
    }

    // Update page posts every time there is change on posts and page number.
    useEffect(() => {
        getCurrentPosts()
    }, [currentPage, posts])

    return (
        <div>
            {currentPosts.map((item: Title) => 
                <div key={item.id}>
                <h4>Title:</h4>
                <p>{item.title}</p>
                <h4>User ID</h4>
                <p>{item.userId}</p>
                <img src="https://via.placeholder.com/150" alt="album"/>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default CurrentPosts
