import * as S from './Member.styled';

export default ({ member }) => (
  <S.ListItem key={member.id}>
    <S.Avatar src={`https://ui-avatars.com/api/?name=${member.username}`} name={member.username} />
    <S.Name>{member.username}</S.Name>
    <S.Status online={member.isOnline} />
  </S.ListItem>
);
