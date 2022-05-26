var Leaderboard = function() {
    this.scores = new Map();
    this.players = [];
};


Leaderboard.prototype.addScore = function(playerId, score) {
    if (!this.scores.has(playerId)) {
        this.scores.set(playerId, 0);
        this.players.push(playerId);
    }
    this.scores.set(playerId, this.scores.get(playerId) + score);
    return;
};


Leaderboard.prototype.top = function(K) {
    this.players.sort((a, b) => this.scores.get(b) - this.scores.get(a));
    
    let i = 0;
    let sum = 0;
    
    while (i < K) {
        const player = this.players[i++]; 
        sum += this.scores.get(player);
    }
    
    return sum;
};


Leaderboard.prototype.reset = function(playerId) {
    this.scores.set(playerId, 0);
};
