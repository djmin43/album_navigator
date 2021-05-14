import React from 'react'
import elephant from '../images/elephants.jpg'

const Home = () => {
    return (
        <div className="home">
            <img src={elephant} alt="elephants"/>
            <h4><i>Life is short. Go out and explore the nature!</i></h4>
        </div>
    )
}

export default Home
