import React from 'react';
import { cn } from '@bem-react/classname';

import './VideoPage.css'

import { Header } from '../Header/Header';
import { Video } from '../Video/Video'

const cnVideoPage = cn('VideoPage');
const cnVideoContainer = cn('VideoContainer');

export default class VideoPage extends React.Component {
    render() {
        return(
            <div className={cnVideoPage()}>
                <Header className={cnVideoPage('Header')}/>
                <div className={cnVideoPage('Main')}>
                    <div className={cnVideoContainer()}>
                        <Video number={1}/>
                        <Video number={2}/>
                        <Video number={3}/>
                        <Video number={4}/>
                    </div>
                </div>
            </div>
        );
    }
}
