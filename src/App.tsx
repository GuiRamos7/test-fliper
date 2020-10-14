import React from 'react';
import { Card } from 'components';

const data = {
  cdi: 3.45679,
  gain: 1833.23,
  total: 3200876,
  profitability: 2.76789,
  id: 2,
};

const App: React.FC = () => {
  return (
    <div>
      <Card
        cdi={data.cdi}
        gain={data.gain}
        total={data.total}
        profitability={data.profitability}
      />
    </div>
  );
};
export default App;
