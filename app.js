window.onload = function () {
  L.mapquest.key = "HmPt0Wv0aL5Bdx5Dt9U0wGH4mEQWOIG9";

  let map = L.mapquest.map("map", {
    center: [39.750307, -104.999472],
    layers: L.mapquest.tileLayer("map"),
    zoom: 14,
  });

  var directions = L.mapquest.directions();
  directions.route({
    start: "350 5th Ave, New York, NY 10118",
    end: "One Liberty Plaza, New York, NY 10006",
    options: {
      timeOverage: 25,
      maxRoutes: 3,
    },
  });
};
