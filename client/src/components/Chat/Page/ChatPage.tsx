import React from 'react';

import StyledPageContainer from '../StyledPageContainer/StyledPageContainer';
import ChatArea from '../../ChatArea/ChatArea';

const ChatPage = () => (
    <StyledPageContainer>
        <ChatArea/>
        <MessageSender/>
  </StyledPageContainer>
)

export default ChatPage;