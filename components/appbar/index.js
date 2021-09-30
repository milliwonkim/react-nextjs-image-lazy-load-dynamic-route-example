import Link from 'next/link';
import React from 'react';

function Appbar() {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/' passHref>
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href='/todos' passHref>
                        <a>Todos</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about' passHref>
                        <a>About</a>
                    </Link>
                </li>
                <li>
                    <Link href='/cats' passHref>
                        <a>Cat Images</a>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Appbar;
