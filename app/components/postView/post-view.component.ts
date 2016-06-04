import { Component, Input } from '@angular/core';

import {Post} from "../../models/post";

import { PostService } from "../home/post.service"

@Component({
	selector: 'post',
	templateUrl: 'app/components/postView/post.component.html'
})

export class PostViewComponent {

	// Private methods

	private post: Post;

	constructor(private postService: PostService) { }

	ngOnInit() {

		this.post.title = this.postService.find('1'); // Some id or title based search
	}

}