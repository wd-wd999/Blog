import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Game = () => {
  const [score, setScore] = useState(0);
  const [molePosition, setMolePosition] = useState(Math.floor(Math.random() * 9));
  const [gameOver, setGameOver] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const navigate = useNavigate();

  useEffect(() => {
    const moleTimer = setInterval(() => {
      setMolePosition(Math.floor(Math.random() * 9));
    }, 1000);

    const countdownTimer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(moleTimer);
      clearInterval(countdownTimer);
      setGameOver(true);
    }, 30000); // 30秒でゲーム終了

    return () => {
      clearInterval(moleTimer);
      clearInterval(countdownTimer);
    };
  }, []);

  const handleClick = (index: number) => {
    if (index === molePosition) {
      setScore(score + 1);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>モグラ叩きゲーム</h1>
      <p>モグラをクリックしてスコアを増やしましょう！</p>
      <h2>残り時間: {timeLeft}秒</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 100px)', gap: '10px', justifyContent: 'center' }}>
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: '100px',
              height: '100px',
              backgroundColor: index === molePosition ? 'brown' : 'lightgrey',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '24px',
            }}
          >
            {index === molePosition && 'ʕ•ᴥ•ʔ'}
          </div>
        ))}
      </div>
      <h2>スコア: {score}</h2>
      {gameOver && <h2>ゲームオーバー！</h2>}
      <button onClick={() => navigate('/home')}>ホームに戻る</button>
    </div>
  );
};

export default Game;