import React from 'react';
import { cn } from '@bem-react/classname';

import './Header.css'

import { Link } from '../Link/Link';
import { Logo } from '../Logo/Logo';

const cnHeader = cn('Header');
const cnNav = cn('Nav');

class Header extends React.Component {
    render() {
        return (
            <div className={cnHeader()}>
                <div className={cnHeader('Logo')}>
                    <Link url='#'><Logo /></Link>
                </div>
                <div className={cnHeader('Menu')}>
                    <nav classname={cnNav()}>
                        <ul>
                            <li><Link classname={cnNav('Item')}>События</Link></li>
                            <li><Link classname={cnNav('Item')}>Сводка</Link></li>
                            <li><Link classname={cnNav('Item')}>Устройства</Link></li>
                            <li><Link classname={cnNav('Item')}>Сценарии</Link></li>
                            <li><Link classname={cnNav('Item', {isActive: true})}>Видеонаблюдение</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;
