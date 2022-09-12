import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
<footer>
    <div className='info'>

          <a
            href="https://www.linkedin.com/in/kalilah-clarke-36876530/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png"
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/KalilahClarke"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="GitHub"
            />
          </a>
    </div>
    </footer>
  )
}
