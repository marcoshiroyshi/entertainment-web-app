'use client'

import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    border: 1px solid white;
    height: 100vh;
    
`

export const AsideNav = styled.div`
    border: 1px solid white;
    width: 10%;
    margin-top: 2rem;
    margin-left: 2rem;
    padding-top: 5rem;
    border-radius: 30px;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 30px;
        height: e0px;
    }

    div {
        display: flex;
        margin-top: 5rem;
        gap: 30px;
        flex-direction: column;
    }
`

export const HomePage = styled.div`
    width: 100%;
    margin-top: 2rem;
    padding-top: 2rem;
    padding-left: 2rem;
`

