import React, { useState, useEffect } from 'react'

interface Title {
    userId: number;
    id: number;
    title: string
}

interface CurrentPostsProps {
    posts: Title[];
    deleteItem: (id: number) => void;
    currentPage: number; 
}

const CurrentPosts = ({posts, deleteItem, currentPage}: CurrentPostsProps) => {

    const [currentPosts, setCurrentPosts] = useState<Title[]>([])

    // Pagination logic for 5 or more posts each time.
    const [postsPerPage] = useState<number>(5)

    // Setting out post index.
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
        <div className="album-container">
            {currentPosts.map((item: Title) => 
                <span className="post" key={item.id}>
                    <img src="https://via.placeholder.com/150" alt="album"/>
                    <button onClick={() => deleteItem(item.id)}>DELETE</button>
                    <h5><i>{item.title}</i></h5>
                    <small>User ID: {item.userId}</small>
                </span>
            )}
        </div>
    )
}

export default CurrentPosts
