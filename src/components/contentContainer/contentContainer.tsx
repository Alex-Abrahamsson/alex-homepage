import React from 'react';
import { BackgroundColorTypes } from '../../types';

import Style from './contentContainer.module.scss';

interface IContentContainerProps {
    children: React.ReactNode;
    backgroundColor?: BackgroundColorTypes;
}

export default function ContentContainer({ children, backgroundColor }: IContentContainerProps) {

    return (
        <div 
            className={Style.contentContainer}
            style={{ backgroundColor: backgroundColor ? backgroundColor : 'transparent' }}
        >
            {children}
        </div>
    );
}