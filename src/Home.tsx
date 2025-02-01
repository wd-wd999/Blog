import './App.css';
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
            <button onClick={signOut}>サインアウト</button>
            <p></p>
            <button onClick={() => navigate('/Costcheck')}>コスト確認をする</button>
          </div>
        </>
      )}
    </Authenticator>
  );
}

export default Home;