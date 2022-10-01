import { FC } from 'react';

interface SceneProps {
    image: string
}

export const Scene: FC<SceneProps> = ({ image }) => {
    return (
        <div className='scene'>
            <img className="scene__image" src={image} alt="current scene" />
        </div>
    );
}