import '../App.css'
import { Authenticator } from '@aws-amplify/ui-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CostData {
  total_cost: number;
  period: string;
  top_services: Array<{
    service: string;
    cost: number;
  }>;
}

const Costcheck = () => {
  const [costData, setCostData] = useState<CostData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const fetchCostData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://ee60595noj.execute-api.ap-northeast-1.amazonaws.com/prod/');
      const data = await response.json();
      setCostData(data);
    } catch (err) {
      setError('データの取得に失敗しました');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Authenticator>
      {({ signOut }) => (
        <>
          <h1>コストを確認する</h1>
          <div className="card">
            <button onClick={fetchCostData}>APIを実行</button>
            {loading && <p>読み込み中...</p>}
            {error && <p>{error}</p>}
            {costData && (
              <div>
                <h2>総コスト: {costData.total_cost}</h2>
                <p>期間: {costData.period}</p>
                <h3>トップサービス</h3>
                <ul>
                  {costData.top_services.map((service, index) => (
                    <li key={index}>
                      {service.service}: {service.cost}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <p></p>
          <button onClick={() => navigate('/Home')}>ホームに戻る</button>
          <p></p>
          <button onClick={signOut}>サインアウト</button>
        </>
      )}
    </Authenticator>
  );
};

export default Costcheck;