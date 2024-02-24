import React from 'react'
import "./footer.scss"

function Footer() {
  return (
    <div className="scrolling-text-container">
            <div className="scrolling-text-inner" style={{'--marquee-speed': '40s', '--direction':'scroll-right'}} role="marquee">
                <div className="scrolling-text">
                    <div className="scrolling-text-item">ALL RIGHTS RESERVED BY AGNI</div>
                    <div className="scrolling-text-item">ALL RIGHTS RESERVED BY AGNI</div>
                    <div className="scrolling-text-item">ALL RIGHTS RESERVED BY AGNI</div>
                    <div className="scrolling-text-item">ALL RIGHTS RESERVED BY AGNI</div>
                </div>
                <div className="scrolling-text">
                    <div className="scrolling-text-item">ALL RIGHTS RESERVED BY AGNI</div>
                    <div className="scrolling-text-item">ALL RIGHTS RESERVED BY AGNI</div>
                    <div className="scrolling-text-item">ALL RIGHTS RESERVED BY AGNI</div>
                    <div className="scrolling-text-item">ALL RIGHTS RESERVED BY AGNI</div>
                </div>
            </div>
        </div>
  )
}

export default Footer