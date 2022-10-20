"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StartMQTT = exports.PublishMessage = void 0;

var mqtt = _interopRequireWildcard(require("mqtt"));

var _game = _interopRequireDefault(require("../models/game.model"));

var _score = _interopRequireDefault(require("../models/score.model"));

var _score2 = require("../services/score.service");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var clientId = 'mqttjs_' + Math.random().toString(8).substr(2, 4);
var client = mqtt.connect("mqtt://3.68.185.142:1883", {
  clientId: clientId,
  clean: false
});

var StartMQTT = function StartMQTT() {
  client.on("connect", function (connack) {
    // console.log("client connected", connack);
    client.subscribe("game/score/#", function (err, granted) {
      if (err) {
        console.log(err, 'err');
      } // console.log(granted, 'granted')

    });
    client.on('message', function (topic, message, packet) {
      console.log(packet, packet.payload.toString());
      console.log("Recived Message: " + message);
      console.log("Topic: " + topic);
      var gameId = topic.split('/')[2];
      console.log("Game ID: " + gameId);
      var scoreData = JSON.parse(message);
      console.log(scoreData);
      (0, _score2.newScore)(scoreData);
    }); //     // on client connection publish messages to the topic on the server/broker  
    //     const payload = { 1: "Hello", 2: "Welcome to the test connection" }
    //     client.publish(topicName, JSON.stringify(payload), { qos: 0 }, (PacketCallback, err) => {
    //         if (err) {
    //             console.log(err, 'MQTT publish packet')
    //         }
    //     })
  });
  client.on("error", function (err) {
    console.log("Error: " + err);

    if (err.code == "ENOTFOUND") {
      console.log("Network error, make sure you have an active internet connection");
    }
  });
  client.on("close", function () {
    console.log("Connection closed by client");
  });
  client.on("reconnect", function () {
    console.log("Client trying a reconnection");
  });
  client.on("offline", function () {
    console.log("Client is currently offline");
  });
};

exports.StartMQTT = StartMQTT;

var PublishMessage = function PublishMessage(gameId, playerId, message) {
  client.publish("game/com/".concat(gameId), JSON.stringify({
    message: message,
    playerId: playerId
  }), {
    qos: 0
  }, function (PacketCallback, err) {
    if (err) {
      console.log(err, 'MQTT publish packet');
    }
  });
};

exports.PublishMessage = PublishMessage;