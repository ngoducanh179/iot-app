import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
function App() {
  const [ppm, Setppm] = useState(0);
  useEffect(async () => {
    const res = await axios.get(
      'http://188.166.206.43/64OQlQhCGUF2TkazMwsPiw3m5QI20Ph1/get/V6'
    );

    await Setppm(res.data[0]);
  }, []);
  return (
    <div className='App'>
      <div>
        <h4>
          <h3>ppm :</h3>
          {ppm && ppm}
        </h4>
      </div>
    </div>
  );
}

export default App;
