import { View, Button } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export const NavigationButtons = ({ showSignOut = false, onSignOut }: { showSignOut?: boolean, onSignOut: () => void }) => {
  const navigate = useNavigate();

  return (
    <View className="navigation-buttons">
      <View className="nav-buttons-left">
        <Button onClick={() => navigate(-1)} className="nav-button">
          ひとつ戻る
        </Button>
      </View>
      <View className="nav-buttons-center">
        <Button onClick={() => navigate('/Home')} className="nav-button">
          ホームに戻る
        </Button>
      </View>
      {showSignOut && (
        <View className="nav-buttons-right">
          <Button onClick={onSignOut} className="nav-button">
            サインアウト
          </Button>
        </View>
      )}
    </View>
  );
};