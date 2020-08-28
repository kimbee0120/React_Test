import React from 'react'

function Home(props) {
    return (
        <div>
            <h1> The is the home page</h1>

            <button onClick= {props.myFunc}>Add to Basket</button>
        </div>
    )
}

export default Home;
