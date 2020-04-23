/* eslint-disable max-len */
import * as React from 'react';
import Calculate from './components/Calculate';

const App: React.FC = () => (
  <div className="w-full max-w-m container mt-8">
    <div className="flex items-center bg-blue-500 text-black text-sm font-bold px-4 py-3" role="alert">
      <Calculate />
    </div>
  </div>
);

export default App;
