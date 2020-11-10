import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 71px 240px  auto 240px;
  grid-template-rows: 46px auto 52px;

  //sl - server list
  //sn - server name
  //ci - channel info
  //cl - channel list
  //cd - channel data
  //ul - user list
  //ui - user info

  grid-template-areas: 
  'sl sn ci ci'
  'sl cl cd ul'
  'sl ui cd ul';

  height: 100vh;
`;
