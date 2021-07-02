import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position : 'relative',
        overflow: 'hidden',
        bottom: '0',
        width: '100%',
    }
    return (
        <footer className="bg-dark text-light py-3" style = {footerStyle}>
            <p className="text-center">
                Copyright &copy; TodoList.com
            </p>
        </footer>
    )
}
