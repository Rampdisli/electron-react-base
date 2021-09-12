import {IpcChannelInterface} from "./IpcChannelInterface";
import {IpcMainEvent} from 'electron';
import {IpcRequest} from "../../shared/IpcRequest";
import {execSync} from "child_process";

export class SystemInfoChannel implements IpcChannelInterface {
  getName(): string {
    return 'system-info';
  }

  handle(event: IpcMainEvent, request: IpcRequest): void {
    if (!request.responseChannel) {
      request.responseChannel = `${this.getName()}_response`;
    }

    const result = execSync('py demoscript.py').toString()

    event.sender.send(request.responseChannel, { kernel: result });

    //Mac version
    //event.sender.send(request.responseChannel, { kernel: execSync('').toString() });
  }
}
