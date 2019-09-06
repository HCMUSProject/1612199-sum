import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className='container mt-5'>
      <h3 className='text-center mb-3'>Chương trình tính tổng</h3>
      <div className='row justify-content-center'>
        <div className='col col-md-10 col-lg-8 d-flex align-items-center calc-wrapper'>
          <div className="form-group input-field">
            <input type="number" className="form-control" name=""/>
          </div>
          <div>+</div>
          <div className="form-group input-field">
            <input type="number" className="form-control" name=""/>
          </div>
          <div>=</div>
          <div className="form-group input-field">
            <input type="number" className="form-control" name=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
