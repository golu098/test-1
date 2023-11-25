import React from 'react'
import styled from "styled-components";

import "./product.css";
import { NavLink } from 'react-router-dom';
const Product = (curElem) => {
    const { id, name,image, price, category } = curElem;
    return (
        <NavLink to={`/singleproduct/${id}`}>
            <div className='card'>
                <figure>
                    <img src={image}  className="img1" alt={name} />
                    <figcaption className='caption'>{category}</figcaption>

                </figure>
                <div className='card-data'>
                    <div className='card-data-flex'>
                        <h3>{name}</h3>
                        <p className='card-data--price'>
                            {price}
                        </p>
                    </div>
                </div>
            </div>
        </NavLink>

    )
}

export default Product