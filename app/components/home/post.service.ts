import { Injectable } from '@angular/core';

import { POSTS } from "../../database/posts";


@Injectable()
export class PostService {
	getPosts() {
		return POSTS;
	}

	find( slug ){
		return 'Temp';
	}
}