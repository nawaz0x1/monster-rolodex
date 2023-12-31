import { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { onChangeHandler, placeholder, className } = this.props;
    return (
      <input
        type="search"
        className={className}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
