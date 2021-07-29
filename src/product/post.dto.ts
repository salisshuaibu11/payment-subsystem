import { IsString } from "class-validator";

class CreateProductDto {
  @IsString()
  public name: string;

  @IsString()
  public id: string;

  @IsString()
  public discount: number;
}

export default CreateProductDto;
