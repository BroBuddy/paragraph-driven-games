import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const Tag = React.lazy(() => import('./components/Tag'))
const Tags = React.lazy(() => import('./components/Tags'))
const Rules = React.lazy(() => import('./components/Rules'))
const Events = React.lazy(() => import('./components/Events'))

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Tags />
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
                path: '/events',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Events />
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
