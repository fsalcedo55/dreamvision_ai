import React from "react"
import { Link } from "react-router-dom"
import * as PATHS from "../../utils/paths"
// import * as CONSTS from "../../utils/consts"

const Navbar = (props) => {
  return (
    <nav className="flex items-center justify-between h-20">
      <Link to={PATHS.HOMEPAGE}>DreamVision.ai</Link>
      <div></div>

      <div>
        {props.user ? (
          <>
            <Link to={PATHS.PROTECTEDPAGE}>Protected Page</Link>
            <button onClick={props.handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to={PATHS.SIGNUPPAGE}>Signup</Link>
            <Link to={PATHS.LOGINPAGE}>Log In</Link>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar

// function Navbar() {
//   return (
//     <div className="flex items-center justify-between h-20">
//       <div>
//         <h1 className="text-2xl text-pink">DreamVision.ai</h1>
//       </div>
//       <div className="flex gap-6 text-lg font-bold text-tertiary">
//         <h1>Create</h1>
//         <h1>Feed</h1>
//       </div>
//       <div>
//         <img
//           className="inline-block w-12 h-12 rounded-full ring ring-white"
//           src="https://images.unsplash.com/photo-1606744841792-e92948115a84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80"
//           alt="DreamVision.ai Shellhacks"
//         />
//       </div>
//     </div>
//   )
// }
