import { WebSocketServer } from "ws";

const port = 9090;
const wss = new WebSocketServer({ port });

const state = {
  points: [
    {
      // id: 0,
      fuellingInterval: null,
      msgParsed: {
        data: {
          fuelPointsState: {
            id: 0,
          },
        },
      },
    },
  ],
};

wss.on("connection", function (ws, request) {
  console.log("Client with: ", request.headers["client-name"]);

  // broadcasting to every other connected WebSocket clients, excluding itself.
  ws.on("message", function (message, isBinary) {
    const msgString = message.toString(); // Convert Buffer to string
    // console.log(`Received: ${msgString}`);

    const msgParsed = JSON.parse(msgString);

    if (msgParsed.message_type == "fuelPointsState") {
      const { data } = msgParsed;
      const { fuelPointsState } = data;
      const { id, fuelpointState } = fuelPointsState;
      const { fuelpointStateType } = fuelpointState;

      console.log("fuelpointId: ", id);
      console.log("fuelpointStateType: ", fuelpointStateType);
      console.log("isBinary: ", isBinary);

      const isFueling = fuelpointStateType === "Fuelling";

      //---------------------------------------------------------
      const { points } = state;
      let selectedPoint = points.find(
        (point) => point.msgParsed.data.fuelPointsState.id == id
      );
      if (!selectedPoint) {
        selectedPoint = {
          fuellingInterval: null,
          msgParsed,
        };
        points.push(selectedPoint);
      }

      const { fuellingInterval } = selectedPoint;

      if (isFueling && !fuellingInterval) {
        selectedPoint.msgParsed.data.fuelPointsState.fuelpointState =
          fuelpointState;

        const interval = scheduleFuelingMesssgesFor(selectedPoint, wss, ws);
        selectedPoint.fuellingInterval = interval;
      }
      if (!isFueling) {
        clearInterval(fuellingInterval);
        selectedPoint.fuellingInterval = undefined;
      }
      // --------------------------------------------------------
    }

    wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message, { binary: isBinary });
      }
    });
  });

  ws.on("close", function () {
    console.log("Client disconnected!");
  });

  ws.on("error", function (error) {
    console.error("WebSocket error:", error);
  });
});

console.log(`WebSocket server started on ws://localhost:${port}`);

function scheduleFuelingMesssgesFor(selectedPoint, wss, ws) {
  const interval = setInterval(() => {
    const runningVolume =
      selectedPoint.msgParsed.data.fuelPointsState.fuelpointState.runningVolume;

    const newRunningVolume =
      runningVolume === undefined || runningVolume === null
        ? 0
        : runningVolume + 0.23;

    selectedPoint.msgParsed.data.fuelPointsState.fuelpointState.runningVolume =
      newRunningVolume;

    // console.log(
    //   `sending fuelling update - fuelPointId: ${id}, runningVolume: ${newRunningVolume}`
    // );

    sendMsgObjectToAllClients(wss, ws, selectedPoint.msgParsed);
  }, 100);

  return interval;
}

/**
 * socket server, socket, message as an object
 */
function sendMsgObjectToAllClients(wss, ws, msgObject) {
  wss.clients.forEach(function each(client) {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(msgObject), { binary: false });
    }
  });
}
