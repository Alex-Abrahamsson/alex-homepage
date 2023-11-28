import React, { ReactNode } from 'react';

import Style from './aboutText.module.scss';
import IsMobileLayout from '../../hooks/isMobileLayout';

interface IAboutText {
    beforeO?: string;
    afterO?: string;
    onClick?: () => void;
    expanded?: boolean;
    hiddenPage?: ReactNode;
    oWidth?: string;
    oHeight?: string;
    mobileText?: string;
}

export default function AboutText({
    beforeO,
    afterO,
    onClick,
    expanded,
    hiddenPage,
    oHeight,
    oWidth,
    mobileText,
}: IAboutText) {
    const isMobile = IsMobileLayout();

    if (isMobile) {
        return (
            <button className={Style.MobileMainContainer} onClick={onClick}>
                <h1>{mobileText}</h1>
                <div 
                    className={!expanded ? Style.MobileExpandingContainer : Style.MobileExpandingContainerExpanded}
                    style={expanded ? { height: `${oHeight}` } : {}}
                >
                    <div className={Style.MobileExpandedText}>{hiddenPage}</div>
                </div>
            </button>
        );
    }

    return (
        <div className={Style.MainContainer}>
            <h1>{beforeO}</h1>
            <div
                className={!expanded ? Style.TheO : Style.TheOExpanded}
                style={
                    expanded
                        ? { height: `${oHeight}`, width: `${oWidth}` }
                        : {}
                }
                onClick={onClick}
            >
                {expanded && (
                    <div className={Style.ExpandedText}>{hiddenPage}</div>
                )}
            </div>
            <h1>{afterO}</h1>
        </div>
    );
}
