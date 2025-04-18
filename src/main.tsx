import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const Tag = React.lazy(() => import('./components/Tag'))
const Booklet = React.lazy(() => import('./components/Booklet'))
const Rules = React.lazy(() => import('./components/Rules'))
const Sector = React.lazy(() => import('./components/Sector'))
const Sheet = React.lazy(() => import('./components/Sheet'))

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Booklet />
                    </React.Suspense>
                ),
                children: [
                    {
                        path: '/:tagId',
                        element: (
                            <React.Suspense fallback={<>...</>}>
                                <Tag />
                            </React.Suspense>
                        ),
                    },
                ],
            },
            {
                path: '/rules',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Rules />
                    </React.Suspense>
                ),
            },
            {
                path: '/sector',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Sector />
                    </React.Suspense>
                ),
            },
            {
                path: '/sheet',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Sheet />
                    </React.Suspense>
                ),
            },
        ],
    },
])

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)
