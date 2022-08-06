/**
 * File: Seletor.js
 * Project: heb-takehome
 * File Created: Saturday, 6th August 2022 6:08:59 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 6th August 2022 6:09:00 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import styled from "styled-components";
import React from "react";


export const Selector = ({ children, ...props}) => {
    return <StyledSelector {...props}>{[<StyledOptionDef children='' value='' name='' placeholder="Select"/ >, children]}</StyledSelector>
}

Selector.Option = ({children, ...props}) => {
    return <StyledOption {...props}>{children}</StyledOption>
}

const StyledSelector = styled.select`
    height: 2.5rem;
    width: 12rem;
    font-size: medium;
    border: 2px solid ${style => style.theme.colors.third};
    margin: 0.3rem;
    padding: 0 0.2rem;
    background-color: ${style => style.theme.colors.third};
    color: ${style => style.theme.colors.white};
    outline: none;

    select::-ms-expand {
        display: none;
    }
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }
`
const StyledOption = styled.option``
const StyledOptionDef = styled.option`
    color: lightgray;
    font-style:normal;
`
