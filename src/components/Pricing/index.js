import React, {Component} from 'react';
import Zoom               from 'react-reveal/Zoom';

import MyButton from '../utils/MyButton';

class Pricing extends Component {

  state = {
    prices   : ['2.5jt', '3.0jt', '4.0jt'],
    positions: ['Balcony', 'Back', 'VIP'],
    desc     : [
      "Aliquam id molestie mauris. Etiam quis luctus ante. Duis consequat urna vel ex sodales, interdum efficitur eros placerat.",
      "Duis eu bibendum ante. Sed eget nibh sit amet eros egestas vulputate. In hac habitasse platea dictumst. ",
      "Praesent eget ipsum augue. Etiam mattis congue tristique. Donec fermentum, dolor a rutrum vehicula, diam turpis rutrum urna.",
    ],
    link     : [
      'http://sales/balcony',
      'http://sales/medium',
      'http://sales/vip'
    ],
    delay    : [250, 0, 500]
  };

  showBoxes = () => (
    this.state.prices.map((box, i) => (
      <Zoom delay={this.state.delay[i]} key={i}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>Rp {this.state.prices[i]},-</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className="pricing_description">
              {this.state.desc[i]}
            </div>
            <div className="pricing_buttons">
              <MyButton text='Purchase' bck="#0058FF" color="white" link={this.state.link[i]}/>
            </div>
          </div>
        </div>
      </Zoom>
    ))
  );

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;