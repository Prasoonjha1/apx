import react_logo from '../Image/logo192.png'

function Header()
{
    return (
            <header>
                <nav>
                    <img src={react_logo} className="nav-logo"></img>
                    <h3 className='nav-logo-text'>ReactFacts</h3>
                    <h4 className='nav-text'>React Course - Project 1</h4>
                </nav>
            </header>
    )
}

export default Header