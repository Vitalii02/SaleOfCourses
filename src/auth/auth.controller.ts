import { Body, Controller, HttpCode, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) { }

	@UsePipes(new ValidationPipe())
	@Post('register')
	async register(@Body() dto: AuthDto) {
		const user = await this.authService.findUser(dto.login);
		if (!user) {

		}

	}

	@HttpCode(200)
	@Post('login')
	async login(@Body() dto: AuthDto) {

	}

}
