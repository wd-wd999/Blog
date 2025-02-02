import '../styles/App.css';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from "@aws-amplify/ui-react";

function Test() {
  const navigate = useNavigate();

  return (
    <Authenticator>
      {() => (
        <>
          <h1>アプリケーション</h1>
          <div className="card">
            <button onClick={() => navigate('/home')}>ホームに戻る</button>
          </div>
        </>
      )}
    </Authenticator>
  );
}

export default Test;
