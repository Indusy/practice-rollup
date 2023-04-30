import { Controller, Get } from "@nestjs/common";
import { PrismaService } from "./prisma.service";

@Controller("/")
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get("/")
  async index() {
    return `
      <h1>Hello</h1>
      <code>${this.prisma}</code>
    `;
  }
}
