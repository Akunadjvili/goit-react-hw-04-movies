import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css';

class Searchbar extends PureComponent {
  static defaultProps = { onSubmit: () => {} };
  static propTypes = { onSubmit: PropTypes.func };
  state = {
    query: this.props.init || '',
  };

  updateFields = ({ currentTarget: { name, value } }) => {
    this.setState(state => {
      return { [name]: value };
    });
  };

  onSubmitHandler = event => {
    const { onSubmit } = this.props;
    const { query } = this.state;
    event.preventDefault();
    onSubmit(query);
  };

  render() {
    const { query } = this.state;

    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.onSubmitHandler}>
          <button type="submit" className={styles['SearchForm-button']}>
            <span className={styles['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={styles['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            name="query"
            value={query}
            onChange={this.updateFields}
            placeholder="Search movies"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
