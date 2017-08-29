describe('jquery', () => {
    it('should find jquery', () => {
        expect($).not.toBeNull();
    });

    it('should display nice message when no comments are availble', () => {
        setFixtures('<div id="comments"></div>');
        var comments = $("#comments");
        comments.jQComments();
        expect(comments.text()).toBe("Be the first one to comment...");
    });
    
    
});
