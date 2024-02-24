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
                Passionate about crafting immersive digital experiences, I specialize in website development, transforming ideas into dynamic and user-friendly online platforms.With a keen eye for design and a proficiency in a range of programming languages and frameworks.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                <h2 style={{textAlign:"center"}}>Efficient FrontEnd & BackEnd</h2>
                <p>
                    I use various animation features to make any website beautiful and attractive and also SEO friendly.Besides these I also put effort on backend development of any website.From concept to deployment, I thrive on bringing visions to life in the digital realm, creating websites that leave a lasting impact.
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                <h2>HTML And CSS</h2>
                <p>
                With a solid foundation in HTML and CSS, I am adept at transforming static concepts into dynamic, visually captivating web experiences. Proficient in writing clean and semantic HTML code, I ensure the structural integrity of each project, laying a robust foundation for seamless user interactions. 
                </p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{backgroundColor:"lightgray",color:"black"}}>
                <h2>Wordpress Developer</h2>
                <p>
                Proficient in WordPress and Elementor, I specialize in crafting dynamic and visually stunning websites with unparalleled ease and flexibility. With a deep understanding of WordPress's powerful CMS capabilities, I leverage its robust framework to create scalable and user-friendly digital solutions.
                </p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services