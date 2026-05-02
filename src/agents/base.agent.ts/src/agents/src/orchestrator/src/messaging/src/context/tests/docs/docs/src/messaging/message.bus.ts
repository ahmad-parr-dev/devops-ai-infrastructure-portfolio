export class MessageBus {
  send(message: { to: string; payload: unknown }) {
    console.log("Sending message:", message);
  }
}
