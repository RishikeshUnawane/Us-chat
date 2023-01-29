import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>3D Academia</span>
      <div className="user">
        <img src="data:image/jpeg;base64,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" alt="" />
        <span>Rishi</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar