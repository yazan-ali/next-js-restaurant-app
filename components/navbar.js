import { useRef } from 'react';
import styles from '../styles/navbar.module.scss';
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

function Navbar() {

    const { data: session, status } = useSession();
    const checkRef = useRef();

    const closeNavbar = () => {
        checkRef.current.checked = false
    }

    return (
        <nav className={styles.navbar}>
            <div style={{ flexShrink: '1' }}>
                <label htmlFor="check" className={styles.checkBtn}>
                    <i className="fas fa-bars"></i>
                </label>
                <label className={styles.brand_name}>Pizza House</label>
            </div>
            <input ref={checkRef} type="checkbox" id="check" className={styles.check} />
            <ul style={{ flexGrow: '1' }}>
                <li onClick={closeNavbar}>
                    <Link href="/pizza">
                        <a>Pizza</a>
                    </Link>
                </li>
                <li onClick={closeNavbar}>
                    <Link href="/pasta">
                        <a>Pasta</a>
                    </Link>
                </li>
                <li onClick={closeNavbar}>
                    <Link href="/desserts">
                        <a>Desserts</a>
                    </Link>
                </li>
                <li onClick={closeNavbar}>
                    <Link href="/deals">
                        <a>Deals</a>
                    </Link>
                </li>

                <span className={styles.login_btn}>
                    {
                        status !== "authunticated" && !session && (
                            <>
                                <li>
                                    <Link href='/api/auth/signin'>
                                        <a onClick={e => {
                                            e.preventDefault;
                                            signIn()
                                        }}>Log In</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/register'>
                                        <a>Sign Up</a>
                                    </Link>
                                </li>
                            </>
                        )
                    }

                    {
                        session && status !== "unauthenticated" && (
                            <>
                                <li>
                                    <Link href='/cart'>
                                        <i className="fas fa-shopping-cart"></i>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/api/auth/signout'>
                                        <a onClick={e => {
                                            e.preventDefault;
                                            signOut()
                                        }}>LogOut</a>
                                    </Link>
                                </li>
                            </>
                        )
                    }

                </span>
            </ul>
        </nav>
    )
}

export default Navbar