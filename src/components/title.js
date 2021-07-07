import React from "react"

export const GoldenTitle = (title) => <h1 className={goldenTitleClass}> {title} </h1>
export const NavyTitle = (title) => <h1 className={navyTitleClass}> {title} </h1>

const goldenTitleClass = "pb2 self-gold"
const navyTitleClass = "pb2 navy bb bw1"
