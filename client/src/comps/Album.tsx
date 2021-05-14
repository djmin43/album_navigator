import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import axios from 'axios'

interface Title {
    userId: number;
    id: number;
    title: string
}

const Album = () => {

    const [posts, setPosts] = useState<Title[]>([])
    const [currentPosts, setCurrentPosts] = useState<Title[]>([])

    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(5)

    const pageNumber = []
    const maxPageNumber = posts.length/postsPerPage

    for (let i = 1; i < maxPageNumber ; i++){
        pageNumber.push(i)
    }

    const lastPostIndex = currentPage * postsPerPage
    const firstPostIndex = lastPostIndex - postsPerPage


    // Fetch data from jsonplaceholder, then select out posts for page
    const fetchPosts = async () => {
        try {
            const titles = await axios.get('https://jsonplaceholder.typicode.com/albums')
            await setPosts(titles.data)
            const slicePosts = await posts.slice(firstPostIndex, lastPostIndex)
            console.log(slicePosts)
            await setCurrentPosts(slicePosts)            
        } catch (error) {
            console.log(error)
        }
    }
    const deleteItem = (id: number) => {
        const deleteItem = posts.filter(item => item.id !== id)
        setPosts(deleteItem)
    }

    // get data on render
    useEffect(() => {
        fetchPosts()
    }, [])

    useEffect(() => {
        fetchPosts()
    }, [currentPage])

    return (
        <div>
            <div>Album</div>
            {currentPosts.map((item: Title) => 
                <div key={item.id}>
                <h4>Title:</h4>
                <p>{item.title}</p>
                <img src="https://via.placeholder.com/150" alt="album"/>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
                </div>
            )}
        
            <div>
                {pageNumber.map(item => 
                    <button key={item} onClick={() => setCurrentPage(item)}>{item}</button>
                )}
            </div>
        </div>
    )
}

export default Album
