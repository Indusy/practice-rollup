import path from "node:path";
import { Plugin, defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";
import progress from "rollup-plugin-progress";
import filesize from "rollup-plugin-filesize";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import run from "@rollup/plugin-run";

const dev = process.env.ROLLUP_WATCH === "true";

export default defineConfig({
  input: {
    main: path.resolve("src/main.ts"),
  },
  output: {
    dir: "dist",
    format: "es",
  },
  plugins: [
    commonjs(),
    nodeResolve({ preferBuiltins: true }),
    json(),
    typescript({
      check: false,
    }),
    peerDepsExternal({
      includeDependencies: dev,
    }) as Plugin,
    !dev && terser(),
    !dev && (progress() as Plugin),
    !dev && filesize(),
    dev && run(),
  ],
  external: [
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
});
