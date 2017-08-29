describe('jquery', () => {
    it('should find jquery', () => {
        expect($).not.toBeNull();
    });

    it('should display nice message when no comments are availble', () => {
        setFixtures('<div id="comments"></div>');
        var comments = $("#comments");
        comments.JQComments();
        expect(comments.html()).toBe("Be the first one to comment");
    });
    
    
});
