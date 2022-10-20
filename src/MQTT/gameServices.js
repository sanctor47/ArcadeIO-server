import * as mqtt from "mqtt"
import Game from '../models/game.model';
import Score from '../models/score.model';
import { newScore } from "../services/score.service";
const clientId = 'mqttjs_' + Math.random().toString(8).substr(2, 4)
const client = mqtt.connect("mqtt://3.68.185.142:1883", { clientId: clientId, clean: false });

export const StartMQTT = () => {

    client.on("connect", function (connack) {
        // console.log("client connected", connack);

        client.subscribe("game/score/#", (err, granted) => {
            if (err) {
                console.log(err, 'err');
            }
            // console.log(granted, 'granted')
        })

        client.on('message', (topic, message, packet) => {
            console.log(packet, packet.payload.toString());
            console.log("Recived Message: " + message);
            console.log("Topic: " + topic);
            const gameId = topic.split('/')[2]
            console.log("Game ID: " + gameId)
            const scoreData = JSON.parse(message)
            console.log(scoreData);
            newScore(scoreData);
        })
    //     // on client connection publish messages to the topic on the server/broker  
    //     const payload = { 1: "Hello", 2: "Welcome to the test connection" }
    //     client.publish(topicName, JSON.stringify(payload), { qos: 0 }, (PacketCallback, err) => {

    //         if (err) {
    //             console.log(err, 'MQTT publish packet')
    //         }
    //     })
    })

    client.on("error", function (err) {
        console.log("Error: " + err)
        if (err.code == "ENOTFOUND") {
            console.log("Network error, make sure you have an active internet connection")
        }
    })

    client.on("close", function () {
        console.log("Connection closed by client")
    })

    client.on("reconnect", function () {
        console.log("Client trying a reconnection")
    })

    client.on("offline", function () {
        console.log("Client is currently offline")
    })

}

export const PublishMessage = (gameId, playerId, message) => {
    client.publish(`game/com/${gameId}`, JSON.stringify({message, playerId}), { qos: 0 }, (PacketCallback, err) => {
        if (err) {
            console.log(err, 'MQTT publish packet')
        }
    })
}