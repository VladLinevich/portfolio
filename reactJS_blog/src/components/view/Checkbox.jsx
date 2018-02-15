import React from 'react'
import PropTypes from 'prop-types'

class Checkbox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isCkeck: this.props.check,
    };

    this.toogle = this.toogle.bind(this);
  }

  toogle(event) {

    let isCheck = event.target.checked;

    this.setState({
      isCkeck: isCheck
    });
    
    this.props.onChange(isCheck);
  }

  render() {
    return (
      <div>
        <label>
          {this.props.title}
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isCkeck}
                onChange={this.toogle} />
        </label>
      </div>
    );
  }

}

Checkbox.propTypes = {
  isCange: PropTypes.bool,
  title: PropTypes.string,
  onChange: PropTypes.func
}

export default Checkbox