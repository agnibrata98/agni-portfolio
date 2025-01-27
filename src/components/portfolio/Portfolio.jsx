import { useRef } from "react";
import "./portfolio.scss"
import {motion, useScroll,useSpring, useTransform} from "framer-motion"

const items = [
    {
        id:1,
        title:"React Weather App",
        img:"https://images.pexels.com/photos/4275893/pexels-photo-4275893.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente, velit eligendi sunt quas distinctio eius sint voluptate quasi eum. Laudantium, tempora nisi fugit rem aliquid sequi! Ea, laboriosam esse?",
        link: "https://weather-app-blush-two-33.vercel.app/",
    },

    {
        id:2,
        title:"React Crypto Coin Tracker",
        img:"https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6757dae0be2729b02083ba9c/screenshot_2024-12-10-06-08-38-0000.webp&fit=cover&h=500&q=40&w=800",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente, velit eligendi sunt quas distinctio eius sint voluptate quasi eum. Laudantium, tempora nisi fugit rem aliquid sequi! Ea, laboriosam esse?",
        link: "https://animated-swan-0a6a89.netlify.app/",
    },

    {
        id:3,
        title:"Next Js Blog App and Student Management System",
        img:"https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/675ead3bde95580008a320b8/screenshot_2024-12-15-10-21-14-0000.webp&fit=cover&h=500&q=40&w=800",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente, velit eligendi sunt quas distinctio eius sint voluptate quasi eum. Laudantium, tempora nisi fugit rem aliquid sequi! Ea, laboriosam esse?",
        link: "https://blog-course.netlify.app/",
    },

    {
        id:4,
        title:"React Eccommerce Admin Panel",
        img:"https://app.netlify.com/.netlify/images?url=https://d33wubrfki0l68.cloudfront.net/6757d6713ae728b60249041a/screenshot_2024-12-10-05-49-45-0000.webp&fit=cover&h=500&q=40&w=800",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sapiente, velit eligendi sunt quas distinctio eius sint voluptate quasi eum. Laudantium, tempora nisi fugit rem aliquid sequi! Ea, laboriosam esse?",
        link: "https://cheerful-tiramisu-3ed71d.netlify.app/",
    },
];

const Single = ({item})=>{
    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        // offset:["end end", "start start"]
    })

    const y = useTransform(scrollYProgress, [0,1], [-500,500])

    return(
        <section>
            <div className="container">
                    <div className="wrapper">
                        <div className="imageContainer" ref = {ref}>
                        <img src={item.img} alt="" />
                        </div>
                        <motion.div className="textContainer" style={{y}}>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                            <a href={item.link} target="blank"><button>See Demo</button></a>
                        </motion.div>
                    </div>
            </div>
        </section>
    )
}

function Portfolio() {

    const ref = useRef()

    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end", "start start"]
    })

    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:20
    })

  return (
    <div className="portfolio" id="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style={{scaleX}}>

            </motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio