import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { BasicAuthStrategy } from './basic.strategy';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, BasicAuthStrategy],
})
export class AuthModule {}
