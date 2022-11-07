import * as S from './WidgetIcon.styled';

export default ({ openWidget, show }) => (
  <S.Container id="ciscord" show={show}>
    <S.WidgetIcon onClick={openWidget} />
  </S.Container>
);
