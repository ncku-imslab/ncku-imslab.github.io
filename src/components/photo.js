import React from "react"

// cat's image source: "https://www.pickpik.com/black-cat-view-cat-eyes-cat-looking-cute-38005"
const Photo = (dir) => (
    <img
        className={photoClass}
        src={
            dir.length === 0
                ? require("../images/members/cat.jpg")
                : require("../images/members/" + dir)
        }
        style={{ objectFit: photoObjectFit }}
        alt=""
    />
)

export default Photo

const photoClass = "dib h4 w4 pa2 mv2 ba b--black-05 br-100"
const photoObjectFit = "cover"
