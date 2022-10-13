import React from 'react'
import styled from 'styled-components'
import { Categories } from './Categories'
import { CustomInput } from './CustomInput'
import { useSelector } from 'react-redux'

export const Header = () => {

    const { status } = useSelector(state => state.users)

    return (
        <TopBar 
            style={status === 'loading' ? {backgroundColor: '#6534FF'}:{}}> 
            <h1 style={{marginLeft: 16, marginTop: 20}}>Поиск</h1>
            {
                status === 'loading'
                    ? <Loader>Секундочку, гружусь ...</Loader> 
                    : <div><CustomInput/><Categories/></div>
            }
        </TopBar>
    )
}

const TopBar = styled.div`
    width: 100%;
    min-height: 152px;
    margin: 0;
    background-color: #FFFFFF;
`
const Loader = styled.h5`
    color: #FFFFFF;
    margin: 2rem 1rem;
    font-weight: 500;
`



