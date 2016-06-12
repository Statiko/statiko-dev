import { Injectable } from '@angular/core';

import { POSTS } from "../database/posts";

import { Post } from "../models/post";

import { AppConfig } from "../config/app"


@Injectable()
export class PostService {
	/**
	 * Array containing posts meta data
	 * @type {models/Post}
	 */
	posts: Post[];

	/**
	 * Fetch posts from github api
	 */
	private fetchPosts(){

		// Load Data using AppConfig.gitname
		// 
		this.posts = []; //data to store here

	}


	/**
	 * Return Posts array
	 */
	getPosts() {
		return this.posts;
	}

	/**
	 * Find a post from slug from posts
	 * @param {string} slug slug of blog post
	 *
	 * Note : This app assumes that if you have slug of the blog post
	 * then you must have already fetched the list and have the data in your 
	 * posts array
	 * 
	 */
	private find( slug : string ) : any {

		var result = 0;

		this.posts.map(function(value, index: number) {
			if (value.files[slug] != null)
				result = value.files[slug].raw_url;

		});

		if (result !== 0)
			return result;
		else
			return false;

	}

	/**
	 * Get full post blog by slug provided
	 */
	getPost( slug: string ) {

		var present = this.find(slug);

		if(present !== false)
		{
			//Get the data and return it
		}

		else {
			// Throw error
		}

		return ""

	}
}