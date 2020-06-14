import React from 'react';
import PropTypes from 'prop-types';

function Error({mensaje}) {
    return (
        <React.Fragment>
            <p className='alert alert-danger error'>{mensaje}</p>
        </React.Fragment>
    );
}
Error.propTypes={
    mensaje:PropTypes.string.isRequired
}
export default Error;