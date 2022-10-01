import { FC } from 'react';
import { TransitionContextProvider } from 'contexts/transition';

// Components
import { Transition } from './Transition';
import { Scene } from './Scene';

export const GameScreen: FC = () => {
    return (
        <div className="game-screen">
            <TransitionContextProvider>
                <Scene />
                <Transition />
            </TransitionContextProvider>
        </div>
    )
}