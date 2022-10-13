import React, { useState } from 'react'
import styled from 'styled-components'

export const Categories = () => {

    const groups = [
        {id: 1, name : 'Все'},
        {id: 2, name : 'Designers'},
        {id: 3, name : 'Managers'},
        {id: 4, name : 'IOS'},
        {id: 5, name : 'Android'},
    ]

    const [activeIndex, setActiveIndex] = useState(0) 

    return (
        <>
            <Groups>
                {groups.map(item => 
                    <h3 
                        onClick = {() => setActiveIndex(item.id)}
                        className={activeIndex === item.id ? 'active' : ''}
                        key={item.id} >
                        {item.name}
                    </h3>
                )}
            </Groups>
            <hr className="line"/>
        </>
    )
}

const Groups = styled.ul`
    display: flex;
    align-items: center;
    gap: 15px;
    margin: 0 1rem;
`