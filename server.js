const express = require("express");
const cors = require("cors");
require("dotenv").config();
require("./db/conn");
const userRouter = require("./routes/userRoutes");
const doctorRouter = require("./routes/doctorRoutes");
const appointRouter = require("./routes/appointRoutes");
const path = require("path");
const notificationRouter = require("./routes/notificationRouter");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/appointment", appointRouter);
app.use("/api/notification", notificationRouter);
app.use('/api/predict', (req, res) => {
    const body = req.body;
    console.log(process.env.PREDICTION_API);
    fetch(process.env.PREDICTION_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
        .then((response) => response.json())
        .then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(port, () => {});