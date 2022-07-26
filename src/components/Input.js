/*
 * File: Input
 * Project: heb-takehome
 * File Created: Saturday, 23rd July 2022 11:00:54 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 23rd July 2022 11:00:54 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'
import styled from "styled-components";

export const InputStyle = styled.input`
    height: 1rem;
    margin: 0 1rem;
    padding: 0.5rem;
    border: none;

    :active{
        border-color: ${style => style.theme.colors.primary};
    }
`