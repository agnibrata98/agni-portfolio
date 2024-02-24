import { useRef } from "react"
import "./servies.scss"
import {motion, useInView} from "framer-motion"

const variants = {
    initial:{
        x:-500,
        y:80,
        opacity:0,
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,

        },
    },
}

function Services() {

    const ref = useRef()

    const isInView = useInView(ref, {margin:"-100px"})

  return (
    <motion.div
     className="services"
     id="services"
     variants={variants} 
     initial="initial" 
     //animate="animate"
     //whileInView="animate"
     ref={ref}
     animate={ "animate"}
     >
        <motion.div className="textContainer" variants={variants}>
            <p>I Focus On Making A Website 
               <br/> More Efficient And Beautiful
            </p>
            <hr/>

        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1>
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Websites
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero illo dignissimos pariatur porro natus, corporis perspiciatis error necessitatibus in ad dolores rem commodi mollitia illum animi. Sed dolor cumque totam.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, impedit! Minus modi architecto voluptates amet vero officiis debitis odit veniam blanditiis soluta! Quod nam, quo magni laborum blanditiis laboriosam aliquam?
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus neque iure minus nostrum fugiat id consectetur odit ipsa, maxime saepe omnis vero laboriosam dolorem. Adipisci placeat voluptatem dicta laboriosam quae.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem omnis laboriosam veritatis quod voluptatum velit corporis sunt reiciendis molestiae animi? Natus dolores ea pariatur totam placeat veritatis sequi. Nobis, unde.motion.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services