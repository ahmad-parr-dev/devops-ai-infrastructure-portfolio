import { MessageBus } from "../messaging/message.bus";

export class Orchestrator {
  private bus = new MessageBus();

  run() {
    this.bus.send({ to: "agent", payload: "start" });
  }
}
