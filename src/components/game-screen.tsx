import { FC } from 'react';
import { TransitionContextProvider } from 'contexts/transition';
import { GameData } from '../data';


// Components
import { Transition } from './Transition';
import { Button } from './Button';
import { Scene } from './Scene';


console.log(GameData)
const image = GameData.zones.office.areas.keypadOfficeEnterence.image

export const GameScreen: FC = () => {
    return (
        <div className="game-screen">
            <TransitionContextProvider>
                <Scene image={image} />
                <Transition />
                <Button />
            </TransitionContextProvider>
        </div>
    )
}