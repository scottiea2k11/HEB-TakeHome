/**
 * File: notice.js
 * Project: heb-takehome
 * File Created: Friday, 22nd July 2022 7:19:30 pm
 * Author: Scott Ayala (raymond.ayala@doalllabs.io)
 * -----
 * Last Modified: Friday, 22nd July 2022 7:19:30 pm
 * Modified By: Scott Ayala (raymond.ayala@doalllabs.io>)
 * -----
 * Copyright 2022 - 2022 TAG-U, Do All Labs
 * -----
 * HISTORY:
 * Date      	By	Comments
 * ----------	---	---------------------------------------------------------
 */

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'

const Notice = props => {
    const { notice } = useSelector(state => ({
        notice: state.notice
    }))

    return (
        <>
            <Frame>
                {notice !== null && notice.length > 0 && notice.map(noticeInfo => (
                    <NoticeWrapper id={noticeInfo.id} key={noticeInfo.id} success={noticeInfo.success}>
                        <Message key={noticeInfo.id} success={noticeInfo.success}>{noticeInfo.msg}</Message>
                    </NoticeWrapper>
                ))
                }
            </Frame>
        </>
    )
}

Notice.propTypes = {
    notice: PropTypes.array.isRequired
}

export default Notice

const Frame = styled.div`
    overflow-y: auto;
    height: auto;
    background-color: transparent;
    position: absolute;
    z-index: auto;
    box-shadow: 1rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0.5rem;
`

const NoticeWrapper = styled.div`
    left: 0;
    right: 0;
    top: 1rem;
    margin: 0 auto;
    width: 30vw;
    animation: noticeAnimation 0.5s ease-in;
    background-color: ${style => style.success ? style.theme.colors.third : style.theme.colors.secondary};

    @keyframes noticeAnimation {
        0%{
            transform: translate(0px,-50px)
        }
        100%{
            transform: translate(0, 0);
        }
    }
`

const Message = styled.p `
    font-size: 16px;
    color: ${style => style.success ? style.theme.colors.white : style.theme.colors.third};
    font-weight: 500;
    padding: 10px;
    text-align: center;
`