import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';
import PropTypes from 'prop-types';

import { Container, Error } from './styles';

const Input = ({
  name,
  containerStyle = {},
  icon: Icon = false,
  ...props
}) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const {
    fieldName, defaultValue, error, registerField,
  } = useField(name);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container
      style={containerStyle}
      isErrored={!!error}
      isFocused={isFocused}
      isFilled={isFilled}
    >
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...props}
      />

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
  ]),
  icon: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.bool,
    PropTypes.elementType,
  ]),

};

Input.defaultProps = {
  containerStyle: {},
  icon: false,
};

export default Input;
