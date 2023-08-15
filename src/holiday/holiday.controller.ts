import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { HolidayService } from './holiday.service';
import { Holiday } from './schemas/HolidayPackage.schema';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { UpdateHolidayDto } from './dto/update-holiday.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
@ApiTags('Holiday Module')
@Controller('holidays')
export class HolidayController {
  constructor(private readonly holidayService: HolidayService) {}

  @Get()
  @ApiOperation({ summary: 'Get all data from this api' })
  @ApiResponse({
    status: 200,
    description: 'All Data list',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '64d93145d7eda8aea7cb9a3a',
          },
          package_name: {
            type: 'string',
            example: 'This is Package Name',
          },
          image_url: {
            type: 'string',
            example: 'https://picsum.photos/200/300',
          },
          description: {
            type: 'string',
            example: 'This is description',
          },
          duration: {
            type: 'integer',
            example: 10,
          },
          price: {
            type: 'integer',
            example: 35390,
          },
          depature_date: {
            type: 'Date',
            example: '2023-08-13T19:38:45.356Z',
          },
        },
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Fobidden',
  })
  @ApiResponse({
    status: 500,
    description: 'Internal server error',
  })
  async getAllHolidays(@Query() query: ExpressQuery): Promise<Holiday[]> {
    return this.holidayService.findAll(query);
  }

  @Post()
  @ApiOperation({ summary: 'create new holiday' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: '64d93145d7eda8aea7cb9a3a',
        },
        package_name: {
          type: 'string',
          example: 'This is Package Name',
        },
        image_url: {
          type: 'string',
          example: 'https://picsum.photos/200/300',
        },
        description: {
          type: 'string',
          example: 'This is description',
        },
        duration: {
          type: 'integer',
          example: 10,
        },
        price: {
          type: 'integer',
          example: 35390,
        },
        depature_date: {
          type: 'Date',
          example: '2023-08-13T19:38:45.356Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'All Data list',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '64d93145d7eda8aea7cb9a3a',
          },
          package_name: {
            type: 'string',
            example: 'This is Package Name',
          },
          image_url: {
            type: 'string',
            example: 'https://picsum.photos/200/300',
          },
          description: {
            type: 'string',
            example: 'This is description',
          },
          duration: {
            type: 'integer',
            example: 10,
          },
          price: {
            type: 'integer',
            example: 35390,
          },
          depature_date: {
            type: 'Date',
            example: '2023-08-13T19:38:45.356Z',
          },
        },
      },
    },
  })
  async createHoliday(
    @Body()
    holiday: CreateHolidayDto,
  ): Promise<Holiday> {
    return this.holidayService.create(holiday);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get single  holiday' })
  @ApiResponse({
    status: 200,
    description: 'All Data list',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '64d93145d7eda8aea7cb9a3a',
          },
          package_name: {
            type: 'string',
            example: 'This is Package Name',
          },
          image_url: {
            type: 'string',
            example: 'https://picsum.photos/200/300',
          },
          description: {
            type: 'string',
            example: 'This is description',
          },
          duration: {
            type: 'integer',
            example: 10,
          },
          price: {
            type: 'integer',
            example: 35390,
          },
          depature_date: {
            type: 'Date',
            example: '2023-08-13T19:38:45.356Z',
          },
        },
      },
    },
  })
  async getHoliday(
    @Param('id')
    id: string,
  ): Promise<Holiday> {
    return this.holidayService.findById(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'update  holiday' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
          example: '64d93145d7eda8aea7cb9a3a',
        },
        package_name: {
          type: 'string',
          example: 'This is Package Name',
        },
        image_url: {
          type: 'string',
          example: 'https://picsum.photos/200/300',
        },
        description: {
          type: 'string',
          example: 'This is description',
        },
        duration: {
          type: 'integer',
          example: 10,
        },
        price: {
          type: 'integer',
          example: 35390,
        },
        depature_date: {
          type: 'Date',
          example: '2023-08-13T19:38:45.356Z',
        },
      },
    },
  })
  @ApiResponse({
    status: 200,
    description: 'All Data list',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            example: '64d93145d7eda8aea7cb9a3a',
          },
          package_name: {
            type: 'string',
            example: 'This is Package Name',
          },
          image_url: {
            type: 'string',
            example: 'https://picsum.photos/200/300',
          },
          description: {
            type: 'string',
            example: 'This is description',
          },
          duration: {
            type: 'integer',
            example: 10,
          },
          price: {
            type: 'integer',
            example: 35390,
          },
          depature_date: {
            type: 'Date',
            example: '2023-08-13T19:38:45.356Z',
          },
        },
      },
    },
  })
  async updateHotel(
    @Param('id')
    id: string,
    @Body()
    holiday: UpdateHolidayDto,
  ): Promise<Holiday> {
    return this.holidayService.updateById(id, holiday);
  }
  @Delete(':id')
  @ApiOperation({ summary: 'delete the record' })
  @ApiResponse({
    status: 200,
    description: 'deleted the holiday',
  })
  async deleteBook(
    @Param('id')
    id: string,
  ): Promise<Holiday> {
    return this.holidayService.deleteById(id);
  }
}
