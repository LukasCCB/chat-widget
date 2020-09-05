import React from 'react';

import ChatWidget, {ChatWindow} from '@papercups-io/chat-widget';

type Props = {disco?: boolean; displayChatWindow?: boolean};

const App = ({disco, displayChatWindow}: Props) => {
  const colors = [
    '#1890ff',
    '#f5222d',
    '#7cb305',
    '#52c41a',
    '#13c2c2',
    '#722ed1',
    '#eb2f96',
  ];

  const [primaryColor, setPrimaryColor] = React.useState(colors[0]);

  React.useEffect(() => {
    if (!disco) {
      return;
    }

    const interval = setInterval(() => {
      const idx = colors.indexOf(primaryColor);
      const next = (idx + 1) % (colors.length - 1);

      setPrimaryColor(colors[next]);
    }, 2000);

    return () => clearInterval(interval);
  }, [disco, colors, primaryColor]);

  return (
    <>
      {displayChatWindow ? (
        <div
          style={{
            padding: 32,
            height: 480,
            width: '50%',
            minWidth: 320,
            maxWidth: 400,
          }}
        >
          <ChatWindow
            title='Welcome to Papercups!'
            subtitle='Ask us anything in the chat window 😊'
            primaryColor={primaryColor}
            accountId='eb504736-0f20-4978-98ff-1a82ae60b266'
            greeting='Hi there! How can I help you?'
            newMessagePlaceholder='Start typing...'
            customer={{
              name: 'Test User',
              email: 'test@test.com',
              external_id: '123',
            }}
            // NB: we override these values during development -- note that the
            // API runs on port 4000 by default, and the iframe on 8080
            baseUrl='http://localhost:4000'
            iframeUrlOverride='http://localhost:8080'
            requireEmailUpfront
          />
        </div>
      ) : (
        // Put <ChatWidget /> at the bottom of whatever pages you would
        // like to render the widget on, or in your root/router component
        // if you would like it to render on every page
        <ChatWidget
          title='Welcome to Papercups!'
          subtitle='Ask us anything in the chat window 😊'
          primaryColor={primaryColor}
          accountId='eb504736-0f20-4978-98ff-1a82ae60b266'
          greeting='Hi there! How can I help you?'
          newMessagePlaceholder='Start typing...'
          customer={{
            name: 'Test User',
            email: 'test@test.com',
            external_id: '123',
          }}
          // NB: we override these values during development -- note that the
          // API runs on port 4000 by default, and the iframe on 8080
          baseUrl='http://localhost:4000'
          iframeUrlOverride='http://localhost:8080'
          requireEmailUpfront
          defaultIsOpen={false}
        />
      )}
    </>
  );
};

export default App;
