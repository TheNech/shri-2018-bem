import React from 'react';
import { cn } from '@bem-react/classname';

const cnLink = cn('Link');

export const Link = props => (
    <a className={cnLink()} href={props.url}>{props.children}</a>
);
