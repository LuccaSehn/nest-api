import { InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
    @IsString()
    @IsNotEmpty({message: 'Field name is required'})
    name: string;

    @IsEmail()
    @IsNotEmpty({message: 'Field email is required'})
    email: string;
}