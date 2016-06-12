"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PostService = (function () {
    function PostService() {
    }
    /**
     * Fetch posts from github api
     */
    PostService.prototype.fetchPosts = function () {
        // Load Data using AppConfig.gitname
        // 
        this.posts = []; //data to store here
    };
    /**
     * Return Posts array
     */
    PostService.prototype.getPosts = function () {
        return this.posts;
    };
    /**
     * Find a post from slug from posts
     * @param {string} slug slug of blog post
     *
     * Note : This app assumes that if you have slug of the blog post
     * then you must have already fetched the list and have the data in your
     * posts array
     *
     */
    PostService.prototype.find = function (slug) {
        var result = 0;
        this.posts.map(function (value, index) {
            if (value.files[slug] != null)
                result = value.files[slug].raw_url;
        });
        if (result !== 0)
            return result;
        else
            return false;
    };
    /**
     * Get full post blog by slug provided
     */
    PostService.prototype.getPost = function (slug) {
        var present = this.find(slug);
        if (present !== false) {
        }
        else {
        }
        return "";
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map