import React from 'react';
import { cn } from '@bem-react/classname';
import { RegistryConsumer } from '@bem-react/di';

import { cnVideo } from '../../Video/Video';

export const cnContainer = cn('Container');

export class Container extends React.Component {
    render() {
        return(
            <RegistryConsumer>
                {registries => {
                    const platform = registries['platform'];
                    const Video = platform.get(cnVideo());

                    return(
                        <div className={cnContainer()}>
                            <Video number={1}/>
                            <Video number={2}/>
                            <Video number={3}/>
                            <Video number={4}/>
                        </div>
                    );
                }}
            </RegistryConsumer>
        );
    }
} 
