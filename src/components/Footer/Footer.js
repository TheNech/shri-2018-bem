import React from 'react';
import { cn } from '@bem-react/classname';

import './Footer.css';
import { Link } from '../Link/Link';

export const cnFooter = cn('Footer');

export class Footer extends React.Component {
    render() {
        return(
            <div className={cnFooter()}>
                <Link className={cnFooter('Link', { isFirst: true })} url='#'>Помощь</Link>
                <Link className={cnFooter('Link')} url='#'>Обратная связь</Link>
                <Link className={cnFooter('Link')} url='#'>Разработчикам</Link>
                <Link className={cnFooter('Link')} url='#'>Условия использования</Link>
                <Link className={cnFooter('Link')} url='./license.pdf'>Лицензия</Link>
                <span className={cnFooter('Company')}>© 2001–2017  ООО «Яндекс»</span>
            </div>
        );
    }
}
