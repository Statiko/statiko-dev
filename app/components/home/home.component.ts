import { Component, Input } from '@angular/core';

import {Post} from "../../models/post";

import { PostService } from "./post.service"

@Component({
	selector: 'my-app',
	template: `    
		<h1>{{title}}</h1>
    	<h2>My Heroes</h2>
    `
})

export class HomeComponent {

	// Private methods

	private selectedPost: Post;

	private posts: Post[];

	constructor(private postService: PostService){}

	ngOnInit() {
		console.log(" I am ready");

		this.posts = this.postService.getPosts();
	}

	selectPost(post : Post){
		this.selectedPost = post;
	}
}