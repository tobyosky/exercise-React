export default function MessageTemplate({ msg }) {
  return (
    <div
      className={`w-full flex p-4 ${
        msg.sentByUser ? "justify-end" : "justify-start"
      }`}
    >
      <p
        className={`p-2 rounded-lg ${
          msg.sentByUser ? "bg-green-300" : "bg-gray-300"
        }`}
      >
        {msg.text}
      </p>
    </div>
  );
}
