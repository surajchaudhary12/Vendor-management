import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { CreateVendorDto } from './dto/create-vender.dto';
import { Vendor } from './vendor.entity';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Post()
  create(@Body() createVendorDto: CreateVendorDto): Promise<Vendor> {
    return this.vendorsService.create(createVendorDto);
  }

  @Get()
  findAll(): Promise<Vendor[]> {
    return this.vendorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Vendor> {
    return this.vendorsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateVendorDto: CreateVendorDto): Promise<Vendor> {
    return this.vendorsService.update(id, updateVendorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.vendorsService.remove(id);
  }
}
