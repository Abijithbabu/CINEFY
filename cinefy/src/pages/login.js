import React from 'react'
import  GmailLogin  from '../Components/login/gmailLogin'
import { Layout as AuthLayout } from '../Layouts/auth/layout';

function login() {
  return (
    <AuthLayout>
      <GmailLogin/>
    </AuthLayout>
  )
}

export default login 