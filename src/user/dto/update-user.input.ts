import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {
    @IsString()
    @IsNotEmpty({message: 'Field name is required'})
    @IsOptional()
    name?: string;

    @IsEmail()
    @IsNotEmpty({message: 'Field email is required'})
    @IsOptional()
    email?: string;
}