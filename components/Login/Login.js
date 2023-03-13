import TwitterLogin from 'react-twitter-auth/lib/react-twitter-auth-component';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { useEscapeToClose } from 'hooks';

import { UserContext } from 'context/UserContext';
import { LOGIN } from 'apis/User';

import closeSVG from 'public/icons/close.svg';
import arrowLeftSVG from 'public/icons/arrow-left.svg';
import twitterSVG from 'public/icons/twitter.svg';

import * as S from './Login.styled';

const Login = () => {
  const router = useRouter();
  useEscapeToClose(router.back);

  const { signin } = useContext(UserContext);
  const onCompleted = data => {
    // Store the token in cookie 30 days
    signin(data.login.token);
  };

  const [login, { error }] = useMutation(LOGIN, { onCompleted });

  const onSuccessTwitter = response => {
    response.json().then(body => {
      // Store the token in cookie
      login({
        variables: {
          // provide username to email field as a temp solution as
          // twitter doesn't always return email field
          // TODO
          email: body.profile.emails[0].value || body.profile.username,
          password: '',
          social: JSON.stringify(body.profile),
        },
      });
    });
  };

  const onFailed = err => {
    alert(err);
  };

  return (
    <S.Container>
      <S.CloseIcon onClick={() => window.parent.postMessage({ message: 'close-widget' }, '*')}>
        <use xlinkHref={`${closeSVG}#icon-close`} />
      </S.CloseIcon>
      <S.Inner>
        <S.BackIcon onClick={() => router.back()}>
          <use xlinkHref={`${arrowLeftSVG}#icon-arrow-left`} />
        </S.BackIcon>
        <S.Text>
          You can log in via
          <br />
          email
        </S.Text>

          <S.Button onClick={login}>
            Sign in
          </S.Button>
      </S.Inner>
      {error && <S.Error>{error.graphQLErrors[0].message}</S.Error>}
    </S.Container>
  );
};

export default Login;
