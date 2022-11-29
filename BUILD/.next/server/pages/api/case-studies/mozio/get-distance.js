"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 39346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ get_distance)
});

// EXTERNAL MODULE: ./src/case-studies/mocks/cities-name-lat-lon.ts
var cities_name_lat_lon = __webpack_require__(60815);
;// CONCATENATED MODULE: ./src/utils/getDistanceBetweenTwoPoints.ts
// source of algorithm: https://www.geodatasource.com/developers/javascript
function getDistanceBetweenTwoPoints(cord1, cord2, unit = "km") {
    if (cord1.lat === cord2.lat && cord1.lon === cord2.lon) {
        return 0;
    }
    const radlat1 = Math.PI * cord1.lat / 180;
    const radlat2 = Math.PI * cord2.lat / 180;
    const theta = cord1.lon - cord2.lon;
    const radtheta = Math.PI * theta / 180;
    let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
        dist = 1;
    }
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    if (unit === "km") {
        dist = dist * 1.609344;
    }
    return dist;
}

;// CONCATENATED MODULE: ./src/pages/api/case-studies/mozio/get-distance.ts


const api = (req, res)=>{
    const params = req.query;
    const origin = params?.origin;
    const destination = params?.destination;
    if (!origin || !destination) {
        return res.status(400).json({
            message: "Origin and destination are required"
        });
    }
    const originCity = cities_name_lat_lon/* CITIES_NAME_LAT_LON.find */.w.find((cityArray)=>cityArray[0].toLocaleLowerCase().includes(origin.toLocaleLowerCase()));
    const destinationCity = cities_name_lat_lon/* CITIES_NAME_LAT_LON.find */.w.find((cityArray)=>cityArray[0].toLocaleLowerCase().includes(destination.toLocaleLowerCase()));
    const originLat = originCity[1];
    const originLon = originCity[2];
    const destinationLat = destinationCity[1];
    const destinationLon = destinationCity[2];
    const distance = getDistanceBetweenTwoPoints({
        lat: originLat,
        lon: originLon
    }, {
        lat: destinationLat,
        lon: destinationLon
    });
    if (distance) {
        return res.status(200).json({
            distance
        });
    }
    return res.status(400).json({
        message: "Invalid origin or destination"
    });
};
/* harmony default export */ const get_distance = (api);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [815], () => (__webpack_exec__(39346)));
module.exports = __webpack_exports__;

})();