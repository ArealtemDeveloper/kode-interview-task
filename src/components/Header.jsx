import React from 'react'
import styled from 'styled-components'
import { Categories } from './Categories'
import { CustomInput } from './CustomInput'

export const Header = () => {
    return (
        <TopBar>
            <h1 style={{marginLeft: 16, marginTop: 20}}>Поиск</h1>
            <CustomInput/>
            <Categories/>
        </TopBar>
    )
}

const TopBar = styled.div`
    width: 100%;
    min-height: 152px;
    margin: 0;
    background-color: #FFFFFF;
`



