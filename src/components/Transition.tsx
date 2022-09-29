import { FC, useContext, useEffect, useRef } from 'react';
import { TransitionContext } from 'contexts';

export const Transition: FC  = () => {
    const transitionElem = useRef<HTMLDivElement>(null);
    const { playTransition, resetTransition } = useContext(TransitionContext);
    // const transitionElemCurrent = transitionElem.current;
    useEffect(() => {
        if (playTransition) {
            setTimeout(() => resetTransition(false), 2000)
        }
    }, [playTransition, resetTransition])

    return (
        <div ref={transitionElem} className={playTransition ? 'screen-transition' :  ""}>
        </div>
    )
}