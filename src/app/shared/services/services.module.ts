import { NgModule, Optional, SkipSelf } from "@angular/core";

import { ConfigService } from "./config/config.service";
import { PreloaderService } from "./preloader/preloader.service";
import { SpinnerService } from "./spinner/spinner.service";
import { DataService } from "./data/data.service";
import { ThemesService } from './themes/themes.service';
import { LoginService } from "app/shared/services/login.service";



@NgModule({
	imports: [],
	providers: [ConfigService, ThemesService, PreloaderService, SpinnerService, DataService,LoginService],
	declarations: [],
	exports: []
})
export class ServicesModule {
	constructor(
		@Optional()
		@SkipSelf()
		parentModule: ServicesModule
	) { }
}