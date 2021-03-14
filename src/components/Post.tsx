import React from 'react'
import { Link } from 'react-router-dom'
import { IPost } from '../types/globalTypes'
import { Button, Card } from 'react-bootstrap'

const Post: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <Card>
      <Card.Img variant='top' src={post.coverImage} />
      <Card.Body>
        <Card.Title>
          <Link to={`/${post.id}`}>{post.title}</Link>
        </Card.Title>
        <Card.Text>{post.description}</Card.Text>
        <Button variant='primary'>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default Post
