import React, { Component } from 'react';
import './EditGuest.css';

class EditGuest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.guest
    }
    this.update = this.update.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  update() {
    // update guest name function
    // this.setState({
    //   guests:
    // })
    this.props.hide();
  }




  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <input
            className="modal-input"
            value={this.state.text}
            onChange={this.handleInputChange}/>
          <button
            type=""
            className="modal-btn"
            onClick={this.update}  >Update</button>
          <button
            onClick={this.props.hide}
            type=""
            className="modal-btn">Cancel</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  guests: this.guests
}

export default EditGuest;
// export default connect(mapStateToProps)(EditGuest);
