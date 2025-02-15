import './styles/App.css';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from "@aws-amplify/ui-react";

function Home() {
  const navigate = useNavigate();

  return (
    <Authenticator>
      {({ signOut }) => (
        <>
          <h1>アプリケーション</h1>
          <div className="card">
            <button onClick={() => navigate('/Costcheck')}>コスト確認をする</button>
            <p></p>
            <button onClick={() => navigate('/Game')}>🤖ゲームをする🎮</button>
            <p></p>
            <button onClick={() => navigate('/Test')}>⛺️キャンプ場に行く🔥</button>
            <p></p>
            <button onClick={signOut}>サインアウト</button>
          </div>
        </>
      )}
    </Authenticator>
  );
}

export default Home;