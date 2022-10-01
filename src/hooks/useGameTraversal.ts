import { useState, useContext } from "react";
import { GameData, savedGameData } from '../data';
import { TransitionContext } from 'contexts'


type connected = "left" | 'right' | 'front' | 'back'

interface AreaProperties {
    image: string,
    connected: Record<connected, string | null>
}

interface GameZones {
    office: Record<any, any>,
}

const gameZones: GameZones = GameData.zones


export const useGameTraversal = () => {
    const [zone] = useState(savedGameData);
    const [area, setArea] = useState(gameZones[savedGameData as keyof GameZones]?.startingArea);
    
    const { resetTransition } = useContext(TransitionContext);

    const currentZone = () => {
        // return current zone
        return zone; // this works for now but it's broken kinda
    }

    const currentArea = (): AreaProperties => {
        // return current area
        return gameZones[zone as keyof GameZones].areas[area];
    };

    const avaliablePaths = () => {
        const paths = currentArea().connected;
    // return all available paths for the current area
        return paths
    }

    const loadNewArea = (area: string) => {
        console.log('loading area... ' + area);
        resetTransition(true);
        setTimeout(() => setArea(area), 500);
        // once the path is clicked,
        // we handle the path redirect (loading screen, transition, soundEffects) here

        // IMPORTANT:
        // if there are requirements, and the user doesn't have them in their inventory
        // then return a message in the chat saying what item is missing to procede to the next area
    }

    return {
        currentZone,
        currentArea,
        avaliablePaths,
        loadNewArea
    }
}