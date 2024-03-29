function Header() {
    return (
        <header>
            <a href="/">
            <div className="header-left">
                <h1>Chronicles</h1>
            </div>
            </a>
            <nav className="header-right">
                <ul>
                    <li>
                        <a href="#">Features</a>
                    </li>
                    <li>
                        <a href="/signup"><button>Sign Up</button></a>
                    </li>
                    <li>
                        <a href="/login"><button>Log In</button></a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;