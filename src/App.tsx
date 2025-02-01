import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Costcheck } from './pages/Costcheck.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Authenticator } from "@aws-amplify/ui-react";

function App() {
  return (
    <BrowserRouter>
      <Authenticator>
        {({ signOut }) => (
          <>
            <div>
              <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
              <button onClick={signOut}>サインアウト</button><p></p>
              <Routes>
                <Route path="/" element={<Costcheck />} />
              </Routes>
              <button onClick={signOut}>コスト確認</button>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
            <p className="read-the-docs">
              Click on the Vite and React logos to learn more
            </p>
          </>
        )}
      </Authenticator>
    </BrowserRouter>
  )
}
export default App