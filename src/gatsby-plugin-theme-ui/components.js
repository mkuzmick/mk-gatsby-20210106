/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui/index.js'
import Keyboard from '../components/keyboard'
import React from 'react'

export default {
    h1: props => (<h1 sx={{
        ...theme.styles.h1,
        color: "red"
    }} >{props.children}</h1>),
    Keyboard: Keyboard
}