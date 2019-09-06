import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: {
        val: '0',
        isValid: true
      },
      num2: {
        val: '0',
        isValid: true
      },
      sum: '0',
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    const resultNum = {
      val: value,
      isValid: value !== '' && !isNaN(value)
    }

    this.setState({
      [name]: resultNum,
      sum: ''
    }, () => {
      const { num1, num2 } = this.state;

      if (num1.isValid && num2.isValid) {
        this.setState({
          sum: (parseInt(num1.val) + parseInt(num2.val)).toString(),
        })
      }
    })
  }

  render() {

    const invalidClass = 'is-invalid';

    return (
      <div className='container mt-5'>
        <h3 className='text-center mb-3'>Chương trình tính tổng</h3>
        <div className='row justify-content-center'>
          <div className='col col-md-10 col-lg-8 d-flex align-items-center calc-wrapper'>
            <div className="form-group input-field">
              <input 
                autoFocus 
                type="text" 
                className={`form-control${this.state.num1.isValid ? '' : ' ' + invalidClass}`} 
                name="num1" 
                value={this.state.num1.val} 
                onChange={(event) => this.handleChange(event)} />
            </div>
            <div>+</div>
            <div className="form-group input-field">
            <input 
                type="text" 
                className={`form-control${this.state.num2.isValid ? '' : ' ' + invalidClass}`} 
                name="num2" 
                value={this.state.num2.val} 
                onChange={(event) => this.handleChange(event)} />
            </div>
            <div>=</div>
            <div className="form-group input-field">
              <input disabled type="text" className="form-control" name="sum" value={this.state.sum} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App;
