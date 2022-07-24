/**
 * File: LoginFrame.styles.js
 * Project: heb-takehome
 * File Created: Saturday, 23rd July 2022 1:34:47 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Saturday, 23rd July 2022 1:34:48 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */
import styled from "styled-components";
import { FormGroup, Label } from "../../components/Forms";

export const LoginFrame = styled.div`
    width: 30%;
    background-color: ${style => style.theme.colors.secondary};
    border-radius: 1rem;
    text-align: center;
`

export const LoginForm = styled(FormGroup)`
    display: flex;
    flex-direction: column;
`

export const LoginLabel = styled(Label)``
