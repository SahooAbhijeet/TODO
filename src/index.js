const express = require("express");
const { ServerConfig } = require("./config");
const { connect } = require("./config");
const apiRoutes = require("./routes/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, ( async () => {
    console.log(`Server started successfully at PORT ${ServerConfig.PORT}`);
    const connection = await connect;
    console.log(`MongoDB connected`);
}))