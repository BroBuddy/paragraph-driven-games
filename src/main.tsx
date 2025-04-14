import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'

const Overview = React.lazy(() => import('./components/Overview'))
const Rules = React.lazy(() => import('./components/Rules.tsx'))
const Rule = React.lazy(() => import('./components/Rule.tsx'))
const Events = React.lazy(() => import('./components/Events'))

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Overview />
                    </React.Suspense>
                ),
            },
            {
                path: '/rules',
                element: (
                    <React.Suspense fallback={<>...</>}>
                        <Rules />
                    </React.Suspense>
                ),
                children: [
                    {
                        path: '/rules/:ruleId',
                        element: (
                            <React.Suspense fallback={<>...</>}>
                                <Rule />
                            </React.Suspense>
                        ),
                    },
                ],
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
