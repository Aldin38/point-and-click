import { FC } from 'react';
import { useGameTraversal } from 'hooks';

export const Scene: FC = () => {
    const { currentArea, avaliablePaths, loadNewArea, loadNewZone, shouldShowTheExit } = useGameTraversal();
    const { image: AreaImage } = currentArea();
    const { front, back, left, right } = avaliablePaths();
    const exit = shouldShowTheExit();

    return (
        <div className='scene'>
            <img className="scene__image" src={AreaImage} alt="current scene" />

            { front && <button className='scene__load-area-btn' onClick={() => loadNewArea(front)}> GO FORWARD MF</button> }
            { back && <button className='scene__load-area-btn' onClick={() => loadNewArea(back)}> GO BACK MF</button> }
            { left && <button className='scene__load-area-btn' onClick={() => loadNewArea(left)}> GO LEFT MF</button> }
            { right && <button className='scene__load-area-btn' onClick={() => loadNewArea(right)}> GO RIGHT MF</button> }

            {/* If on the startingZone show the previous/next zone button */}
            { exit && <button className='scene__load-area-btn' onClick={() => loadNewZone(exit)}> GO TO {exit} </button> }
        </div>
    );
}