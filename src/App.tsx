import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import MainPage from './pages/Main.page'
import PostPage from './pages/Post.page'

function App() {
  return (
    <div className='app'>
      <Header />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/:id' component={PostPage}/>
        <Redirect to='/' />
      </Switch>
    </div>
  )
}

export default App
