import React, { createContext, FC, useState } from "react";

interface TransitionContextState {
    playTransition: boolean,
    resetTransition: (val: boolean) => void | undefined | boolean;
}

export const TransitionContextInitialState: TransitionContextState = {
    playTransition: false,
    resetTransition: () => undefined,
};

export const TransitionContext = createContext(TransitionContextInitialState);

export const TransitionContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [playTransition, setPlayTransition] = useState(false);

    const resetTransition = (val: boolean) => {
        setPlayTransition(val)
    }

    return (
        <TransitionContext.Provider value={{playTransition, resetTransition}} >
            {children}
        </TransitionContext.Provider>
    )
}

