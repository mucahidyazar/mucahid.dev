"use strict";
(() => {
var exports = {};
exports.id = 159;
exports.ids = [159];
exports.modules = {

/***/ 65631:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _case_studies_mocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60815);

const api = (req, res)=>{
    const params = req.query;
    const city = params?.city;
    const cities = _case_studies_mocks__WEBPACK_IMPORTED_MODULE_0__/* .CITIES_NAME_LAT_LON.map */ .w.map((cityArray)=>cityArray[0].toLocaleLowerCase().includes(city.toLocaleLowerCase()) ? cityArray : null).filter(Boolean);
    return res.status(200).json({
        cities
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [815], () => (__webpack_exec__(65631)));
module.exports = __webpack_exports__;

})();