/**
 * File: SupportingTitle.js
 * Project: heb-takehome
 * File Created: Sunday, 24th July 2022 10:48:37 am
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Sunday, 24th July 2022 10:48:37 am
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import styled from 'styled-components'

const SupportingTitle = styled.p`
    font-weight: 500;
    font-size: 26px;
    color: ${(style) => (style.prime ? style.theme.colors.primary : style.theme.colors.third)};
`

export default SupportingTitle
