type MailboxProps = {
  username: string;
  messages: string[];
};

const MessageList = ({ messages }: { messages: string[] }) => {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );
};

const Mailbox = ({ username, messages }: MailboxProps) => {
  return (
    <div>
      <p>
        Hello <b>{username}</b>
      </p>
      {messages.length > 0 ? (
        <div>
          <p>You have {messages.length} unread messages</p>
          <MessageList messages={messages} />
        </div>
      ) : (
        <p>No unread messages</p>
      )}
    </div>
  );
};

export default Mailbox;
