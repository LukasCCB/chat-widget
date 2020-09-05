/** @jsx jsx */

import {jsx} from 'theme-ui';
import ChatWidgetContainer from './ChatWidgetContainer';
import {CustomerMetadata} from '../api';

type Props = {
  title?: string;
  subtitle?: string;
  primaryColor?: string;
  accountId: string;
  baseUrl?: string;
  greeting?: string;
  customer?: CustomerMetadata | null;
  newMessagePlaceholder?: string;
  iframeUrlOverride?: string;
  requireEmailUpfront?: boolean;
  customIconUrl?: string;
};

const ChatWindow = (props: Props) => {
  return (
    <ChatWidgetContainer {...props} defaultIsOpen>
      {(config) => {
        const {sandbox, iframeUrl, query, setIframeRef} = config;

        return (
          <iframe
            ref={setIframeRef}
            className='Papercups-chatWindowContainer'
            sandbox={sandbox}
            src={`${iframeUrl}?${query}`}
            sx={{
              border: 'none',
              bg: 'background',
              variant: 'styles.ChatWindowContainer',
            }}
          >
            Loading...
          </iframe>
        );
      }}
    </ChatWidgetContainer>
  );
};

export default ChatWindow;
