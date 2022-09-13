import React from 'react'
import reactDOM from 'react-dom'
import { createRoot } from 'react-dom/client' 
import 'bootstrap/dist/css/bootstrap.css'
import App from './app'

createRoot(document.getElementById('root')).render(<App />)
