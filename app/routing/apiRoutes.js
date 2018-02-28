var friends = require("../data/friends.js");

module.exports = function(app) {

	app.get("/api/friends", function(req, res) {
		res.json(friends);
	})

	app.post("/api/friends", function(req, res) {
		var friendRequest = req.body.scores;
		var bestfriend = 0;
		var match;

		// run 2 for loops to interate through each object at each index followed by running the scores of each person in the friendsArray
		for (var i = 0; i < friends.length; i++) {
			var candidate = 0;
			for (var k = 0; k < friends.score.length; k++) {
				candidate += Math.abs(parseInt(friendRequest[k]) - parseInt(friends.score[k]));
			}
			// assign the highest score to bestfriend variable and assign the object from friends to to match
			if (candidate > bestfriend){
				bestfriend = candidate;
				match = friends[i];
			}
		}
		// return their best match for a friend.
		res.json(match);
		// add user to the friendsArray.
		friends.push(req.body);
	});
};
