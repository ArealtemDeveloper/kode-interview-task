import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineStar } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'

export const UserPage = () => {

    const data = useSelector(state => state.users.users);
    const user = {...data[0]}
  
    return (
        <div>
            <Header>
                <Avatar src={user.avatarUrl} alt="" />
                <p style={{fontWeight: 700, fontSize: '24px'}}>
                    {`${user.firstName} ${user.lastName}`}
                </p>
                <p style={{fontWeight: 400, fontSize: '14px'}}>
                    {user.position}
                </p>
            </Header>
            <BirthDay>
                <div style={{display:'flex', alignItems: 'center', marginLeft: '1rem'}}>
                    <AiOutlineStar/>
                    <p style={{fontWeight: 500, marginLeft: '5px'}}>{user.birthday}</p>
                </div>
                <div style={{display:'flex', alignItems: 'center', marginRight: '1rem'}}>
                    <p style={{fontWeight: 500,color:'#97979B'}}>
                        `{2022 - +user.birthday.slice(0, 4) } лет`
                    </p>
                </div>
            </BirthDay>
            <div style={{display:'flex', alignItems: 'center', marginLeft: '1rem'}}>
                <BsTelephone/>
                <h4 style={{marginLeft: '5px'}}>{user.phone}</h4>
            </div>
        </div>
    )
}

const Header = styled.div`
    width: 100%;
    height: 280px;
    background-color: #F7F7F8;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const BirthDay = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: space-between;
`
const Avatar = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
    margin-bottom: 1rem;
`