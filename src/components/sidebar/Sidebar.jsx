import { useState } from "react"
import { motion } from "framer-motion"
import Links from "./links/Links"
import "./sidebar.scss"
// import ToggleButton from "./toggleButton/ToggleButton"
function Sidebar() {
    const [open, setOpen] = useState(false)
    const variants = {
        open:{
            clipPath:"circle(1200px at 50px 50px)",
            transition:{
                type:"spring",
                stiffness:20,
            },
        },
        closed:{
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type:"spring",
                stiffness:400,
                damping:40,
            },
        },
    };
  return (
    <motion.div className="sidebar" animate={open?"open":"closed"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <button onClick={()=>setOpen((prev) => !prev)}>
        <svg width="20" height="20" viewBox="0 0 23 23">
            <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" variants={{ closed: {d: "M 2 2.5 L 20 2.5"}, open:{d: "M 3 16.5 L 17 2.5"},}} />
            <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" d="M 2 9.423 L 20 9.423" variants={{closed:{opacity: 1}, open:{opacity:0},}}/>
            <motion.path strokeWidth="3" stroke="black" strokeLinecap="round" variants={{ closed: {d: "M 2 2.5 L 20 2.5"}, open:{d: "M 3 16.5 L 17 2.5"},}} />
        </svg>
    </button>
        
    </motion.div>
  )
}

export default Sidebar