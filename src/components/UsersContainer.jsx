import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import Skeleton from './Skeleton'
import { Link } from 'react-router-dom'


export const UsersContainer = () => {

    const data = useSelector(state => state.users.users);
    const { status } = useSelector(state => state.users);
      
    return (
        <Wrapper>
            {   status === 'loading' 
                ? [...new Array(10)].map((_, index) => <Skeleton key={index}/>)
                : data.map(user =>
                    (
                        <Link 
                            to={'/:id'}  
                            key={user.id} 
                            style={{textDecoration: 'none', color: 'black'}}>
                            <UserWrapper>
                                <Avatar src={user.avatarUrl} alt="avatar" />
                                <div>
                                    <MainInfo>
                                        <Name>{user.firstName}{user.lastName}</Name>
                                        <Tag>{user.userTag}</Tag>
                                    </MainInfo>
                                    <Prof>{user.position}</Prof>
                                </div>
                            </UserWrapper>
                        </Link>
                    )
                )}
        </Wrapper>
    )
}


const Wrapper = styled.div`
    margin: 1rem;
    width: 100%;
    height: 100vh;
`

const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
`

const Avatar = styled.img`
    width: 75px;
    height: 75px;
    border-radius: 50%;
`
//Имя + тэг
const MainInfo = styled.div`
    display: flex;
    margin: 0 1rem;
`
const Name = styled.p`
    margin-right: 4px;
    font-weight: 500;
`
const Tag = styled.p`
   color: #97979B;
   font-weight: 500;
`
//Специальность
const Prof = styled.p`
    margin: 4px 1rem;
    font-weight: 400;
    color: #55555C;
`