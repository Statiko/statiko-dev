import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { HomeComponent } from './components/home/home.component';
import { PostService } from './components/home/post.service';

import { PostViewComponent } from './components/postView/post-view.component';

import { AppConfig } from './config/app';


@Component({
	selector: 'my-app',
	template: `
    <h1>{{title}}</h1>
    <router-outlet></router-outlet> 
   `,

	directives: [ROUTER_DIRECTIVES],
	providers: [
		ROUTER_PROVIDERS,
		PostService
	]
})

@RouteConfig([
	{
		path: '/',
		name: 'Home',
		component: HomeComponent
	},
	{
		path: '/:post',
		name: 'Post',
		component: PostViewComponent
	}
])

export class AppComponent {
	title = AppConfig.title;
}