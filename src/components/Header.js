import reactlogo from '../Image/logo192.png'

function Header()
{
    return (
            <header>
                <nav className="nav">
                    <img src={reactlogo} className="nav-logo"></img>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
    )
}

export default Header