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
                <div className="album" key={item.id}>
                {item.id}
                <h4>Title:</h4>
                <p>{item.title}</p>
                <h4>User ID</h4>
                <p>{item.userId}</p>
                <img src="https://via.placeholder.com/150" alt="album"/>
                <button onClick={() => deleteItem(item.id)}>Delete a post</button>
                </div>
            )}
        </div>
    )
}

export default CurrentPosts
