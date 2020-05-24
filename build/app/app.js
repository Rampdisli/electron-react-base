"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var IpcService_1 = require("./IpcService");
function App() {
    var ipc = new IpcService_1.IpcService();
    function getSystemInfo() {
        ipc.send('system-info').then(function (t) {
            return document.getElementById('myInfo').innerHTML = t.kernel;
        });
    }
    return (React.createElement("div", null,
        React.createElement("button", { onClick: getSystemInfo }, "Get My System Info"),
        "Meine Info",
        React.createElement("div", { id: "myInfo" }, " ")));
}
exports.default = App;
//# sourceMappingURL=app.js.map