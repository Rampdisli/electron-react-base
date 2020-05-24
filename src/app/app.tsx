import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {IpcService} from "./IpcService";

class App extends React.Component<{}, {}> {

    render(): JSX.Element {
        return (
            <div>
                Test
            </div>
        );
    }
}

const ipc = new IpcService();

document.getElementById('request-os-info').addEventListener('click', async () => {
    const t = await ipc.send<{ kernel: string }>('system-info');
    document.getElementById('os-info').innerHTML = t.kernel;
});

ReactDOM.render(
    <App/>,
    document.getElementById('app') as HTMLElement
);

