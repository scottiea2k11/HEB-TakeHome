/**
 * File: Forms.js
 * Project: heb-takehome
 * File Created: Saturday, 23rd July 2022 1:38:14 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 23rd July 2022 1:38:15 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import styled from "styled-components";

export const FormGroup = styled.form`
    padding: 1rem;
    margin: 0 auto;
`

export const Label = styled.label`
    font-weight: 400;
    padding: 0.5rem 1rem;
    color: ${style => style.theme.colors.primary};
`