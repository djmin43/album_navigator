import React, { useState, useEffect } from 'react'
import Pagination from './Pagination'
import CurrentPosts from './CurrentPosts'
import axios from 'axios'

interface Title {
    userId: number;
    id: number;
    title: string
}

const Album = () => {

    const [posts, setPosts] = useState<Title[]>([])

    const [postsPerPage] = useState<number>(5)
    const [currentPage, setCurrentPage] = useState<number>(1)

    // Fetch data from jsonplaceholder
    const fetchPosts = async () => {
        try {
            const titles = await axios.get('https://jsonplaceholder.typicode.com/albums')
            await setPosts(titles.data)          
        } catch (error) {
            console.log(error)
        }
    }

    // Delete an Item from Posts
    const deleteItem = (id: number) => {
        const deleteItem = posts.filter(item => item.id !== id)
        setPosts(deleteItem)
    }

    // Pagination
    const maxPageNumber = posts.length/postsPerPage
    const paginate = (pageNumber: number) => {
        setCurrentPage(pageNumber)
    }

    // get data on render
    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            <h1>Album</h1>
            <CurrentPosts posts={posts} deleteItem={deleteItem} currentPage={currentPage} />
            <Pagination currentPage={currentPage} maxPageNumber={maxPageNumber} paginate={paginate}/>
        </div>
    )
}

export default Album
