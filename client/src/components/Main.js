import React from 'react'
import { LeftSideBar } from './LeftSideBar'
import { Content } from './Content'


export const Main = () => {
    return (
        <main className="main">
            <div className="main-wrapper">
                <LeftSideBar />
                <Content />
            </div>
        </main>
    )
} 