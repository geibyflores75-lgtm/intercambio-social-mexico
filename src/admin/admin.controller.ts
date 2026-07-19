import { Controller, Get, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Get('kpis')
  getStats() {
    return { totalUsers: 1, activeCampaigns: 1 };
  }
}