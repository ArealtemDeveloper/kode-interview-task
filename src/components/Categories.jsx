import React from 'react'
import styled from 'styled-components'

export const Categories = () => {

    const groups = [
        {id: 1, name : 'Все'},
        {id: 2, name : 'Designers'},
        {id: 3, name : 'Managers'},
        {id: 4, name : 'IOS'},
        {id: 5, name : 'Android'},
    ]


    return (
        <>
            <Groups>
                {groups.map(item => 
                // Использую index умышленно, так как изменения групп внутри
                // приложения не планируется
                    <h3 
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