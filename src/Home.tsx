import './App.css'
import { Link } from 'react-router-dom';
import { Authenticator } from "@aws-amplify/ui-react";

function Home() {
  return (
    <Authenticator>
      {({ signOut }) => (
        <>
          <h1>アプリケーション</h1>
          <div className="card">
            <button onClick={signOut}>サインアウト</button>
            <p></p>
            <Link to="/Costcheck">
              <button>コスト確認をする</button>
            </Link>
          </div>
        </>
      )}
    </Authenticator>
  )
}
export default Home