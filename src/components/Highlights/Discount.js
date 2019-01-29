import React, {Component} from 'react';
import Fade               from 'react-reveal/Fade';
import Slide              from 'react-reveal/Slide';
import MyButton           from '../utils/MyButton';

class Discount extends Component {
  state = {
    discountStart: 0,
    discountEnd  : 20
  };

  porcentage = () => {
    if (this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.porcentage();
    }, 60);
  };

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade onReveal={() => this.porcentage()}>
            <div className="discount_porcentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Purchase Tickets before Jan 31st</h3>
              <p>Nullam sit amet consequat justo. Cras vitae dapibus neque, eu egestas dolor. Orci varius natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam luctus, magna a pulvinar
                dignissim, massa ex rhoncus neque.</p>
              <MyButton text="Purchase Ticket" bck="#0058FF" color="white" link="http://google.com"/>
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;