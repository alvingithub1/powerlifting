import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import ColorBox from './components/ColorBox'
import ColorBox2 from './components/ColorBox2'
import ColorBox3 from './components/ColorBox3'
import ColorBox4 from './components/ColorBox4'
import ColorBox5 from './components/ColorBox5'
import ColorBox6 from './components/ColorBox6'
import ColorBox7 from './components/ColorBox7'
import './App.css';
import Button from 'react-bootstrap/Button';


export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      kgTotal: 20,
      lbTotal: 44.0925,
      colorBoxArray: [],
      colorBoxArray2: [],
      colorBoxArray3: [],
      colorBoxArray4: [],
      colorBoxArray5: [],
      colorBoxArray6: [],
      colorBoxArray7: [],
    }
  }

  addColorBox = () => {
    let { colorBoxArray, kgTotal, lbTotal } = this.state
    this.setState({ 
      colorBoxArray: [...colorBoxArray, <ColorBox />],
      kgTotal: kgTotal + 50,
      lbTotal: lbTotal + 110.231
    })
  }

  removeColorBox = () => {
    let { colorBoxArray, kgTotal, lbTotal } = this.state

    if(this.state.colorBoxArray.length > 0) {
      colorBoxArray.pop()
      this.setState({ 
        colorBoxArray: colorBoxArray,
        kgTotal: kgTotal - 50,
        lbTotal: lbTotal - 110.231
        })
    }
  }

  addColorBox2 = () => {
    let { colorBoxArray2, kgTotal, lbTotal } = this.state
    this.setState({ 
      colorBoxArray2: [...colorBoxArray2, <ColorBox2 />],
      kgTotal: kgTotal + 40,
      lbTotal: lbTotal + 88.1849
    })
  }

  removeColorBox2 = () => {
    let { colorBoxArray2, kgTotal, lbTotal } = this.state

    if(this.state.colorBoxArray2.length > 0) {
      colorBoxArray2.pop()
      this.setState({ 
        colorBoxArray2: colorBoxArray2,
        kgTotal: kgTotal - 40,
        lbTotal: lbTotal - 88.1849
        })
    }
  }

  addColorBox3 = () => {
    let { colorBoxArray3, kgTotal, lbTotal } = this.state
    this.setState({ 
      colorBoxArray3: [...colorBoxArray3, <ColorBox3 />],
      kgTotal: kgTotal + 30,
      lbTotal: lbTotal + 66.1387
    })
  }

  removeColorBox3 = () => {
    let { colorBoxArray3, kgTotal, lbTotal } = this.state

    if(this.state.colorBoxArray3.length > 0) {
      colorBoxArray3.pop()
      this.setState({ 
        colorBoxArray3: colorBoxArray3,
        kgTotal: kgTotal - 30,
        lbTotal: lbTotal - 66.1387
        })
    }
  }

  addColorBox4 = () => {
    let { colorBoxArray4, kgTotal, lbTotal } = this.state
    this.setState({ 
      colorBoxArray4: [...colorBoxArray4, <ColorBox4 />],
      kgTotal: kgTotal + 20,
      lbTotal: lbTotal + 44.0925
    })
  }

  removeColorBox4 = () => {
    let { colorBoxArray4, kgTotal, lbTotal } = this.state

    if(this.state.colorBoxArray4.length > 0) {
      colorBoxArray4.pop()
      this.setState({ 
        colorBoxArray4: colorBoxArray4,
        kgTotal: kgTotal - 20,
        lbTotal: lbTotal - 44.0925
        })
    }
  }

  addColorBox5 = () => {
    let { colorBoxArray5, kgTotal, lbTotal } = this.state
    this.setState({ 
      colorBoxArray5: [...colorBoxArray5, <ColorBox5 />],
      kgTotal: kgTotal + 10,
      lbTotal: lbTotal + 22.0462
    })
  }

  removeColorBox5 = () => {
    let { colorBoxArray5, kgTotal, lbTotal } = this.state

    if(this.state.colorBoxArray5.length > 0) {
      colorBoxArray5.pop()
      this.setState({ 
        colorBoxArray5: colorBoxArray5,
        kgTotal: kgTotal - 10,
        lbTotal: lbTotal - 22.0462
        })
    }
  }

  addColorBox6 = () => {
    let { colorBoxArray6, kgTotal, lbTotal } = this.state
    this.setState({ 
      colorBoxArray6: [...colorBoxArray6, <ColorBox6 />],
      kgTotal: kgTotal + 5,
      lbTotal: lbTotal + 11.0231
    })
  }

  removeColorBox6 = () => {
    let { colorBoxArray6, kgTotal, lbTotal } = this.state

    if(this.state.colorBoxArray6.length > 0) {
      colorBoxArray6.pop()
      this.setState({ 
        colorBoxArray6: colorBoxArray6,
        kgTotal: kgTotal - 5,
        lbTotal: lbTotal - 11.0231
        })
    }
  }

  addColorBox7 = () => {
    let { colorBoxArray7, kgTotal, lbTotal } = this.state
    this.setState({ 
      colorBoxArray7: [...colorBoxArray7, <ColorBox7 />],
      kgTotal: kgTotal + 2.5,
      lbTotal: lbTotal + 5.51156
    })
  }

  removeColorBox7 = () => {
    let { colorBoxArray7, kgTotal, lbTotal } = this.state

    if(this.state.colorBoxArray7.length > 0) {
      colorBoxArray7.pop()
      this.setState({ 
        colorBoxArray7: colorBoxArray7,
        kgTotal: kgTotal - 2.5,
        lbTotal: lbTotal - 5.51156
        })
    }
  }

  reset = () => {
    this.setState({
      kgTotal: 20,
      lbTotal: 44.0925,
      colorBoxArray: [],
      colorBoxArray2: [],
      colorBoxArray3: [],
      colorBoxArray4: [],
      colorBoxArray5: [],
      colorBoxArray6: [],
      colorBoxArray7: [],
    })
  }

  render() {
    let { colorBoxArray, colorBoxArray2, colorBoxArray3, colorBoxArray4, colorBoxArray5, colorBoxArray6, colorBoxArray7 } = this.state
    return (
      <>
      
      <div className='backgroundImage' style={{ 
      backgroundImage: `url("https://cdn.wallpapersafari.com/9/19/gZkT1P.jpg")`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
      }}>

      <div id="title">Powerlifting Conversion</div>

      <div className='buttonList'>
        <div className='buttonPairs'>
          <Button className='buttonClick' variant="outline-danger" onClick ={ this.addColorBox }>+25</Button>
          <Button variant="outline-danger" onClick ={ this.removeColorBox }>-25</Button>
        </div>

        <div className='buttonPairs'>
        <Button variant="outline-primary" onClick ={ this.addColorBox2 }>+20</Button>
        <Button variant="outline-primary" onClick ={ this.removeColorBox2 }>-20</Button>
        </div>
        
        <div className='buttonPairs'>
        <Button variant="outline-warning" onClick ={ this.addColorBox3 }>+15</Button>
        <Button variant="outline-warning" onClick ={ this.removeColorBox3 }>-15</Button>
        </div>
        
        <div className='buttonPairs'>
        <Button variant="outline-dark" onClick ={ this.addColorBox4 }>+10</Button>
        <Button variant="outline-dark" onClick ={ this.removeColorBox4 }>-10</Button>
        </div>

        <div className='buttonPairs'>
        <Button variant="outline-dark" onClick ={ this.addColorBox5 }>+5</Button>
        <Button variant="outline-dark" onClick ={ this.removeColorBox5 }>-5</Button>
        </div>

        <div className='buttonPairs'>
        <Button variant="outline-dark" onClick ={ this.addColorBox6 }>+2.5</Button>
        <Button variant="outline-dark" onClick ={ this.removeColorBox6 }>-2.5</Button>
        </div>
        
        <div className='buttonPairs'>
        <Button variant="outline-dark" onClick ={ this.addColorBox7 }>+1.25</Button>
        <Button variant="outline-dark" onClick ={ this.removeColorBox7 }>-1.25</Button>
        </div>

      </div> {/* buttonList div */}
            
      <div className='bottomMenu'>
      <button onClick ={ this.reset }>Reset</button>

      <div className="conversionSection">
      <div id="kgTotal">kg total: {this.state.kgTotal}</div>
      <div id="lbTotal">lb total: {this.state.lbTotal}</div>
      </div>

    <div id="plateMenu">
      <div id="box-holder">
        { colorBoxArray }
      </div>

      <div id="box-holder">
        { colorBoxArray2 }
      </div>

      <div id="box-holder">
        { colorBoxArray3 }
      </div>

      <div id="box-holder">
        { colorBoxArray4 }
      </div>

      <div id="box-holder">
        { colorBoxArray5 }
      </div>
      
      <div id="box-holder">
        { colorBoxArray6 }
      </div>
      
      <div id="box-holder">
        { colorBoxArray7 }
      </div>
      </div> {/* bottomMenu div */}
    </div> {/* plateMenu div */}
    </div> {/* background image div */}
      </>
    )
  }
}

export default App