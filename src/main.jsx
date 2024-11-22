import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
    {/* <div class="absolute fixed  inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00092d_1px)] bg-[size:15px_15px]"></div> */}
    {/* <div class="absolute fixed  inset-0 -z-10 h-full w-full items-center px-5 py-24 bg-[#000000] bg-[radial-gradient(#ffffff55_1px,#0D1117_1px)] bg-[size:15px_15px]"></div> */}
    <App />
  </StrictMode>,
)
