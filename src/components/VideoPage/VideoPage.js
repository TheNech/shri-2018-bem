import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';
import Hls from 'hls.js';

import './VideoPage.css'

import { cnHeader } from '../Header/Header';
import { cnVideo } from '../Video/Video'
import { Footer } from '../Footer/Footer';

const cnVideoPage = cn('VideoPage');
const cnVideoContainer = cn('VideoContainer');

export default class VideoPage extends React.Component {
    render() {
        return (
            <RegistryConsumer>
                {registries => {
                    const platform = registries['platform'];
                    const Header = platform.get(cnHeader());
                    const Video = platform.get(cnVideo());
                    
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
                            <Footer className={cnVideoPage('Footer')}/>
                        </div>
                    );
                }}
            </RegistryConsumer>
        );
    }

    componentDidMount() {
        this.videoScript();
    }

    videoScript() {
        this.initVideo(
            document.getElementById('video-1'),
            'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fsosed%2Fmaster.m3u8'
        );
        
        this.initVideo(
            document.getElementById('video-2'),
            'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fcat%2Fmaster.m3u8'
        );
        
        this.initVideo(
            document.getElementById('video-3'),
            'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fdog%2Fmaster.m3u8'
        );
        
        this.initVideo(
            document.getElementById('video-4'),
            'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fhall%2Fmaster.m3u8'
        );

        const allVideos = document.querySelectorAll('video');

        // Анализатор звука
        const ctx = new(window.AudioContext || window.webkitAudioContext)();
        const analyser = ctx.createAnalyser();
        const processor = ctx.createScriptProcessor(2048, 1, 1);
        let data = new Uint8Array(analyser.frequencyBinCount);
        analyser.fftSize = 512;
        analyser.connect(ctx.destination);
        processor.connect(ctx.destination);

        let sourcesStore = {};
        allVideos.forEach(element => {
            sourcesStore[element.id] = ctx.createMediaElementSource(element);
            sourcesStore[element.id].connect(analyser);
        });

        let video = null;

        processor.addEventListener('audioprocess', () => {
            analyser.getByteFrequencyData(data);

            if(video) {
                video.parentElement.querySelector('.Video-Volume_line').style.width = getMaxOfArray(data) + 'px';
            }
        });

        function getMaxOfArray(numArray) {
            return Math.max.apply(null, numArray);
        }

        // Развертывание видео
        allVideos.forEach((element) => {
            element.addEventListener('click', (e) => {
                const mainBlock = document.querySelector('.VideoPage-Main');
                const mainBlockStyle = getComputedStyle(mainBlock, null);
                const mainHeight = parseInt(mainBlockStyle.getPropertyValue('height'));
                console.log('Main height:', mainHeight);

                const parrent = e.target.parentElement;
                
                parrent.style.height = mainHeight + 'px';
                parrent.classList.add('Video_full');

                e.target.muted = false;
                video = e.target;
            });
        });

        // Массивы инпутов
        const allBrightInputs = document.querySelectorAll('.video-bright');
        const allContrastInputs = document.querySelectorAll('.video-contrast');

        // Фильтры видео
        let videoFilters = [];
        for (let i = 0; i < allVideos.length; i++) {
            videoFilters.push({
                bright: 100,
                contrast: 100
            });
        }

        // Изменение яркости и контрастности
        for (let i = 0; i < allVideos.length; i++) {
            // Яркость
            allBrightInputs[i].addEventListener('input', (e) => {
                videoFilters[i].bright = e.target.value;
                setFilter(i);
            });

            // Контрастность
            allContrastInputs[i].addEventListener('input', (e) => {
                videoFilters[i].contrast = e.target.value;
                setFilter(i);
            });
        }

        function setFilter(video) {
            const bright = videoFilters[video].bright;
            const contrast = videoFilters[video].contrast;
            allVideos[video].style.filter = `brightness(${bright || 100}%) contrast(${contrast || 100}%)`;
        }

        // Обработка кнопки возврата к превью
        const buttonsBack = document.querySelectorAll('.Video-Back');
        buttonsBack.forEach((element) => {
            element.addEventListener('click', (e) => {
                const parrent = e.target.parentElement;
                parrent.classList.remove('Video_full');
                parrent.style.height = '';
                parrent.style.width = '';
                parrent.querySelector('video').muted = true;
            })
        });
    }

    initVideo(video, url) {
        if (Hls.isSupported()) {
            var hls = new Hls();
            hls.loadSource(url);
            hls.attachMedia(video);
            hls.on(Hls.Events.MANIFEST_PARSED, function () {
                video.play();
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = url;
            video.addEventListener('loadedmetadata', function () {
                video.play();
            });
        }
    }
}
