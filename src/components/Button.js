/**
 * File: Button.js
 * Project: heb-takehome
 * File Created: Saturday, 23rd July 2022 1:51:19 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 23rd July 2022 1:51:19 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledButton = styled.button`
    background-color: ${(style) => (style.transparent ? 'transparent' : style.theme.colors.third)};
    margin:1rem;
    height: 2rem;
    color:${style => style.theme.colors.white};
    will-change: transform;
    border: none;
    backface-visibility: hidden;
    font-weight: bold;
    border: 2px solid ${(style) => (style.prime ? style.theme.colors.prime : style.theme.colors.third)};

    :hover{
        background-color: ${style => style.theme.colors.primary};
        cursor: pointer;
        transform: scale(1.02);
    }
`

const Button = ({ ...props }) => {
  const { title, transparent } = props
  return (
    <StyledButton transparent={transparent}>{title}</StyledButton>
  )
}

Button.propTypes = {}

export default Button
