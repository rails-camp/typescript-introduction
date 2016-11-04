var Blog;
(function (Blog) {
    var Post = (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
        };
        return Post;
    }());
    Blog.Post = Post;
})(Blog || (Blog = {}));
var Content;
(function (Content) {
    var Post = (function () {
        function Post(post) {
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seoKeywords = post.seoKeywords;
        }
        Post.prototype.printPost = function () {
            console.log(this.title);
            console.log(this.body);
            console.log(this.slug);
            console.log(this.seoKeywords);
        };
        return Post;
    }());
    Content.Post = Post;
})(Content || (Content = {}));
var blogPost = new Blog.Post({
    title: "My Great Post",
    body: "Some content"
});
blogPost.printPost();
var contentPost = new Content.Post({
    title: "My Great Post",
    body: "Some content",
    slug: 'my-great-post',
    seoKeywords: 'any, words'
});
contentPost.printPost();
//# sourceMappingURL=026_namespaces.js.map