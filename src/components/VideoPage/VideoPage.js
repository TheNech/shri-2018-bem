import React from 'react';
import { cn } from '@bem-react/classname';

import './VideoPage.css'

import { Header } from '../Header/Header';

const cnVideoPage = cn('VideoPage');
const cnVideoContainer = cn('VideoContainer');

export default class VideoPage extends React.Component {
    render() {
        return(
            <div className={cnVideoPage()}>
                <Header className={cnVideoPage('Header')}/>
                <div className={cnVideoPage('Main')}>
                    <div className={cnVideoContainer()}>
                        
                    </div>
                </div>
            </div>
        );
    }
}
