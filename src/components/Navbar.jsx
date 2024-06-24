import React from 'react'


const Navbar = () => {
  return (
       <>
       <nav className="navbar navbar-expand-lg bg-primary text-white" >
  <div className="container-fluid text-white">
    <a className="navbar-brand text-white fs-3" href="/">Text Tools.</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon border-color: lightgreen;"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white mx-3 fs-5" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white mx-3 fs-5" href="/about">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
       </>

  )
}

export default Navbar
