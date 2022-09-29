import { FC } from 'react';
import { Transition } from './Transition';
import { TransitionContextProvider } from 'contexts/transition';
import { Button } from './Button';

export const GameScreen: FC = () => {
    return (
        <div className="game-screen">
            <TransitionContextProvider>
                <Transition />
                <Button />
            </TransitionContextProvider>
        </div>
    )
}