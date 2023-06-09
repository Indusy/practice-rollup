import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { PrismaService } from "./prisma.service";

@Module({
  controllers: [AppController],
  providers: [PrismaService]
})
export default class AppModule {};