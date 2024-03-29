import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import {QueryClient , QueryClientProvider} from 'react-query'

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={Routes} />
    </QueryClientProvider>
  </React.StrictMode>,
)
