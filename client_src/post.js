$( document ).ready( function () {
    var idPost = '';

    var postViewTemplRaw = $('#post-view-template').html();
    var postCommentsTemplRaw = $('#post-comments-template').html();
    var postsRelatedTemplRaw = $('#posts-related-template').html();
    var postRelatedTemplRaw = $('#post-related-template').html();

    var postViewTemplate = Handlebars.compile(postViewTemplRaw);
    var postsRelatedTemplate = Handlebars.compile(postsRelatedTemplRaw);

    Handlebars.registerPartial('post-comments', postCommentsTemplRaw);
    Handlebars.registerPartial('post-related', postRelatedTemplRaw);

    render();
    subscribeRelated();

    function render() {
        renderPost();
        renderRelated();
    }

    function subscribeRelated() {
        $( '.posts-container__related' ).click( function( event ) {
            idPost = $(event.target).data('id');
            renderPost();
            $( 'html,body' ).animate( { scrollTop : 0 }, 0 );
        });
    }

    function renderPost() {
        var html = postViewTemplate({
            post: Data.getPost(idPost),
            comments: Data.getPostComments()
        });
        $('.posts-container__view').html(html);
    }

    function renderRelated() {
        var html = postsRelatedTemplate({posts: Data.getRelatedPosts()});
        $('.posts-container__related').html(html);
    }



});