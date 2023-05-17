import React from 'react'

function MenuItem({ image, name, price }) {
    return (
        <>
            <div className='menuItem'>
                <img src={image} style={{width: 350, height: 175}}/>
                <h1>{name}</h1>
                <p>${price}</p>
            </div>
        </>
    )
}
export default MenuItem;
