import React, { useCallback, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { ALL_WEALTH_SUMARY } from 'querys/wealth';
import { Card } from 'components';

const data = {
  cdi: 3.45679,
  gain: 1833.23,
  total: 3200876,
  profitability: 2.76789,
  id: 2,
};

const App: React.FC = () => {
  const { loading, error, data } = useQuery(ALL_WEALTH_SUMARY, {
    variables: { limit: 10 },
  });

  if (loading) {
    return <div>Loading..</div>;
  }
  return (
    <div>
      {data &&
        data.wealthSummary.map((d: any) => (
          <Card
            cdi={d.cdi}
            gain={d.gain}
            total={d.total}
            profitability={d.profitability}
          />
        ))}
      {/* */}
    </div>
  );
};
export default App;
