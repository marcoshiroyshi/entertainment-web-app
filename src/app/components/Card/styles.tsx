'use client'

import styled from "styled-components";

export const SCard = styled.div`
    width: 400px;
    height: 200px;
    border: 1px solid white;
    margin-top: 1rem;
    border-radius: 10px;
    color: white;
    padding-left: 1.4rem;

    .card-att {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 1.2rem;
        margin-top: 7rem;

    }

    .card-att span {
        width: 7px;
        height: 7px;
        background-color: white;
        border-radius: 100%;
    }
`