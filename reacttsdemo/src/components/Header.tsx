import React from 'react'

interface PropsI {
  randomString: string
  alerts?: object[]
}

type Props = PropsI

const Header: React.FC<Props> = (props: Props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark primary-color">
      {/* <!-- Navbar brand --> /} */}
      <a className="navbar-brand" href="#">
        Navbar
      </a>

      {/* {/ <!-- Collapse button --> /} */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#basicExampleNav"
        aria-controls="basicExampleNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* {/  <!-- Collapsible content --> /} */}
      <div className="collapse navbar-collapse" id="basicExampleNav">
        {/* {/ <!-- Links --> */}
      </div>
    </nav>
  )
}

export default Header
