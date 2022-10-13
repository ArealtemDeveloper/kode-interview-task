import React, { useState } from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { MdSort } from 'react-icons/md'

export const CustomInput = () => {

    const [value, setValue] = useState('')
    const [focus, setFocus] = useState(false)

    return (
        <InpWrapper>
            <BsSearch style={focus ? {color: 'black'} : {color:'#C3C3C6'}}/>
            <Inp 
                placeholder='Введите имя, тэг, почту...'
                onFocus={() => setFocus(true)}
                type="text" 
                value={value} 
                onChange={e => setValue(e.target.value)}/>
            <MdSort style={{color: '#C3C3C6'}}/>
        </InpWrapper>
        
    )
}

const InpWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: none;
    margin: 20px 10px;
    padding: 8px 12px;
    border-radius: 16px;
    background-color: #F7F7F8;
`

const Inp = styled.input`
    width: calc(100% - 20px);
    margin-left: 10px;
    background: none;
    outline: none;
    border: none;
`
