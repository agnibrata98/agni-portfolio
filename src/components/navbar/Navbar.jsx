import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import { motion } from "framer-motion"
function Navbar() {
  return (
    <div className="navbar">
        {/* Sidebar */}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}}>Agnibrata</motion.span>
            <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100009612218398&mibextid=ZbWKwL"><img src="/facebook.png" alt="..." /></a>
                <a href="https://www.instagram.com/agnibrata98?igsh=MWkzZWUwYnJoMG1pZQ=="><img src="/instagram.png" alt="..." /></a>
                <a href="https://www.linkedin.com/in/agnibrata-shee-0153201b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src="/LinkedIn_logo.png" alt="..." style={{width:"18px",height:"18px"}} /></a>
                <a href="#"><img src="/dribbble.png" alt="..." /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar