/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from '../gatsby-plugin-theme-ui/index.js'
import components from '../gatsby-plugin-theme-ui/components'
import Keyboard from './keyboard'

// import React from 'react'

export default ({ children }) => {
    return (
        <ThemeProvider theme={theme} components={components}>
            <div
                sx={{
                    width: "80%",
                    m: "auto",
                    mt: 6,
                    bg: "muted"
                }}
            >
            from the layout
                {children}
            </div> 
        </ThemeProvider>
    )
}