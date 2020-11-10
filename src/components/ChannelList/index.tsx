import React from 'react';

import { Container, AddCategoryIcon, Category } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <>
      <Container>
        <Category>
          <span>Canais de texto</span>
          <AddCategoryIcon />
        </Category>

        <ChannelButton channelName="chat-livre"/>
        <ChannelButton channelName="trabalho"/>
        <ChannelButton channelName="a"/>
        <ChannelButton channelName="b"/>
      </Container>
    </>
  )
}

export default ChannelList;