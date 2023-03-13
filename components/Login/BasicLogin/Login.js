import { useContext } from 'react';
import { Formik, Form, Field } from 'formik';
import { withTheme } from 'styled-components';
import { useRouter } from 'next/router'
import { useMutation } from '@apollo/client';
import { ButtonPrimary, Button } from 'components/UI/Button/Button';
import { Input } from 'components/UI/Input';
import { UserContext } from 'context/UserContext';
import { LOGIN } from 'apis/User';
import { COMPANY_NAME } from 'utils/config';
import * as S from './styled';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const Login = () => {
  const { signin } = useContext(UserContext);
  const router = useRouter()

  const onCompleted = data => {
    console.log(JSON.stringify(data))
    signin(data.login.token);
  };

  const [login, { error }] = useMutation(LOGIN, { onCompleted });

  const onSubmit = ({ email, password }, { setSubmitting }) => {
    setSubmitting(true);
    login({
      variables: {
        email,
        password,
        social: '',
      },
    });
    setSubmitting(false);
  };

  return (
    <S.Container>
      <S.Form>
        <div />
        <div style={{ }}>
          <S.Heading>Sign In</S.Heading>
          <S.Paragraph style={{ marginBottom: 10 }}>To continue, log in to ciscord</S.Paragraph>

          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form>
                <Field
                  type="email"
                  name="email"
                  label="Email"
                  placeholder="example@example.com"
                  component={Input}
                />
                <Field
                  type="password"
                  name="password"
                  label="Password"
                  placeholder="********"
                  component={Input}
                />
                <S.Footer>
                  <ButtonPrimary
                    type="submit"
                    name="button"
                    disabled={isSubmitting}
                    style={{ marginLeft: 0 }}
                  >
                    {isSubmitting ? 'Log in...' : 'Log in'}
                  </ButtonPrimary>

                  <Button
                    type="button"
                    name="button"
                    disabled={isSubmitting}
                    style={{ marginLeft: 20 }}
                    onClick={() => router.push(`/${COMPANY_NAME()}/signup`)}
                  >
                    Sign Up
                  </Button>
                </S.Footer>
              </Form>
            )}
          </Formik>
          {error && <p className="error">{error.graphQLErrors[0].message}</p>}

          <p />
        </div>
        <i />
      </S.Form>
      <S.Image />
    </S.Container>
  );
};

export default withTheme(Login);
