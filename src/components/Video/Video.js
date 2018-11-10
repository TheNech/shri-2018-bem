import React from 'react';
import { cn } from '@bem-react/classname';

import './Video.css'

const cnVideo = cn('Video');

export default class Video extends React.Component {
    render() {
        return (
            <div className={cnVideo()}>
                <video id={`video-${this.props.number}`} muted autoplay></video>
                <div className={cnVideo('Controls')}>
                    <div className={cnVideo('Controls_range')}>
                        <label>Яркость: </label>
                        <input type="range" class="video-bright" min="0" max="200" />
                    </div>
                    <div className={cnVideo('Controls_range')}>
                        <label>Контрастность: </label>
                        <input type="range" class="video-contrast" min="0" max="200" />
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
