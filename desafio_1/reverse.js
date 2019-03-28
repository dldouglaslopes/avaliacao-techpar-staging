module.exports = {
   reverse: function(word) {
      	return word.split("")
				.reduce(function(rev, char){
           					return char + rev;
           				},
           				"");
   }
}