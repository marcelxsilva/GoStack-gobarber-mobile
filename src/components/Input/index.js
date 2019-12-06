import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Container, TInput } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Input({ style, icon, ...rest }, ref) {
  return (
    <Container style={style}>
      {icon && <Icon name={icon} size={20} color="rgba(255,255,255, 0.6)" />}
      <TInput  {...rest} ref={ref} />
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([[PropTypes.object, PropTypes.array]])
}
Input.defaultProps = { style: {}, icon: null, }
export default forwardRef(Input);