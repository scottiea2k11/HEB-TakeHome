/**
 * File: Title.js
 * Project: heb-takehome
 * File Created: Saturday, 23rd July 2022 2:23:45 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 23rd July 2022 2:23:45 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import styled from 'styled-components'

export const Title = styled.p`
    font-weight: 700;
    font-size: 32px;
    color: ${(style) => style.prime ? style.theme.colors.primary : style.theme.colors.secondary};
`
