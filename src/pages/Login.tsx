import '../App.css'
import { Authenticator, translations } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { I18n } from "aws-amplify/utils"
import { Amplify } from "aws-amplify";
import { ResourcesConfig } from "@aws-amplify/core";
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  return (
    <Authenticator>
      {({ user }) => {
        if (user) {
          navigate('/Home');
          return <></>;
        }
        return <></>;
      }}
    </Authenticator>
  );
}

I18n.putVocabularies(translations);
I18n.setLanguage("ja");

export default Login;