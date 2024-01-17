import Link from "next/link";

export default function Header() {
    return (
        <header id="header" role="banner">
            <div className='header__wrap'>
                <div className='left'>
                    <h1 className='logo'>
                        <Link href="/">Hun`s blog</Link>
                    </h1>
                    <nav className='nav'>
                        <ul>
                            <li>
                                <Link href="/blogList">Blog</Link>
                            </li>
                            <li>
                                <Link href="/notice">Notice</Link>
                            </li>
                            <li>
                                <Link href="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='right'>
                    <ul>
                        <li><Link href="/login">Login</Link></li>
                        <li><Link href="/register">Join</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}