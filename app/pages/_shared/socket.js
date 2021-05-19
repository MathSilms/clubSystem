import { constans } from "./constants.js";


export default class SocketBuilder {
    constructor({ socketUrl, namespace }) {
        this.socketUrl = `${socketUrl}/${namespace}`;
        this.setOnConnected = () =>{};
        this.setOnConnected = () =>{};
    }

    setOnConnected(fn) {
        this.setOnConnected = fn

        return this;
    }

    setOnDisconnected(fn) {
        this.setOnDisconnected = fn

        return this;

    }


    build() {
        const socket = globalThis.importScripts.connect(this.socketUrl,{
            withCredentials: false,
        });
        socket.on('connect', () => console.log('conectei!'));

        socket.on(constans.events.USER_CONNECTED, this.setOnConnected);
        socket.on(constans.events.USER_DISCONNECTED, this.setOnDisconnected);
    }
}