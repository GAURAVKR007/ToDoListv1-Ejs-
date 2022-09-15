
function getDate(){
var today = new Date();

var options = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric"
}

 return today.toLocaleDateString("hi-IN",options);

}

exports.getDate = getDate;      // Export the required function in this module   [We can create as many function as we want in one module]

// this getDay function is for only study purpose . this has no use in website

module.exports.getDay = function (){
var today = new Date();

var options = {
  weekday: "long"
};

 return today.toLocaleDateString("hi-IN",options);

};
