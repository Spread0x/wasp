import React from 'react'

import { Link } from 'react-router-dom'
import useAuth from '../../auth/useAuth.js'


const createPrivatePage = (Page) => {
  return () => {
    const { data: user } = useAuth()

    if (!user) {
      return (
        <span>
          Please <Link to='/login'>login</Link> or <Link to='/signup'>sign up</Link>.
        </span>
      )
    } else {
      return (
        <Page user={user} />
      )
    }
  }
}

export default createPrivatePage

