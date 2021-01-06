/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui/index.js'
import React from 'react'

export default (props) => {
    return (
    <ThemeProvider theme={theme}>
        <div>
            <h1
                sx={{
                    fontFamily: "heading",
                    mt: 6
                }}
            >this is my test!</h1>
        </div>
    </ThemeProvider>
    )
}