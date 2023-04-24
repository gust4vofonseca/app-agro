import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container } from './styles';

import { ReactComponent as VisibleIcon } from '../../assets/icons/visibility.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type?: string;
  icon?: React.ComponentType<IconBaseProps>;
  iconError?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  type,
  icon: Icon,
  iconError: IconError,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isPasswordShadow, setIsPasswordShadow] = useState(false);

  const { fieldName, defaultValue, error, registerField } = useField(name);

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

  const tooglePasswordVisible = useCallback(() => {
    setIsPasswordShadow(!isPasswordShadow);
  }, [isPasswordShadow]);

  return (
    <Container
      isErrored={!!error}
      isFilled={isFilled}
      isFocused={isFocused}
      data-testid="input-container"
    >
      {error ? (
        <>{IconError && <IconError size={20} />}</>
      ) : (
        <>{Icon && <Icon size={20} />} </>
      )}
      <input
        name={name}
        type={type === 'password' && !isPasswordShadow ? 'password' : 'text'}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />

      {type === 'password' && (
        <button type="button" onClick={tooglePasswordVisible}>
          <VisibleIcon />
        </button>
      )}
    </Container>
  );
};

export default Input;
