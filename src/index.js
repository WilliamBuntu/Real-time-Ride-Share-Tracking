import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import "./index.css"
import  Layout from "./components/layouts"
import { ChakraProvider, theme } from '@chakra-ui/react'

ReactDOM.render(
  <React.StrictMode>
   <ChakraProvider theme={theme}>
   <Layout>
      <App />
    </Layout>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
