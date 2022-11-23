import './Components.css';

export default function HeaderComponent({ score }) {
    return (
        <div className='header-component'>
            <h2>Chees-o-meter</h2>
            <div className='score'>
                <h2 id='cheese'>🧀</h2>
                <h2 id='counter'>x{score}</h2>
            </div>
        </div>
    );
}

