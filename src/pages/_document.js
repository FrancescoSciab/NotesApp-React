import { Html, Head, Main, NextScript } from 'next/document'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Sidebar />
        <Editor />
      </body>
    </Html>
  )
}
