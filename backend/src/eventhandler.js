const amqp = require('amqplib/callback_api')

const microservice_name = 'microservice.landing_page';
const microservice_prefix = 'LAN-';
const microservice_exchange = 'publish_event.landing_page';
const microservice_queue = 'microservice.landing_page';

let amqp_connection;
let amqp_channel;

function connect(done) {
    amqp.connect('amqp://localhost', (err, connection) => {
        if (err) {
            throw err;
        }
        amqp_connection = connection;

        connection.createChannel((err, channel) => {
            if (err) {
                throw err;
            }
            amqp_channel = channel;

            done();
        });
    });
}

function listenForEvents(callback) {
    amqp_channel.consume(microservice_queue, msg => {
        if (msg.content) {
            callback(msg.content);
        }
    },
        {
            noAck: true
        });
}