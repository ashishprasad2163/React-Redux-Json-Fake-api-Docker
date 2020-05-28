import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import LogItem from './LogItem';
import PropTypes from 'prop-types';
import Preloader from '../layout/Preloader';
import { getLogs } from '../../actions/logActions';

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading || logs === null) {
    return (
      <h4>
        <Preloader />
      </h4>
    );
  }
  return (
    <ul className='collection with-header'>
      <li className='collection-header'>
        <h4 className='center'> Systems Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className='center'>Nologs to show </p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  log: state.log,
});
export default connect(mapStateToProps, { getLogs })(Logs);
