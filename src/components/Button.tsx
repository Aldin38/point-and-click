import { FC, useContext } from 'react';
import { TransitionContext } from 'contexts'

export const Button: FC = () => {
    const { resetTransition } = useContext(TransitionContext);

    return(
        <button className='transition-button' onClick={() => resetTransition(true)}>Transition</button>
    )
}