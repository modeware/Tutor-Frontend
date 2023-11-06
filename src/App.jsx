import { useState } from 'react'
import './App.css'
import Header from '@components/common/Header'
import Container from '@components/common/Container/Container'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Sidebar/>
      <Header/>
      <Container>
        <p>My Courses</p>
      </Container>
    </>
  )
}

export default App
