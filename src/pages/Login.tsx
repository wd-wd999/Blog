import { Authenticator, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import '../App.css'
import Home from '../App.tsx'
import { I18n } from "aws-amplify/utils"
import { Amplify } from "aws-amplify";
import { ResourcesConfig } from "@aws-amplify/core";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const userPoolClientId = import.meta.env.VITE_REACT_APP_USER_POOL_CLIENT_ID;
const userPoolId = import.meta.env.VITE_REACT_APP_USER_POOL_ID;
const awsConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolClientId: userPoolClientId,
      userPoolId: userPoolId,
    },
  },
};
Amplify.configure(awsConfig);

function Login() {
  return (
    <BrowserRouter>
      <Authenticator>
        {({ user }) => (
          <main>
            {user && (
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            )}
          </main>
        )}
      </Authenticator>
    </BrowserRouter>
  );
}

I18n.putVocabularies(translations)
I18n.setLanguage("ja")

export default Login;