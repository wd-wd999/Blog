import '../styles/App.css';
import { useNavigate } from 'react-router-dom';
import { Authenticator } from "@aws-amplify/ui-react";
import CampImage from '../assets/Camp.png'; // 画像をimport

function Test() {
  const navigate = useNavigate();

  return (
    <Authenticator>
      {() => (
        <div style={{ 
          backgroundImage: `url(${CampImage})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          color: 'white'
        }}>
          <h1>アプリケーション</h1>
          <div className="card">
            <button onClick={() => navigate('/home')}>ホームに戻る</button>
          </div>
        </div>
      )}
    </Authenticator>
  );
}

export default Test;
