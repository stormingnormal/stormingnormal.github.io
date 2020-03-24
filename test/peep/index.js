var PathFinder = require('geojson-path-finder'), point = require('@turf/helpers').point;
var pathFinder = new PathFinder(geojson);
generatePath = function (theStart, theEnd) {
  var aStart = clone(theStart);
  var aEnd = clone(theEnd);
  var $data = '';
  var $data = pathFinder.findPath(point(aStart), point(aEnd));
  return $data;
};