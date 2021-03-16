import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IPost } from '../types/globalTypes'
import { dummyPost } from '../dummyData'
import { Badge, Image } from 'react-bootstrap'

interface ParamTypes {
  postId: number
}

const PostPage = () => {
  const [post, setPost] = useState<IPost>(dummyPost)
  // @ts-ignore
  const { postId } = useParams<ParamTypes>()

  useEffect(() => {
    setPost(dummyPost)
  }, [])

  return (
    <div className='container'>
      <Image src={post.coverImage} fluid width='100%' />
      <h1 style={{ margin: '10px 0' }}>
        <Badge variant={'secondary'}>{post.title}</Badge>
      </h1>
      <div>
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export default PostPage
