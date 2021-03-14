import React from 'react'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, CardColumns } from 'react-bootstrap'
import Post from './components/Post'
import { posts } from './dummyData'

function App() {
  return (
    <div className='app'>
      <Header />
      <div className='container'>
        <Row className=''>
          <CardColumns className='mt-3'>
            {posts.map(post => (
              <Post post={post} />
            ))}
          </CardColumns>
        </Row>
      </div>
    </div>
  )
}

export default App
