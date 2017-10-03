const http = require('http');
const cloudcmd = require('cloudcmd');
const io = require('socket.io');
const app = require('express')();
const criton = require('criton');

const port = 1337;

const auth = true;
const name = 'zimmer';
const username = 'admin';
const password = 
'5dfef631367f91cd19ae618dedd32f4466a8496740a20958ae5b050d56164fd425b9ff84f7329a28f42976e643b2e512bccfe44aa4d4fec3189d540be07d4a58';
const root = '/srv/http/zimmerta.info'
const server = http.createServer(app);
const socket = io.listen(server, {
    path: `socket.io`
});

const config = {
	name,
	auth,
	username,
	password,
	root,
};

const plugins = [
    __dirname + '/plugin.js'
];

const filePicker = {
    data: {
        FilePicker: {
            key: 'key'
        }
    }
};

// override option from json/modules.json
const modules = {
    filePicker,
};

app.use(cloudcmd({
    socket,  /* used by Config, Edit (optional) and Console (required)   */
    config, /* config data (optional)                                   */
}));

server.listen(port);
