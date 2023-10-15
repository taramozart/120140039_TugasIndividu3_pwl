/* eslint-disable react/prop-types */
import Footer from "./Footer"
import Header from "./Header"

const Layout = (props) => {
  return (
    <div className="">
      <Header/>
      <div className="min-h-screen bg-white flex items-center justify-center">
        {props.children}
      <Footer/>
      </div>
    </div>
  )
}

export default Layout