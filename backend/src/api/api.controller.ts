import { ApiService } from './api.service';
import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
    constructor(private readonly apiService: ApiService) {}

    @Get('data')
    async getData() {
        return this.apiService.getData();
    }
}
