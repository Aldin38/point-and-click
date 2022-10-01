import { useState } from "react";

export const useGameTraversal = () => {
    const currentZone = () => {
        // return current zone
    }

    const currentArea = () => {
        // return current area
    };

    const avaliablePaths = () => {
    // return all available paths for the current area
    }

    const loadNewArea = () => {
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