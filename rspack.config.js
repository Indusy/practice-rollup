// @ts-check
import path from "node:path";

const __dirname = new URL(".", import.meta.url).pathname;

/** @type {import('@rspack/cli').Configuration} */
const config = {
  entry: {
    main: "./src/main.ts",
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    module: true,
    chunkFormat: "module",
  },
  target: "node",
  externals: [
    "@grpc/proto-loader",
    "@grpc/grpc-js",
    "mqtt",
    "kafkajs",
    "nats",
    "amqp-connection-manager",
    "ioredis",
    "amqplib",
    "@nestjs/platform-socket.io",
    "@nestjs/microservices",
    "reflect-metadata",
    "cache-manager",
    "class-transformer",
    "class-validator",
    "readable-stream",
    "rxjs",
  ],
};

export default config;
