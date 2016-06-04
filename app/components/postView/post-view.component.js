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
var post_service_1 = require("../home/post.service");
var PostViewComponent = (function () {
    function PostViewComponent(postService) {
        this.postService = postService;
    }
    PostViewComponent.prototype.ngOnInit = function () {
        this.post.title = this.postService.find('1'); // Some id or title based search
    };
    PostViewComponent = __decorate([
        core_1.Component({
            selector: 'post',
            templateUrl: 'app/components/postView/post.component.html'
        }), 
        __metadata('design:paramtypes', [post_service_1.PostService])
    ], PostViewComponent);
    return PostViewComponent;
}());
exports.PostViewComponent = PostViewComponent;
//# sourceMappingURL=post-view.component.js.map