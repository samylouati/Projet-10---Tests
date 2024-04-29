describe("Bowling game", function() {

    var game;

    beforeEach(function() {
        game = new BowlingGame();
    }):
    
    //doit calculer le score en fonction des quilles tombées
    it("should properly calculate a gutter game", function() {
        rollMany(20, 0);
        expect(game.score()).toEqual(0);
    });
    
    //doit calculer le score si un strike est fait
    it("should properly calculate a strike", function () {
        // test
    });
    
        //doit calculer le score si un spare est fait est fait
    it("should properly calculate a spare", function () {
        // test
    });
        
});