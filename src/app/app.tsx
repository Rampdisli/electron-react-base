import * as React from 'react';
import {IpcService} from "./IpcService";

function App() {
    const ipc = new IpcService();

    function getSystemInfo(){
        ipc.send<{ kernel: string }>('system-info').then(t =>
            document.getElementById('myInfo').innerHTML = t.kernel
        );
    }

    return (
        <div>
            <button onClick={getSystemInfo}>Get My System Info</button>
            <h1>Meine Info</h1>
            <div id="myInfo"> </div>
        </div>
    );
}

export default App
