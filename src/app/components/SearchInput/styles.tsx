'use client'

import styled from "styled-components";

export const SearchDiv = styled.div`
    display: flex;
    gap: 20px;

    input{
        background-color: ${({ theme }) => theme.colors.darkBlue};
        border: none;
        width: 40%;
        font-size: 1.3rem;
    }
`