import React from 'react'
import Navbar from '../Components/creator/layout/navbar'
import SideNav from '../Components/creator/layout/sideNav'

const RecruiterLayout = ({ children }) => {
 const [open, setOpen] = React.useState(false);
 return (
 <>
  <Navbar setOpen={setOpen} />
  <SideNav open={open} children={children} />
 </>
 )
}

export default RecruiterLayout
