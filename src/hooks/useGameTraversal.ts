import { useState, useContext, useCallback } from "react";
import { GameData, savedGameData } from '../data';
import { TransitionContext } from 'contexts'

type connected = "left" | 'right' | 'front' | 'back'

interface AreaProperties {
    image: string,
    connected: Record<connected, string | null>
}

interface GameZones {
    office: Record<any, any>,
    apartmantNight: Record<any, any>,
}

const gameZones: GameZones = GameData.zones

export const useGameTraversal = () => {
    const [startingArea, setStartingArea] = useState(gameZones[savedGameData as keyof GameZones]?.startingArea);
    const [exit, setExit] = useState(gameZones[savedGameData as keyof GameZones]?.exit);
    const [zone, setZone] = useState(savedGameData);
    const [area, setArea] = useState(startingArea);
    
    const { resetTransition } = useContext(TransitionContext);

    const currentZone = () => {
        return zone;
    }

    const currentArea = useCallback((): AreaProperties => {
        // This seems like a hack around, I should look for a better solution.
        const newArea = !Object.keys(gameZones[zone as keyof GameZones].areas).includes(area) ? startingArea : area

        return gameZones[zone as keyof GameZones].areas[newArea];
    }, [area, startingArea, zone]);

    const avaliablePaths = useCallback(() => {
        const paths = currentArea().connected;
        // return all available paths for the current area
        return paths
    }, [currentArea])

    const loadNewArea = useCallback((area: string) => {
        resetTransition(true);
        setTimeout(() => {
            setArea(area);
        }, 500);
        // once the path is clicked,
        // we handle the path redirect (loading screen, transition, soundEffects) here

        // IMPORTANT:
        // if there are requirements, and the user doesn't have them in their inventory
        // then return a message in the chat saying what item is missing to procede to the next area
    }, [resetTransition])

    const loadNewZone = useCallback((zone: string) => {
        const newStartingArea = gameZones[zone as keyof GameZones]?.startingArea;
        const newExit = gameZones[zone as keyof GameZones]?.exit;

        setZone(zone);
        setStartingArea(newStartingArea);
        loadNewArea(newStartingArea);
        setExit(newExit);
    }, [loadNewArea])

    const shouldShowTheExit = useCallback(() => {
        console.log(area, startingArea, exit, 'all values should be true')
        if (area === startingArea && exit) {
            return exit
        } 
    }, [area, exit, startingArea])

    return {
        currentZone,
        currentArea,
        avaliablePaths,
        loadNewArea,
        shouldShowTheExit,
        loadNewZone
    }
}