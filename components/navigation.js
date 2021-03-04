import Link from 'next/link'

const Navigation = () =>{
  return <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
                  <div className="container-fluid">
                  <Link href='/'>
                    <a className="navbar-brand">Home</a>
                  </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link href='/about'>
                            <a className="nav-link">About</a>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link href='/forecast'>
                            <a className="nav-link">Forecast</a>
                          </Link>
                        </li>
                        </ul>
                    </div>
                  </div>
                </nav>

}
export default Navigation;
