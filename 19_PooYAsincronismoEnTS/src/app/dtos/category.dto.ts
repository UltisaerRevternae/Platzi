import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from 'class-validator'

import { AccessType, Category } from "../models/category.model"

interface ICreateCategoryDto extends Omit<Category, 'id' | 'creationAt' | 'updatedAt'>{
}

class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4,144)
  name!: string

  @IsUrl()
  @IsNotEmpty()
  image!: string

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined

}

(async()=> {
  try {
    const dto = new CreateCategoryDto()
    dto.name = 'a'
    await validateOrReject(dto)
  } catch (error) {
    console.log(error)
  }
})()
export { CreateCategoryDto, ICreateCategoryDto }
