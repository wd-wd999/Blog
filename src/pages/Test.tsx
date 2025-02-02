import '../styles/App.css';
import '../styles/Test.css';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from "@aws-amplify/ui-react";
import { useState } from 'react';

function Test() {
  const navigate = useNavigate();
  const [splitRatio, setSplitRatio] = useState(50); // 初期比率は50%

interface MouseEvent {
    clientY: number;
}

    const handleMouseDown = (event: MouseEvent): void => {
        const startY = event.clientY;
        const startRatio = splitRatio;

        const handleMouseMove = (moveEvent: MouseEvent): void => {
            const deltaY = moveEvent.clientY - startY;
            const newRatio = Math.max(10, Math.min(90, startRatio + (deltaY / window.innerHeight) * 100));
            setSplitRatio(newRatio);
        };

        const handleMouseUp = (): void => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);
    };

  return (
    <Authenticator>
      {() => (
        <div className="split-container">
          <div className="top-panel" style={{ height: `${splitRatio}%` }}>
            <h1>アプリケーション</h1>
          </div>
          <div className="divider" onMouseDown={handleMouseDown} />
          <div className="bottom-panel" style={{ height: `${100 - splitRatio}%` }}>
            <div className="card">
              <button onClick={() => navigate('/home')}>ホームに戻る</button>
            </div>
          </div>
        </div>
      )}
    </Authenticator>
  );
}

export default Test;
