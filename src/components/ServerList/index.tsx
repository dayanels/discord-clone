import React from 'react';
import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome mentions={3}/>

            <Separator />

            <ServerButton />
            <ServerButton  hasNotifications/>
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications/>
            <ServerButton />
        </Container>
    );
}

export default ServerList;