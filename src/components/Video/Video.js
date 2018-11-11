import React from 'react';
import { cn } from '@bem-react/classname';

import './Video.css'

const cnVideo = cn('Video');

export class Video extends React.Component {
    render() {
        return (
            <div className={cnVideo()}>
                <video id={`video-${this.props.number}`} muted autoPlay></video>
                <div className={cnVideo('Controls')}>
                    <div className={cnVideo('Controls_range')}>
                        <label>Яркость: </label>
                        <input type='range' className='video-bright' min='0' max='200' defaultValue='100' />
                    </div>
                    <div className={cnVideo('Controls_range')}>
                        <label>Контрастность: </label>
                        <input type='range' className='video-contrast' min='0' max='200' defaultValue='100' />
                    </div>
                    <div className={cnVideo('Volume')}>
                        <div className={cnVideo('Volume_line')}></div>
                    </div>
                </div>
                <button className={cnVideo('Back')}>Все камеры</button>
            </div>
        );
    }
}
