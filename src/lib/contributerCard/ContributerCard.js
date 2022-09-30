import React, { useEffect, useRef } from 'react'
function ContributerCard({ style, children, onWidthUpdate }) {
  /**
   * @type {import("react").MutableRefObject <HTMLDivElement>}
   */
  const childrenRef = useRef(null)
  useEffect(() => {
    onWidthUpdate(childrenRef.current.clientWidth)
  }, [childrenRef, onWidthUpdate])
  return (
    <div ref={childrenRef}
      style={style}
    >
      {children}
    </div>
  )
}

export default ContributerCard