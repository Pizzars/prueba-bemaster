import React from 'react'
import Login from 'src/screens/auth/Login'
import BasePage from 'src/screens/components/general/base/BasePage'

const LoginPage = () => {
  return (
    <BasePage title='Login' navbar={false} footer={false}>
      <Login />
    </BasePage>
  )
}

export default LoginPage
