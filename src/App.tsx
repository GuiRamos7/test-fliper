import React from 'react';
import { useQuery } from '@apollo/client';
import { ALL_WEALTH_SUMARY } from 'services/queries/wealth';
import { Card, Text } from 'components';
import client from 'api/client';

interface IwealthSummaryData {
  id: number;
  cdi: number;
  gain: number;
  total: number;
  profitability: number;
}

const App: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_WEALTH_SUMARY, {
    variables: { limit: 10 },
  });

  const handleDelete = (): void => {
    client.writeQuery({
      query: ALL_WEALTH_SUMARY,
      variables: { limit: 10 },
      data: { wealthSummary: [] },
    });
  };

  if (loading) {
    return <Card loading cdi={0} gain={0} total={0} profitability={0} />;
  }

  if (error) {
    return (
      <Text tag="h1" color="#3B5CB8" fontSize={23} fontWeight={700}>
        Ops. Não foi possível encontrar seus dados :(
      </Text>
    );
  }

  return (
    <div>
      {data &&
        data.wealthSummary.map((d: IwealthSummaryData) => (
          <Card
            key={d.id}
            cdi={d.cdi}
            gain={d.gain}
            total={d.total}
            profitability={d.profitability}
            onClick={handleDelete}
          />
        ))}
    </div>
  );
};
export default App;
