/**
 * File: Modal.js
 * Project: heb-takehome
 * File Created: Sunday, 24th July 2022 2:51:07 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Sunday, 24th July 2022 2:51:08 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import React, {Fragment} from 'react';
import styled from 'styled-components'

export const Modal = ({ children, ...props}) => { 
    return <ModalDiv {...props}>{children}/</ModalDiv>
};

Modal.Body =  ({children, ...props}) => {
    return <MBody {...props}>{children}</MBody>;
}
Modal.Header =  ({children, ...props}) => {
    return <MHeader {...props}>{children}</MHeader>;
}
Modal.Title =  ({children, ...props}) => {
    return <MoTitle {...props}>{children}</MoTitle>;
}
Modal.Footer =  ({children, ...props}) => {
    return <MFooter {...props}>{children}</MFooter>;
}

const ModalDiv = styled.div`
    z-index: 400;
    display: ${(style) => (style.show ? 'block' : 'none')};
    top: 25%;
    left: 25;
    bottom: 0;
    position: fixed;
    overflow: hidden;
    height: 40vh;
    width: 40vw;
    align-items: center;
    justify-content: center;
    background-color: ${style => style.theme.colors.third};
`;

const MBody = styled.div`
    position: relative;
    overflow: auto;
    flex-direction: row;
    height: 40%;
    padding: 0 2rem;
`

const MHeader = styled.div`
    display: flex;
    flex-direction: row;
`

const MoTitle = styled.span`
    font-size: 30px;
    padding: 2rem;
    margin: 0 1rem;
    color: ${style => style.theme.colors.white};
`

const MFooter = styled.div`
    padding: 0 2rem;
    text-align: right;
`

export const MClose = styled.a`
    float: right !important;
    text-decoration: none;
    cursor: pointer;
`