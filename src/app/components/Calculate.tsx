/* eslint-disable max-len */
import * as React from 'react';

const App: React.FC = () => (
  <div className="w-full max-w-m container mt-8">
    <form action="">
      <input className="bg-gray-100" type="number" placeholder="Items" />
      <input type="number" placeholder="500$" />
      <select
    //   value={this.state.value}
    //   onChange={this.handleActionChange}
        id="action"
      >
        <option value="UT">UT</option>
        <option value="NV">NV</option>
        <option value="TX">TX</option>
        <option value="AL">AL</option>
        <option value="CA">CA</option>
      </select>
      <h1>summa</h1>
    </form>

  </div>
);

export default App;