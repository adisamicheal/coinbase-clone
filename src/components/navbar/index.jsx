import './index.scss';

const Navbar = () => {
  return (
    <div className="header">
      <nav>
        <img className='logo' src="https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg" alt="logo" />
        <div className="links">
            <ul>
                <li>Prices</li>
                <li>Learn</li>
                <li>Individuals</li>
                <li>Businesses</li>
                <li>Developers</li>
                <li>Company</li>
            </ul>
        </div>
        <div className="auth-links">
            <ul>
                <li>
                    <span className='transparent'>Sign In</span>
                </li>
                <li>
                    <button className='solid'>Get Started</button>
                </li>
            </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar