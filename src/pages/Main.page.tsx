import React from 'react'
import { CardColumns, Row } from 'react-bootstrap'
import { posts } from '../dummyData'
import PostPreview from '../components/PostPreview'

const MainPage = () => {
  return (
    <div className='container'>
      <Row className=''>
        <CardColumns className='mt-3'>
          {posts.map(post => (
            <PostPreview post={post} />
          ))}
        </CardColumns>
      </Row>
    </div>
  )
}

export default MainPage
