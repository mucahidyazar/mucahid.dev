import React, { useState } from "react"
import { FcCheckmark } from "react-icons/fc"

export default function index() {
  const [active, setActive] = useState(true)

  return (
    active && (
      <div className="announcement">
        <p className="announcementMessage">
          This page now ready for working. So I designed for now but I will add
          functionality later.
        </p>
        <div className="announcementButton" onClick={() => setActive(false)}>
          <FcCheckmark size={20} /> <span>OK</span>
        </div>
      </div>
    )
  )
}
