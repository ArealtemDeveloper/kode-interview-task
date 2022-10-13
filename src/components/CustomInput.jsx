import React, { useState } from 'react'
import styled from 'styled-components'
import { BsSearch } from 'react-icons/bs'
import { MdSort } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { searchUsersByName } from '../store/userSlice'

export const CustomInput = () => {

    const [value, setValue] = useState('')
    const [focus, setFocus] = useState(false)

    const dispatch = useDispatch()

    const inputSearch = (e) => {
        setValue(e.target.value)
        dispatch(searchUsersByName(e.target.value))
    }

    return (
        <InpWrapper>
            <BsSearch style={focus ? {color: 'black'} : {color:'#C3C3C6'}}/>
            <Inp 
                placeholder='Введите имя, тэг, почту...'
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                type="text" 
                value={value} 
                onChange={inputSearch}/>
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
