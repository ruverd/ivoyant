import React, { useCallback, useRef } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import getValidationErros from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import { Container } from './styles';

import Logo from '../../assets/logo.png';

const SignIn = () => {
  const formRef = useRef(null);
  const history = useHistory();
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string().email().required(),
          password: Yup.string().required(),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.go('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErros(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Authentication error',
          description:
            'A error was fond during login, please check your credetions.',
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <Container>
      <img src={Logo} alt="Ivoyant" />

      <Form onSubmit={handleSubmit} ref={formRef} autoComplete="false">
        <h1>Hi! Login to an existing account.</h1>

        <Input name="email" type="email" icon={FiUser} placeholder="E-mail" />
        <Input
          name="password"
          icon={FiLock}
          placeholder="Password"
          type="password"
        />

        <ul>
          <li>E-mail: test@mail.com</li>
          <li>Password: secret</li>
        </ul>
        <div>
          <Button type="submit">Sign In</Button>
        </div>
      </Form>
    </Container>
  );
};

export default SignIn;
