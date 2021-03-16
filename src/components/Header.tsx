import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>
        <Link to='/'>Новости.ру</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link>
            <Link to='/'>Главная</Link>
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Введите название поста' className='mr-sm-2' />
          <Button variant='outline-success'>Найти</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header
