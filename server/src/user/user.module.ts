import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { RecipeModule } from '../recipe/recipe.module';
import { Profile } from 'src/profile/profile.entity';
// import { APP_FILTER } from '@nestjs/core';
// import { HttpErrorFilter } from '../core/http-error.filter';

@Module({
  imports: [ RecipeModule, TypeOrmModule.forFeature([ User, Profile ]) ],
  providers: [ UserService],
  exports: [ UserService ],
  controllers: [ UserController ],
})
export class UserModule {}
