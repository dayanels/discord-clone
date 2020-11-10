import React, {useRef, useEffect} from 'react';

import ChannelMessage from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(()=>{
    const div = messagesRef.current;

    if(div){
      div.scrollTop = div.scrollHeight;
    }

  }, [messagesRef])

  return (
    <>
      <Container>
        <Messages>
          <ChannelMessage
            author="Dayane Lemos Silva"
            content="Hoje é dia de clonar a interface do discord"
            date="08/11/2020"

          />

          <ChannelMessage
            author="Dayane Lemos Silva"
            content="Hoje é dia de clonar a interface do discord"
            date="08/11/2020"

          />

          <ChannelMessage
            author="Dayane Lemos Silva"
            content="Hoje é dia de clonar a interface do discord"
            date="08/11/2020"

          />

          <ChannelMessage
            author="Dayane Lemos Silva"
            content="Hoje é dia de clonar a interface do discord"
            date="08/11/2020"

          />

          <ChannelMessage
            author="Dayane Lemos Silva"
            content="Hoje é dia de clonar a interface do discord"
            date="08/11/2020"

          />

          <ChannelMessage
            author="Dayane Lemos Silva"
            content="Hoje é dia de clonar a interface do discord"
            date="08/11/2020"

          /><ChannelMessage
            author="Dayane Lemos Silva"
            content="Hoje é dia de clonar a interface do discord"
            date="08/11/2020"

          />

          <ChannelMessage
            author="Guilherme Rodz"
            content={
              <>
                <Mention>@Dayane</Mention> some content
              </>
            }
            isBot
            hasMention
            date="08/11/2020"
          />
        </Messages>


        <InputWrapper>
          <Input type="text" placeholder="Conversar em #chat-livre" />
          <InputIcon />
        </InputWrapper>

      </Container>
    </>
  )
}

export default ChannelData;