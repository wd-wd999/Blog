import { useState, useCallback } from 'react';
import {
  Button,
  Heading,
  View,
  Text,
  Card,
  Flex,
  Badge,
  Loader,
  useTheme
} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { NavigationButtons } from '../components/NavigationButtons';
import '../App.css';

interface CostData {
  total_cost: string;
  period: string;
  top_services: Array<{
    service: string;
    cost: string;
  }>;
}

export const Costcheck = () => {
  const { tokens } = useTheme();
  const [cost, setCost] = useState<CostData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignOut = () => {
    // Handle sign out logic here
  };

  const fetchCost = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://ee60595noj.execute-api.ap-northeast-1.amazonaws.com/prod/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        mode: 'cors'
      });

      if (!response.ok) {
        throw new Error(`APIコールに失敗しました: ${response.status}`);
      }

      const data = await response.json();
      if (!data || !data.total_cost) {
        throw new Error('APIレスポンスが不正です');
      }

      setCost(data);

    } catch (err) {
      console.error('Error details:', err);
      setError(err instanceof Error ? err.message : '予期せぬエラーが発生しました');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <View className="container">
      <View className="page-header">
        <Heading level={2}>
          コスト確認
        </Heading>
      </View>
      <View className="content">
        <View padding={tokens.space.large}>
          <Heading level={1} marginBottom={tokens.space.medium}>
            AWS利用料金（過去30日間）
          </Heading>

          <Button
            variation="primary"
            isLoading={loading}
            loadingText="取得中..."
            onClick={fetchCost}
            marginBottom={tokens.space.large}
          >
            コストを取得
          </Button>

          {error && (
            <Text color={tokens.colors.red[60]} marginBottom={tokens.space.medium}>
              エラー: {error}
            </Text>
          )}

          {loading && (
            <Flex justifyContent="center">
              <Loader size="large" />
            </Flex>
          )}

          {cost && (
            <View>
              <Card variation="elevated">
                <Heading level={2}>
                  合計コスト: <Badge variation="info">{cost.total_cost}</Badge>
                </Heading>
                <Text marginTop={tokens.space.small}>期間: {cost.period}</Text>
              </Card>

              <Heading level={3} marginTop={tokens.space.large}>
                コストが高いサービス（Top 3）
              </Heading>
              <View marginTop={tokens.space.medium}>
                {cost.top_services.map((service, index) => (
                  <Card
                    key={index}
                    variation="outlined"
                    marginBottom={tokens.space.small}
                    padding={tokens.space.medium}
                  >
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text fontWeight={tokens.fontWeights.bold}>{service.service}</Text>
                      <Badge variation="warning">{service.cost}</Badge>
                    </Flex>
                  </Card>
                ))}
              </View>
            </View>
          )}
        </View>
      </View>
      <NavigationButtons onSignOut={handleSignOut} />
    </View>
  );
};