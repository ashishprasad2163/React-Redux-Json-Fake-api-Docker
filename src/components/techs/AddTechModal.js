import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';
import PropTypes from 'prop-types';

const AddTechModal = ({ addTech }) => {
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter a full name' });
    } else {
      addTech({
        firstName,
        lastName,
      });
      M.toast({ html: 'Technician added' });
      //clear fields
      setfirstName('');
      setlastName('');
    }
  };
  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>Add new Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
        <div className='modal-footer'>
          <a
            href='#!'
            onClick={onSubmit}
            className='modal-close waves-effect blue waves-light btn'
          >
            Add
          </a>
        </div>
      </div>
    </div>
  );
};
AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

export default connect(null, { addTech })(AddTechModal);
