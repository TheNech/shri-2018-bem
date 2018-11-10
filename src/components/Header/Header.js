import React from 'react';
import { cn } from '@bem-react/classname';

import './Header.css'

import { Link } from '../Link/Link';
import { Logo } from '../Logo/Logo';

const cnHeader = cn('Header');
const cnNav = cn('Nav');

export class Header extends React.Component {
    render() {
        return (
            <div className={cnHeader(null, [this.props.className])}>
                <div className={cnHeader('Logo')}>
                    <Link url='#'><Logo /></Link>
                </div>
                <div className={cnHeader('Menu')}>
                    <nav className={cnNav()}>
                        <ul>
                            <li><Link className={cnNav('Item')}>События</Link></li>
                            <li><Link className={cnNav('Item')}>Сводка</Link></li>
                            <li><Link className={cnNav('Item')}>Устройства</Link></li>
                            <li><Link className={cnNav('Item')}>Сценарии</Link></li>
                            <li><Link className={cnNav('Item', {isActive: true})}>Видеонаблюдение</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}
