const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

app.use(cors());

app.get('/', (req, res) => {
    res.send('Server is running...');
});

io.on('connection', (socket) => {
    socket.emit('me', socket.id);

    socket.on('disconnect', () => {
        socket.broadcast.emit('callended');
    });

    socket.on('calluser', ({ userToCall, signalData, from, name}) => {
        io.to(userToCall).emit('calluser', { signal: signalData, from, name});
    });

    socket.on('answercall', (data) => {
        io.to(data.to).emit('callaccepted', data.signal);
    });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});



