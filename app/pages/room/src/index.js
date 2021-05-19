import { constans } from "../../_shared/constants.js";
import SocketBuilder from "../../_shared/socket.js"



const socketBuilder = new SocketBuilder({
    socketUrl: constans.socketUrl,
    namespace: constans.socketNamespaces.room
});

const socket = socketBuilder
    .setOnConnected((user) => console.log('user connected', user))
    .setOnDisconnected((user) => console.log('user disconnected', user))
    .build()

    const room = {
        id: Date.now(),
        topic: 'JS Expert éh noix',
        
    }
    
    const user = {
        img: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-512.png',
        usernames: 'MatheusOliveira',
    }

socket.emit(constans.events.JOIN_ROOM, {user,room})