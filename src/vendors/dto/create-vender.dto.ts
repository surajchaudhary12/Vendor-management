import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateVendorDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly contactDetails: string;

  @IsString()
  @IsNotEmpty()
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  readonly vendorCode: string;

  @IsNumber()
  @IsOptional()
  readonly onTimeDeliveryRate?: number;

  @IsNumber()
  @IsOptional()
  readonly qualityRatingAvg?: number;

  @IsNumber()
  @IsOptional()
  readonly averageResponseTime?: number;

  @IsNumber()
  @IsOptional()
  readonly fulfillmentRate?: number;
}
