"use strict";
(self["webpackChunkgauzy"] = self["webpackChunkgauzy"] || []).push([[9669],{

/***/ 9669:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ LocationFormModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(56383);
/* harmony import */ var _ng_maps_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33502);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(19223);
/* harmony import */ var _modules_country_country_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(93818);
/* harmony import */ var _maps_leaflet_leaflet_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48052);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);









let LocationFormModule = /*#__PURE__*/(() => {
  class LocationFormModule {
    static {
      this.ɵfac = function LocationFormModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LocationFormModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: LocationFormModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbSelectModule */ .VcP, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbInputModule */ .pty, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbCheckboxModule */ .Ad8, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbFormFieldModule */ .NeG, _nebular_theme__WEBPACK_IMPORTED_MODULE_3__/* .NbIconModule */ .clu, _ng_maps_google__WEBPACK_IMPORTED_MODULE_4__/* .NgMapsGoogleModule */ .uF, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__/* .TranslateModule */ .h.forChild(), _modules_country_country_module__WEBPACK_IMPORTED_MODULE_6__/* .CountryModule */ .j, _maps_leaflet_leaflet_module__WEBPACK_IMPORTED_MODULE_7__/* .LeafletMapModule */ .q]
      });
    }
  }
  return LocationFormModule;
})();

/***/ }),

/***/ 33502:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uF: () => (/* binding */ NgMapsGoogleModule)
/* harmony export */ });
/* unused harmony exports GOOGLE_MAPS_API_CONFIG, GoogleCircleManager, GoogleComponent, GoogleInfoWindowManager, GoogleMapsAPIWrapper, GoogleMapsMarkerManager, GoogleMapsScriptProtocol, GooglePolygonManager, GooglePolylineManager, GoogleRectangleManager, isValidMarkerIcon */
/* harmony import */ var _Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73014);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(64169);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80189);
/* harmony import */ var _ng_maps_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47254);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52122);








/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
const _c0 = (/* unused pure expression or super */ null && (["*"]));
let GoogleMapsAPIWrapper = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class GoogleMapsAPIWrapper extends MapsApiWrapper {
    constructor(_loader, _zone) {
      super(_loader, _zone);
    }
    createMap(el, center, options) {
      var _this = this;
      return this._zone.runOutsideAngular(/*#__PURE__*/_asyncToGenerator(function* () {
        yield _this._loader.load();
        if (_this._mapResolver) {
          _this._mapResolver(new google.maps.Map(el, {
            center,
            ...options
          }));
        }
        return;
      }));
    }
    setMapOptions(options) {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        const map = yield _this2._api;
        map?.setOptions(options);
      })();
    }
    /**
     * Creates a google map drawing manager with the map context
     */
    createDrawingManager() {
      var _this3 = this;
      return _asyncToGenerator(function* (options = {}, addToMap = true) {
        const map = yield _this3._api;
        if (addToMap) {
          options.map = map;
        }
        return new google.maps.drawing.DrawingManager(options);
      }).apply(this, arguments);
    }
    /**
     * Creates a google map marker with the map context
     */
    createMarker(_x, _x2) {
      var _this4 = this;
      return _asyncToGenerator(function* (position, options, addToMap = true) {
        const map = addToMap ? yield _this4._api : null;
        return new google.maps.Marker({
          position,
          map,
          ...options
        });
      }).apply(this, arguments);
    }
    createInfoWindow(position, options) {
      var _this5 = this;
      return _asyncToGenerator(function* () {
        yield _this5._api;
        if (position === null) {
          return new google.maps.InfoWindow({
            ...options
          });
        } else {
          return new google.maps.InfoWindow({
            position: position,
            ...options
          });
        }
      })();
    }
    /**
     * Creates a google.map.Circle for the current map.
     *
     * @todo check how to improve type casting
     */
    createCircle(center, options) {
      var _this6 = this;
      return _asyncToGenerator(function* () {
        const opt = {
          ...options,
          center,
          map: yield _this6._api
        };
        if (typeof opt.strokePosition === 'string') {
          opt.strokePosition = google.maps.StrokePosition[opt.strokePosition];
        }
        return new google.maps.Circle(opt);
      })();
    }
    /**
     * Creates a google.map.Rectangle for the current map.
     */
    createRectangle(bounds, options) {
      var _this7 = this;
      return _asyncToGenerator(function* () {
        const map = yield _this7._api;
        return new google.maps.Rectangle({
          ...options,
          bounds,
          map
        });
      })();
    }
    createPolyline(options) {
      var _this8 = this;
      return _asyncToGenerator(function* () {
        return _this8.getNativeMap().then(map => {
          const line = new google.maps.Polyline(options);
          if (map) {
            line.setMap(map);
          }
          return line;
        });
      })();
    }
    createPolygon(options) {
      return this.getNativeMap().then(map => {
        const polygon = new google.maps.Polygon(options);
        if (map) {
          polygon.setMap(map);
        }
        return polygon;
      });
    }
    /**
     * Creates a new google.map.Data layer for the current map
     */
    createDataLayer(options) {
      var _this9 = this;
      return _asyncToGenerator(function* () {
        return _this9._api?.then(m => {
          const data = new google.maps.Data(options);
          data.setMap(m);
          return data;
        });
      })();
    }
    /**
     * Determines if given coordinates are insite a Polygon path.
     */
    containsLocation(latLng, polygon) {
      return google.maps.geometry.poly.containsLocation(latLng, polygon);
    }
    /**
     * @fixme typings
     */
    subscribeToMapEvent(eventName) {
      return new Observable(observer => {
        this._api?.then(m => m.addListener(eventName, (...evArgs) => this._zone.run(() => observer.next(evArgs))));
      });
    }
    clearInstanceListeners() {
      this._api?.then(map => {
        google.maps.event.clearInstanceListeners(map);
      });
    }
    setCenter(latLng) {
      var _this0 = this;
      return _asyncToGenerator(function* () {
        return _this0._api?.then(map => map.setCenter(latLng));
      })();
    }
    getZoom() {
      var _this1 = this;
      return _asyncToGenerator(function* () {
        const map = yield _this1._api;
        return map?.getZoom();
      })();
    }
    getBounds() {
      var _this10 = this;
      return _asyncToGenerator(function* () {
        const map = yield _this10._api;
        return map?.getBounds()?.toJSON();
      })();
    }
    getMapTypeId() {
      var _this11 = this;
      return _asyncToGenerator(function* () {
        return _this11._api?.then(map => map.getMapTypeId());
      })();
    }
    setZoom(zoom) {
      var _this12 = this;
      return _asyncToGenerator(function* () {
        _this12._api?.then(map => map.setZoom(zoom));
      })();
    }
    getCenter() {
      var _this13 = this;
      return _asyncToGenerator(function* () {
        const map = yield _this13._api;
        return map?.getCenter()?.toJSON();
      })();
    }
    panTo(latLng) {
      var _this14 = this;
      return _asyncToGenerator(function* () {
        _this14._api?.then(map => map.panTo(latLng));
      })();
    }
    panBy(x, y) {
      var _this15 = this;
      return _asyncToGenerator(function* () {
        _this15._api?.then(map => map.panBy(x, y));
      })();
    }
    fitBounds(latLng, padding) {
      var _this16 = this;
      return _asyncToGenerator(function* () {
        const map = yield _this16._api;
        map?.fitBounds(latLng, padding);
      })();
    }
    panToBounds(latLng, padding) {
      var _this17 = this;
      return _asyncToGenerator(function* () {
        const map = yield _this17._api;
        return map?.panToBounds(latLng, padding);
      })();
    }
    /**
     * Triggers the given event name on the map instance.
     */
    triggerMapEvent(eventName) {
      var _this18 = this;
      return _asyncToGenerator(function* () {
        const map = yield _this18._api;
        if (map) {
          google.maps.event.trigger(map, eventName);
        }
      })();
    }
    _isLatLngBoundsLiteral(bounds) {
      return bounds != null && bounds.extend === undefined;
    }
    static {
      this.ɵfac = function GoogleMapsAPIWrapper_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GoogleMapsAPIWrapper)(i0.ɵɵinject(i1.MapsAPILoader), i0.ɵɵinject(i0.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: GoogleMapsAPIWrapper,
        factory: GoogleMapsAPIWrapper.ɵfac
      });
    }
  }
  return GoogleMapsAPIWrapper;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
function isValidMarkerIcon(marker) {
  if (marker === null) {
    return true;
  } else if (typeof marker === 'string') {
    return true;
  } else if (typeof marker === 'object' && Object.hasOwn(marker, 'url')) {
    return true;
  } else if (typeof marker === 'object' && Object.hasOwn(marker, 'path')) {
    return true;
  } else {
    return false;
  }
}
let GoogleMapsMarkerManager = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class GoogleMapsMarkerManager extends MarkerManager {
    constructor(_mapsWrapper, _zone) {
      super(_mapsWrapper, _zone);
      this._markers = new Map();
    }
    deleteMarker(marker) {
      const m = this._markers.get(marker);
      if (m == null) {
        // marker already deleted
        return;
      } else {
        return this._zone.run(() => {
          m.setMap(null);
          this._markers.delete(marker);
        });
      }
    }
    updateMarkerPosition(marker) {
      if (typeof marker.latitude !== 'number' || typeof marker.longitude !== 'number') {
        return;
      }
      const m = this._markers.get(marker);
      m?.setPosition({
        lat: marker.latitude,
        lng: marker.longitude
      });
    }
    updateTitle(marker) {
      const m = this._markers.get(marker);
      m?.setTitle(marker.title);
    }
    updateLabel(marker) {
      const m = this._markers.get(marker);
      m?.setLabel(marker.label);
    }
    updateDraggable(marker) {
      const m = this._markers.get(marker);
      m?.setDraggable(marker.draggable);
    }
    updateIconLegacy(marker) {
      const m = this._markers.get(marker);
      m?.setIcon(marker.iconUrl);
    }
    updateOpacity(marker) {
      const m = this._markers.get(marker);
      m?.setOpacity(marker.opacity);
    }
    updateVisible(marker) {
      const m = this._markers.get(marker);
      m?.setVisible(marker.visible);
    }
    updateZIndex(marker) {
      const m = this._markers.get(marker);
      m?.setZIndex(marker.zIndex);
    }
    updateClickable(marker) {
      const m = this._markers.get(marker);
      m?.setClickable(marker.clickable);
    }
    updateAnimation(marker) {
      const m = this._markers.get(marker);
      if (typeof marker.animation === 'string') {
        m?.setAnimation(google.maps.Animation[marker.animation]);
      } else {
        m?.setAnimation(marker.animation);
      }
    }
    createEventObservable(eventName, marker) {
      return new Observable(observer => {
        const m = this._markers.get(marker);
        if (typeof eventName === 'string') {
          eventName = [eventName];
        }
        eventName.forEach(event => {
          m?.addListener(event, e => this._zone.run(() => observer.next(e)));
        });
      });
    }
    updateIcon(marker) {
      const m = this._markers.get(marker);
      if (m && isValidMarkerIcon(marker.icon)) {
        m.setIcon(marker.icon);
      }
    }
    static {
      this.ɵfac = function GoogleMapsMarkerManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GoogleMapsMarkerManager)(i0.ɵɵinject(i1.MapsApiWrapper), i0.ɵɵinject(i0.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: GoogleMapsMarkerManager,
        factory: GoogleMapsMarkerManager.ɵfac
      });
    }
  }
  return GoogleMapsMarkerManager;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GoogleCircleManager = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class GoogleCircleManager extends CircleManager {
    constructor(_mapsWrapper, _zone) {
      super(_mapsWrapper, _zone);
    }
    /**
     * @fixme implement commented properties
     */
    addCircle(circle) {
      var _this19 = this;
      return _asyncToGenerator(function* () {
        if (!circle.latitude || !circle.longitude) {
          return;
        }
        _this19._circles.set(circle, _this19._apiWrapper.createCircle({
          lat: circle.latitude,
          lng: circle.longitude
        }, {
          // clickable: circle.clickable,
          // draggable: circle.draggable,
          // editable: circle.editable,
          fillColor: circle.fillColor,
          fillOpacity: circle.fillOpacity,
          radius: circle.radius,
          strokeColor: circle.strokeColor,
          strokeOpacity: circle.strokeOpacity,
          // strokePosition: circle.strokePosition,
          strokeWeight: circle.strokeWeight,
          visible: circle.visible,
          zIndex: circle.zIndex
        }));
      })();
    }
    /**
     * Removes the given circle from the map.
     */
    removeCircle(circle) {
      var _this20 = this;
      return _asyncToGenerator(function* () {
        const c = yield _this20._circles.get(circle);
        c?.setMap(null);
        _this20._circles.delete(circle);
      })();
    }
    /**
     * @todo check how to improve type casting
     * @param circle instance of {@link NgMapsCircleDirective}
     * @param options options for the circle
     */
    setOptions(circle, options) {
      var _this21 = this;
      return _asyncToGenerator(function* () {
        const c = yield _this21._circles.get(circle);
        if (typeof options.strokePosition === 'string') {
          options.strokePosition = google.maps.StrokePosition[options.strokePosition];
        }
        return c?.setOptions(options);
      })();
    }
    getBounds(circle) {
      var _this22 = this;
      return _asyncToGenerator(function* () {
        const c = yield _this22._circles.get(circle);
        if (!c) {
          return null;
        }
        const bounds = c.getBounds();
        return bounds ? bounds.toJSON() : null;
      })();
    }
    getCenter(circle) {
      var _this23 = this;
      return _asyncToGenerator(function* () {
        const c = yield _this23._circles.get(circle);
        const center = c?.getCenter();
        return center ? center.toJSON() : null;
      })();
    }
    getRadius(circle) {
      var _this24 = this;
      return _asyncToGenerator(function* () {
        const c = yield _this24._circles.get(circle);
        return c?.getRadius() ?? null;
      })();
    }
    setCenter(circle) {
      var _this25 = this;
      return _asyncToGenerator(function* () {
        if (!circle.latitude || !circle.longitude) {
          return;
        }
        const c = yield _this25._circles.get(circle);
        c?.setCenter({
          lat: circle.latitude,
          lng: circle.longitude
        });
      })();
    }
    setEditable(circle) {
      var _this26 = this;
      return _asyncToGenerator(function* () {
        const c = yield _this26._circles.get(circle);
        c?.setEditable(circle.editable);
      })();
    }
    setDraggable(circle) {
      var _this27 = this;
      return _asyncToGenerator(function* () {
        const c = yield _this27._circles.get(circle);
        c?.setDraggable(circle.draggable);
      })();
    }
    setVisible(circle) {
      var _this28 = this;
      return _asyncToGenerator(function* () {
        const c = yield _this28._circles.get(circle);
        c?.setVisible(circle.visible);
      })();
    }
    setRadius(circle) {
      var _this29 = this;
      return _asyncToGenerator(function* () {
        const c = yield _this29._circles.get(circle);
        c?.setRadius(circle.radius);
      })();
    }
    createEventObservable(eventName, circle) {
      return new Observable(observer => {
        let listener = null;
        this._circles?.get(circle)?.then(c => {
          listener = c.addListener(eventName, e => this._zone.run(() => observer.next(e)));
        });
        return () => {
          if (listener !== null) {
            listener.remove();
          }
        };
      });
    }
    static {
      this.ɵfac = function GoogleCircleManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GoogleCircleManager)(i0.ɵɵinject(i1.MapsApiWrapper), i0.ɵɵinject(i0.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: GoogleCircleManager,
        factory: GoogleCircleManager.ɵfac
      });
    }
  }
  return GoogleCircleManager;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GooglePolygonManager = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class GooglePolygonManager extends PolygonManager {
    constructor(_mapsWrapper, _zone) {
      super(_mapsWrapper, _zone);
    }
    addPolygon(path) {
      const polygonPromise = this._mapsWrapper.createPolygon({
        clickable: path.clickable,
        draggable: path.draggable,
        editable: path.editable,
        fillColor: path.fillColor,
        fillOpacity: path.fillOpacity,
        geodesic: path.geodesic,
        paths: path.paths,
        strokeColor: path.strokeColor,
        strokeOpacity: path.strokeOpacity,
        strokeWeight: path.strokeWeight,
        visible: path.visible,
        zIndex: path.zIndex
      });
      this._polygons.set(path, polygonPromise);
    }
    updatePolygon(polygon) {
      var _this30 = this;
      return _asyncToGenerator(function* () {
        const item = yield _this30._polygons.get(polygon);
        if (item != null) {
          _this30._zone.run(() => {
            item.setPaths(polygon.paths);
          });
        }
      })();
    }
    setPolygonOptions(path, options) {
      var _this31 = this;
      return _asyncToGenerator(function* () {
        const l = yield _this31._polygons.get(path);
        l?.setOptions(options);
      })();
    }
    deletePolygon(paths) {
      const m = this._polygons.get(paths);
      if (m == null) {
        return Promise.resolve();
      }
      return m.then(l => this._zone.run(() => {
        l.setMap(null);
        this._polygons.delete(paths);
      }));
    }
    createEventObservable(eventName, path) {
      return new Observable(observer => {
        this._polygons.get(path)?.then(l => {
          l.addListener(eventName, e => this._zone.run(() => observer.next(e)));
        });
      });
    }
    static {
      this.ɵfac = function GooglePolygonManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GooglePolygonManager)(i0.ɵɵinject(i1.MapsApiWrapper), i0.ɵɵinject(i0.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: GooglePolygonManager,
        factory: GooglePolygonManager.ɵfac
      });
    }
  }
  return GooglePolygonManager;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GooglePolylineManager = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class GooglePolylineManager extends PolylineManager {
    constructor(_mapsWrapper, _zone) {
      super(_mapsWrapper, _zone);
    }
    _convertPoints(line) {
      return line._getPoints().map(point => ({
        lat: point.latitude,
        lng: point.longitude
      }));
    }
    addPolyline(line) {
      const path = this._convertPoints(line);
      const polylinePromise = this._mapsWrapper.createPolyline({
        clickable: line.clickable,
        draggable: line.draggable,
        editable: line.editable,
        geodesic: line.geodesic,
        strokeColor: line.strokeColor,
        strokeOpacity: line.strokeOpacity,
        strokeWeight: line.strokeWeight,
        visible: line.visible,
        zIndex: line.zIndex,
        icons: line.icons,
        path
      });
      this._polylines.set(line, polylinePromise);
    }
    updatePolylinePoints(line) {
      const path = this._convertPoints(line);
      const m = this._polylines.get(line);
      if (m == null) {
        return Promise.resolve();
      }
      return m.then(l => this._zone.run(() => {
        l.setPath(path);
      }));
    }
    setPolylineOptions(line, options) {
      var _this32 = this;
      return _asyncToGenerator(function* () {
        const l = yield _this32._polylines.get(line);
        l?.setOptions(options);
      })();
    }
    deletePolyline(line) {
      const m = this._polylines.get(line);
      if (m == null) {
        return Promise.resolve();
      }
      return m.then(l => this._zone.run(() => {
        l.setMap(null);
        this._polylines.delete(line);
      }));
    }
    createEventObservable(eventName, line) {
      return new Observable(observer => {
        this._polylines.get(line)?.then(l => {
          l.addListener(eventName, e => this._zone.run(() => observer.next(e)));
        });
      });
    }
    static {
      this.ɵfac = function GooglePolylineManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GooglePolylineManager)(i0.ɵɵinject(i1.MapsApiWrapper), i0.ɵɵinject(i0.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: GooglePolylineManager,
        factory: GooglePolylineManager.ɵfac
      });
    }
  }
  return GooglePolylineManager;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GoogleRectangleManager = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class GoogleRectangleManager extends RectangleManager {
    constructor(_mapsWrapper, _zone) {
      super(_mapsWrapper, _zone);
    }
    addRectangle(rectangle) {
      if (!rectangle.north || !rectangle.east || !rectangle.south || !rectangle.west) {
        return;
      }
      this._rectangles.set(rectangle, this._apiWrapper.createRectangle({
        north: rectangle.north,
        east: rectangle.east,
        south: rectangle.south,
        west: rectangle.west
      }, {
        // clickable: rectangle.clickable,
        // draggable: rectangle.draggable,
        // editable: rectangle.editable,
        fillColor: rectangle.fillColor,
        fillOpacity: rectangle.fillOpacity,
        strokeColor: rectangle.strokeColor,
        strokeOpacity: rectangle.strokeOpacity,
        // strokePosition: rectangle.strokePosition,
        strokeWeight: rectangle.strokeWeight,
        visible: rectangle.visible,
        zIndex: rectangle.zIndex
      }));
    }
    /**
     * Removes the given rectangle from the map.
     */
    removeRectangle(rectangle) {
      var _this33 = this;
      return _asyncToGenerator(function* () {
        return _this33._rectangles.get(rectangle)?.then(r => {
          r.setMap(null);
          _this33._rectangles.delete(rectangle);
        });
      })();
    }
    setOptions(rectangle, options) {
      var _this34 = this;
      return _asyncToGenerator(function* () {
        return _this34._rectangles.get(rectangle)?.then(r => r.setOptions(options));
      })();
    }
    getBounds(rectangle) {
      var _this35 = this;
      return _asyncToGenerator(function* () {
        const r = yield _this35._rectangles.get(rectangle);
        const bounds = r?.getBounds();
        return bounds ? bounds.toJSON() : null;
      })();
    }
    setBounds(rectangle) {
      var _this36 = this;
      return _asyncToGenerator(function* () {
        if (!rectangle.north || !rectangle.east || !rectangle.south || !rectangle.west) {
          return;
        }
        const r = yield _this36._rectangles.get(rectangle);
        r?.setBounds({
          north: rectangle.north,
          east: rectangle.east,
          south: rectangle.south,
          west: rectangle.west
        });
      })();
    }
    setEditable(rectangle) {
      var _this37 = this;
      return _asyncToGenerator(function* () {
        return _this37._rectangles.get(rectangle)?.then(r => r.setEditable(rectangle.editable));
      })();
    }
    setDraggable(rectangle) {
      var _this38 = this;
      return _asyncToGenerator(function* () {
        return _this38._rectangles.get(rectangle)?.then(r => r.setDraggable(rectangle.draggable));
      })();
    }
    setVisible(rectangle) {
      var _this39 = this;
      return _asyncToGenerator(function* () {
        return _this39._rectangles.get(rectangle)?.then(r => r.setVisible(rectangle.visible));
      })();
    }
    createEventObservable(eventName, rectangle) {
      return new Observable(observer => {
        let listener = null;
        this._rectangles.get(rectangle)?.then(r => {
          listener = r.addListener(eventName, e => this._zone.run(() => observer.next(e)));
        });
        return () => {
          if (listener !== null) {
            listener.remove();
          }
        };
      });
    }
    static {
      this.ɵfac = function GoogleRectangleManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GoogleRectangleManager)(i0.ɵɵinject(i1.MapsApiWrapper), i0.ɵɵinject(i0.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: GoogleRectangleManager,
        factory: GoogleRectangleManager.ɵfac
      });
    }
  }
  return GoogleRectangleManager;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GoogleInfoWindowManager = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class GoogleInfoWindowManager extends InfoWindowManager {
    constructor(_mapsWrapper, _zone, _markerManager) {
      super(_mapsWrapper, _zone, _markerManager);
    }
    deleteInfoWindow(infoWindow) {
      var _this40 = this;
      return _asyncToGenerator(function* () {
        const iWindow = yield _this40._infoWindows.get(infoWindow);
        if (iWindow == null) {
          // info window already deleted
          return;
        } else {
          return _this40._zone.run(() => {
            iWindow.close();
            _this40._infoWindows.delete(infoWindow);
          });
        }
      })();
    }
    setPosition(infoWindow) {
      if (!infoWindow.latitude || !infoWindow.longitude) {
        return;
      }
      const i = this._infoWindows.get(infoWindow);
      i?.setPosition({
        lat: infoWindow.latitude,
        lng: infoWindow.longitude
      });
    }
    setZIndex(infoWindow) {
      if (!infoWindow.zIndex) {
        return;
      }
      const i = this._infoWindows.get(infoWindow);
      i?.setZIndex(infoWindow.zIndex);
    }
    open(infoWindow) {
      var _this41 = this;
      return _asyncToGenerator(function* () {
        const w = _this41._infoWindows.get(infoWindow);
        const map = yield _this41._mapsWrapper.getNativeMap();
        if (infoWindow.hostMarker != null) {
          const marker = yield _this41._markerManager.getNativeMarker(infoWindow.hostMarker);
          w?.open(map, marker);
        } else {
          w?.open(map);
        }
      })();
    }
    close(infoWindow) {
      const w = this._infoWindows.get(infoWindow);
      w?.close();
    }
    setOptions(infoWindow, options) {
      const i = this._infoWindows.get(infoWindow);
      i?.setOptions(options);
    }
    addInfoWindow(infoWindow) {
      var _this42 = this;
      return _asyncToGenerator(function* () {
        const options = {
          content: infoWindow.content?.nativeElement,
          maxWidth: infoWindow.maxWidth,
          zIndex: infoWindow.zIndex,
          disableAutoPan: infoWindow.disableAutoPan
        };
        const center = typeof infoWindow.latitude === 'number' && typeof infoWindow.longitude === 'number' ? {
          lat: infoWindow.latitude,
          lng: infoWindow.longitude
        } : null;
        const instance = yield _this42._mapsWrapper.createInfoWindow(center, options);
        _this42._infoWindows.set(infoWindow, instance);
      })();
    }
    /**
     * Creates a Google Maps event listener for the given InfoWindow as an Observable
     */
    createEventObservable(eventName, infoWindow) {
      const i = this._infoWindows.get(infoWindow);
      return new Observable(observer => {
        i?.addListener(eventName, e => this._zone.run(() => observer.next(e)));
      });
    }
    static {
      this.ɵfac = function GoogleInfoWindowManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GoogleInfoWindowManager)(i0.ɵɵinject(i1.MapsApiWrapper), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i1.MarkerManager));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: GoogleInfoWindowManager,
        factory: GoogleInfoWindowManager.ɵfac
      });
    }
  }
  return GoogleInfoWindowManager;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
let GoogleMapsFitBoundsService = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class GoogleMapsFitBoundsService extends FitBoundsService {
    constructor(_loader) {
      super(_loader);
    }
    generateBounds(includeInBounds) {
      if (includeInBounds.size === 0) {
        return new google.maps.LatLngBounds().toJSON();
      } else {
        const bounds = new google.maps.LatLngBounds();
        includeInBounds.forEach(b => bounds.extend(b));
        return bounds.toJSON();
      }
    }
    static {
      this.ɵfac = function GoogleMapsFitBoundsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GoogleMapsFitBoundsService)(i0.ɵɵinject(i1.MapsAPILoader));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: GoogleMapsFitBoundsService,
        factory: GoogleMapsFitBoundsService.ɵfac
      });
    }
  }
  return GoogleMapsFitBoundsService;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let GoogleComponent = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class GoogleComponent extends NgMapsViewComponent {
    constructor(_mapsWrapper, _fitBoundsService, _zone) {
      super(_mapsWrapper, _fitBoundsService, _zone);
    }
    _handleMapCenterChange() {
      var _this43 = this;
      return _asyncToGenerator(function* () {
        const s = _this43._mapsWrapper.subscribeToMapEvent('center_changed').subscribe(() => {
          _this43._mapsWrapper.getCenter().then(center => {
            if (center) {
              _this43.latitude = center.lat;
              _this43.longitude = center.lng;
              _this43.centerChange.emit({
                lat: _this43.latitude,
                lng: _this43.longitude
              });
            }
          });
        });
        _this43.subscription.add(s);
      })();
    }
    _handleBoundsChange() {
      const s = this._mapsWrapper.subscribeToMapEvent('bounds_changed').subscribe(() => {
        this._mapsWrapper.getBounds().then(bounds => {
          this.boundsChange.emit(bounds);
        });
      });
      this.subscription.add(s);
    }
    _handleMapTypeIdChange() {
      var _this44 = this;
      return _asyncToGenerator(function* () {
        const s = _this44._mapsWrapper.subscribeToMapEvent('maptypeid_changed').subscribe(() => {
          _this44._mapsWrapper.getMapTypeId().then(mapTypeId => {
            _this44.mapTypeIdChange.emit(mapTypeId);
          });
        });
        _this44.subscription.add(s);
      })();
    }
    _handleMapZoomChange() {
      const s = this._mapsWrapper.subscribeToMapEvent('zoom_changed').subscribe(() => {
        this._mapsWrapper.getZoom().then(z => {
          this.zoom = z ?? 8;
          this.zoomChange.emit(z);
        });
      });
      this.subscription.add(s);
    }
    _handleIdleEvent() {
      const s = this._mapsWrapper.subscribeToMapEvent('idle').subscribe(() => {
        this.idle.emit(void 0);
      });
      this.subscription.add(s);
    }
    _handleTilesLoadedEvent() {
      const s = this._mapsWrapper.subscribeToMapEvent('tilesloaded').subscribe(() => this.tilesLoaded.emit(void 0));
      this.subscription.add(s);
    }
    _handleMapMouseEvents() {
      const events = [{
        name: 'click',
        emitter: this.mapClick
      }, {
        name: 'rightclick',
        emitter: this.mapRightClick
      }, {
        name: 'dblclick',
        emitter: this.mapDblClick
      }];
      events.forEach(e => {
        const s = this._mapsWrapper.subscribeToMapEvent(e.name).subscribe(event => {
          const value = {
            coords: {
              lat: event[0].latLng.lat(),
              lng: event[0].latLng.lng()
            }
          };
          e.emitter.emit(value);
        });
        this.subscription.add(s);
      });
    }
    static {
      this.ɵfac = function GoogleComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GoogleComponent)(i0.ɵɵdirectiveInject(i1.MapsApiWrapper), i0.ɵɵdirectiveInject(i1.FitBoundsService), i0.ɵɵdirectiveInject(i0.NgZone));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
        type: GoogleComponent,
        selectors: [["map-view"]],
        standalone: false,
        features: [i0.ɵɵProvidersFeature([{
          provide: MapsApiWrapper,
          useClass: GoogleMapsAPIWrapper
        }, {
          provide: FitBoundsService,
          useClass: GoogleMapsFitBoundsService
        }, {
          provide: MarkerManager,
          useClass: GoogleMapsMarkerManager
        }, {
          provide: CircleManager,
          useClass: GoogleCircleManager
        }, {
          provide: PolygonManager,
          useClass: GooglePolygonManager
        }, {
          provide: PolylineManager,
          useClass: GooglePolylineManager
        }, {
          provide: RectangleManager,
          useClass: GoogleRectangleManager
        }, {
          provide: InfoWindowManager,
          useClass: GoogleInfoWindowManager
        }]), i0.ɵɵInheritDefinitionFeature],
        ngContentSelectors: _c0,
        decls: 4,
        vars: 0,
        consts: [["container", ""], [1, "map-container-inner"], [1, "map-content"]],
        template: function GoogleComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelement(0, "div", 1, 0);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
          }
        },
        styles: [".map-container-inner[_ngcontent-%COMP%]{width:inherit;height:inherit}.map-content[_ngcontent-%COMP%]{display:none}"]
      });
    }
  }
  return GoogleComponent;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
var GoogleMapsScriptProtocol = /*#__PURE__*/function (GoogleMapsScriptProtocol) {
  GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTP"] = 1] = "HTTP";
  GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["HTTPS"] = 2] = "HTTPS";
  GoogleMapsScriptProtocol[GoogleMapsScriptProtocol["AUTO"] = 3] = "AUTO";
  return GoogleMapsScriptProtocol;
}(GoogleMapsScriptProtocol || {});
/**
 * Token for the config of google maps module
 * Please provide an object of type {@link GoogleModuleOptions}.
 */
const GOOGLE_MAPS_API_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .nKC('angular-google-maps GOOGLE_MAPS_API_CONFIG');
let GoogleMapsScriptLoader = /*#__PURE__*/(() => {
  class GoogleMapsScriptLoader extends _ng_maps_core__WEBPACK_IMPORTED_MODULE_1__/* .MapsAPILoader */ .D3 {
    constructor(config, document) {
      super();
      this._config = new rxjs__WEBPACK_IMPORTED_MODULE_2__/* .ReplaySubject */ .m(1);
      this._SCRIPT_ID = 'GoogleMapsApiScript';
      this.callbackName = `LazyMapsAPILoader`;
      if (config instanceof Promise) {
        config.then(c => {
          this.configure(c);
        });
      } else if (typeof config === 'object') {
        this.configure(config);
      }
      this._document = document;
      this._window = this._document.defaultView;
    }
    /**
     * If no configuration is provided at load time you can use this function to provide configuration at any time.
     * Loading scripts will be postponed until a configuration is provided
     *
     * @param config - {@link GoogleModuleOptions} configuration needed for bootstrapping
     */
    configure(config) {
      this._config.next(config);
      this._config.complete();
    }
    load() {
      if (this._window.google && this._window.google.maps) {
        // Google maps already loaded on the page
        return Promise.resolve();
      } else if (this._scriptLoadingPromise) {
        return this._scriptLoadingPromise;
      } else {
        this._scriptLoadingPromise = this.checkScriptElement();
        return this._scriptLoadingPromise;
      }
    }
    checkScriptElement() {
      var _this45 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        let scriptElement = _this45._document?.getElementById(_this45._SCRIPT_ID);
        if (scriptElement == null) {
          scriptElement = yield _this45.createScriptElement();
        }
        return _this45.assignScriptLoadingPromise(scriptElement);
      })();
    }
    assignScriptLoadingPromise(scriptElement) {
      this._document?.body.appendChild(scriptElement);
      return new Promise((resolve, reject) => {
        // FIXME
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        this._window[this.callbackName] = () => resolve();
        // FIXME
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        scriptElement.onerror = error => reject(error);
      });
    }
    createScriptElement() {
      var _this46 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        if (!_this46._document) {
          throw new Error('Document is not defined');
        }
        const script = _this46._document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.defer = true;
        script.id = _this46._SCRIPT_ID;
        script.src = yield _this46._getScriptSrc(_this46.callbackName);
        return script;
      })();
    }
    _getScriptSrc(callbackName) {
      var _this47 = this;
      return (0,_Users_test_startups_ever_gauzy_node_modules_angular_builders_custom_webpack_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)(function* () {
        const config = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__/* .firstValueFrom */ ._)(_this47._config);
        if (!config) {
          throw new Error('No configuration provided');
        }
        const protocolType = config && config.protocol || GoogleMapsScriptProtocol.HTTPS;
        let protocol;
        switch (protocolType) {
          case GoogleMapsScriptProtocol.AUTO:
            protocol = '';
            break;
          case GoogleMapsScriptProtocol.HTTP:
            protocol = 'http:';
            break;
          case GoogleMapsScriptProtocol.HTTPS:
            protocol = 'https:';
            break;
        }
        const hostAndPath = config.hostAndPath || 'maps.googleapis.com/maps/api/js';
        const queryParams = {
          v: config.apiVersion || 'quarterly',
          callback: callbackName,
          key: config.apiKey,
          client: config.clientId,
          channel: config.channel,
          libraries: config.libraries,
          region: config.region,
          language: config.language
        };
        const params = Object.keys(queryParams).filter(k => queryParams[k] != null).filter(k =>
        // remove empty arrays
        !Array.isArray(queryParams[k]) || Array.isArray(queryParams[k]) && queryParams[k].length > 0).map(k => {
          // join arrays as comma seperated strings
          const i = queryParams[k];
          if (Array.isArray(i)) {
            return {
              key: k,
              value: i.join(',')
            };
          }
          return {
            key: k,
            value: queryParams[k]
          };
        }).map(
        // FIXME
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        entry => `${entry.key}=${entry.value}`).join('&');
        return `${protocol}//${hostAndPath}?${params}`;
      })();
    }
    static {
      this.ɵfac = function GoogleMapsScriptLoader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || GoogleMapsScriptLoader)(_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵinject"] */ .KVO(GOOGLE_MAPS_API_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵinject"] */ .KVO(_angular_common__WEBPACK_IMPORTED_MODULE_5__/* .DOCUMENT */ .q));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: GoogleMapsScriptLoader,
        factory: GoogleMapsScriptLoader.ɵfac
      });
    }
  }
  return GoogleMapsScriptLoader;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgMapsGoogleModule = /*#__PURE__*/(() => {
  class NgMapsGoogleModule {
    /**
     * configure the NgMapsGoogleModule with a value
     * @param config
     */
    static forRoot(config) {
      return {
        ngModule: NgMapsGoogleModule,
        providers: [{
          provide: GOOGLE_MAPS_API_CONFIG,
          useValue: config
        }]
      };
    }
    /**
     * configure the NgMapsGoogleModule with a factory
     * @param factory
     */
    static forRootFactory(factory, deps) {
      return {
        ngModule: NgMapsGoogleModule,
        providers: [{
          provide: GOOGLE_MAPS_API_CONFIG,
          useFactory: factory,
          deps
        }]
      };
    }
    static {
      this.ɵfac = function NgMapsGoogleModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgMapsGoogleModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: NgMapsGoogleModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        providers: [{
          provide: _ng_maps_core__WEBPACK_IMPORTED_MODULE_1__/* .MapsAPILoader */ .D3,
          useClass: GoogleMapsScriptLoader
        }, {
          provide: _ng_maps_core__WEBPACK_IMPORTED_MODULE_1__/* .MAP_PROVIDER */ .Du,
          useValue: 'GoogleMaps'
        }]
      });
    }
  }
  return NgMapsGoogleModule;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of google
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-maps-google.mjs.map

/***/ }),

/***/ 47254:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D3: () => (/* binding */ MapsAPILoader),
/* harmony export */   Du: () => (/* binding */ MAP_PROVIDER)
/* harmony export */ });
/* unused harmony exports CircleManager, FitBoundsAccessor, FitBoundsService, InfoWindowManager, MapsApiWrapper, MarkerManager, NgMapsCircleDirective, NgMapsCoreModule, NgMapsFitBoundsDirective, NgMapsInfoWindowComponent, NgMapsMarkerComponent, NgMapsPolygonDirective, NgMapsPolyline, NgMapsPolylinePoint, NgMapsRectangleDirective, NgMapsViewComponent, NoOpMapsAPILoader, PolygonManager, PolylineManager, RectangleManager, ScriptLoaderService, isGoogleMaps, isHereMaps */
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);







const _c0 = (/* unused pure expression or super */ null && (["container"]));
const _c1 = (/* unused pure expression or super */ null && (["*"]));
const _c2 = (/* unused pure expression or super */ null && (["content"]));
let MapsAPILoader = /*#__PURE__*/(() => {
  class MapsAPILoader {
    static {
      this.ɵfac = function MapsAPILoader_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MapsAPILoader)();
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjectable"] */ .jDH({
        token: MapsAPILoader,
        factory: MapsAPILoader.ɵfac
      });
    }
  }
  return MapsAPILoader;
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Class to implement when you what to be able to make it work with the auto fit bounds feature
 * of AGM.
 */
class FitBoundsAccessor {}
/**
 * The FitBoundsService is responsible for computing the bounds of the a single map.
 */
let FitBoundsService = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class FitBoundsService {
    constructor(loader) {
      this._boundsChangeSampleTime$ = new BehaviorSubject(200);
      this._includeInBounds$ = new BehaviorSubject(new Map());
      this.bounds$ = from(loader.load()).pipe(mergeMap(() => this._includeInBounds$), sample(this._boundsChangeSampleTime$.pipe(switchMap(time => timer(0, time)))), map(includeInBounds => this.generateBounds(includeInBounds)), shareReplay(1));
    }
    addToBounds(latLng) {
      const id = this._createIdentifier(latLng);
      if (this._includeInBounds$.value.has(id)) {
        return;
      }
      const bounds = this._includeInBounds$.value;
      bounds.set(id, latLng);
      this._includeInBounds$.next(bounds);
    }
    removeFromBounds(latLng) {
      const bounds = this._includeInBounds$.value;
      bounds.delete(this._createIdentifier(latLng));
      this._includeInBounds$.next(bounds);
    }
    changeFitBoundsChangeSampleTime(timeMs) {
      this._boundsChangeSampleTime$.next(timeMs);
    }
    getBounds$() {
      return this.bounds$;
    }
    _createIdentifier(latLng) {
      return `${latLng.lat}+${latLng.lng}`;
    }
    static {
      this.ɵfac = function FitBoundsService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || FitBoundsService)(i0.ɵɵinject(MapsAPILoader));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: FitBoundsService,
        factory: FitBoundsService.ɵfac
      });
    }
  }
  return FitBoundsService;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MapsApiWrapper = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class MapsApiWrapper {
    constructor(_loader, _zone) {
      this._loader = _loader;
      this._zone = _zone;
      this._api = new Promise(resolve => {
        this._mapResolver = resolve;
      });
    }
    getNativeMap() {
      var _this = this;
      return _asyncToGenerator(function* () {
        return _this._api;
      })();
    }
    static {
      this.ɵfac = function MapsApiWrapper_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MapsApiWrapper)(i0.ɵɵinject(MapsAPILoader), i0.ɵɵinject(i0.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: MapsApiWrapper,
        factory: MapsApiWrapper.ɵfac
      });
    }
  }
  return MapsApiWrapper;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * NgMapsViewComponent renders a Google Map.
 * **Important note**: To be able see a map in the browser, you have to define a height for the
 * element `map-view`.
 *
 * @example
 * <map-view [latitude]="lat" [longitude]="lng" [zoom]="zoom"></map-view>
 */
let NgMapsViewComponent = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class NgMapsViewComponent {
    constructor(_mapsWrapper, _fitBoundsService, _zone) {
      this._mapsWrapper = _mapsWrapper;
      this._fitBoundsService = _fitBoundsService;
      this._zone = _zone;
      /**
       * The longitude that defines the center of the map.
       */
      this.longitude = 0;
      /**
       * The latitude that defines the center of the map.
       */
      this.latitude = 0;
      /**
       * The zoom level of the map. The default zoom level is 8.
       */
      this.zoom = 8;
      /**
       * Enables/disables if map is draggable.
       */
      this.draggable = true;
      /**
       * Enables/disables zoom and center on double click. Enabled by default.
       */
      this.disableDoubleClickZoom = false;
      /**
       * Enables/disables all default UI of the Google map. Please note: When the map is created, this
       * value cannot get updated.
       */
      this.disableDefaultUI = false;
      /**
       * If false, disables scrollwheel zooming on the map. The scrollwheel is enabled by default.
       */
      this.scrollwheel = true;
      /**
       * If false, prevents the map from being controlled by the keyboard. Keyboard shortcuts are
       * enabled by default.
       */
      this.keyboardShortcuts = true;
      /**
       * The enabled/disabled state of the Zoom control.
       */
      this.zoomControl = true;
      /**
       * Styles to apply to each of the default map types. Note that for Satellite/Hybrid and Terrain
       * modes, these styles will only apply to labels and geometry.
       */
      this.styles = [];
      /**
       * When true and the latitude and/or longitude values changes, the Google Maps panTo method is
       * used to
       * center the map. See: https://developers.google.com/maps/documentation/javascript/reference#Map
       */
      this.usePanning = false;
      /**
       * Sets the viewport to contain the given bounds.
       * If this option to `true`, the bounds get automatically computed from all elements that use the {@link NgMapsFitBounds} directive.
       */
      this.fitBounds = false;
      /**
       * The initial enabled/disabled state of the Scale control. This is disabled by default.
       */
      this.scaleControl = true;
      /**
       * The initial enabled/disabled state of the Map type control.
       */
      this.mapTypeControl = true;
      /**
       * The initial enabled/disabled state of the Pan control.
       */
      this.panControl = false;
      /**
       * The initial enabled/disabled state of the Rotate control.
       */
      this.rotateControl = false;
      /**
       * The initial enabled/disabled state of the Fullscreen control.
       */
      this.fullscreenControl = false;
      /**
       * The map mapTypeId. Defaults to 'roadmap'.
       */
      this.mapTypeId = 'roadmap';
      this._layerInstance = new Map();
      /**
       * When false, map icons are not clickable. A map icon represents a point of interest,
       * also known as a POI. By default map icons are clickable.
       */
      this.clickableIcons = true;
      /**
       * This setting controls how gestures on the map are handled.
       * Allowed values:
       * - 'cooperative' (Two-finger touch gestures pan and zoom the map. One-finger touch gestures are not handled by the map.)
       * - 'greedy'      (All touch gestures pan or zoom the map.)
       * - 'none'        (The map cannot be panned or zoomed by user gestures.)
       * - 'auto'        [default] (Gesture handling is either cooperative or greedy, depending on whether the page is scrollable or not.
       */
      this.gestureHandling = 'auto';
      /**
       * Controls the automatic switching behavior for the angle of incidence of
       * the map. The only allowed values are 0 and 45. The value 0 causes the map
       * to always use a 0° overhead view regardless of the zoom level and
       * viewport. The value 45 causes the tilt angle to automatically switch to
       * 45 whenever 45° imagery is available for the current zoom level and
       * viewport, and switch back to 0 whenever 45° imagery is not available
       * (this is the default behavior). 45° imagery is only available for
       * satellite and hybrid map types, within some locations, and at some zoom
       * levels. Note: getTilt returns the current tilt angle, not the value
       * specified by this option. Because getTilt and this option refer to
       * different things, do not bind() the tilt property; doing so may yield
       * unpredictable effects. (Default of AGM is 0 (disabled). Enable it with value 45.)
       */
      this.tilt = 0;
      this.subscription = new Subscription();
      /**
       * This event emitter gets emitted when the user clicks on the map (but not when they click on a
       * marker or infoWindow).
       */
      this.mapClick = new EventEmitter();
      /**
       * This event emitter gets emitted when the user right-clicks on the map (but not when they click
       * on a marker or infoWindow).
       */
      this.mapRightClick = new EventEmitter();
      /**
       * This event emitter gets emitted when the user double-clicks on the map (but not when they click
       * on a marker or infoWindow).
       */
      this.mapDblClick = new EventEmitter();
      /**
       * This event emitter is fired when the map center changes.
       */
      this.centerChange = new EventEmitter();
      /**
       * This event is fired when the viewport bounds have changed.
       */
      this.boundsChange = new EventEmitter();
      /**
       * This event is fired when the mapTypeId property changes.
       */
      this.mapTypeIdChange = new EventEmitter();
      /**
       * This event is fired when the map becomes idle after panning or zooming.
       */
      this.idle = new EventEmitter();
      /**
       * This event is fired when the zoom level has changed.
       */
      this.zoomChange = new EventEmitter();
      /**
       * This event is fired when the google map is fully initialized.
       * You get the google.maps.Map instance as a result of this EventEmitter.
       */
      this.mapReady = new EventEmitter();
      /**
       * This event is fired when the visible tiles have finished loading.
       */
      this.tilesLoaded = new EventEmitter();
    }
    /**
     * Map option attributes that can change over time
     */
    static {
      this._mapOptionsAttributes = ['disableDoubleClickZoom', 'scrollwheel', 'draggable', 'draggableCursor', 'draggingCursor', 'keyboardShortcuts', 'zoomControl', 'zoomControlOptions', 'styles', 'streetViewControl', 'streetViewControlOptions', 'zoom', 'mapTypeControl', 'mapTypeControlOptions', 'minZoom', 'maxZoom', 'panControl', 'panControlOptions', 'rotateControl', 'rotateControlOptions', 'fullscreenControl', 'fullscreenControlOptions', 'scaleControl', 'scaleControlOptions', 'mapTypeId', 'clickableIcons', 'gestureHandling', 'tilt'];
    }
    /** @internal */
    ngOnInit() {
      this._initMapInstance(this.container?.nativeElement);
    }
    _initMapInstance(el) {
      var _this2 = this;
      return _asyncToGenerator(function* () {
        yield _this2._mapsWrapper.createMap(el, {
          lat: _this2.latitude || 0,
          lng: _this2.longitude || 0
        }, {
          zoom: _this2.zoom,
          minZoom: _this2.minZoom,
          maxZoom: _this2.maxZoom,
          disableDefaultUI: _this2.disableDefaultUI,
          disableDoubleClickZoom: _this2.disableDoubleClickZoom,
          scrollwheel: _this2.scrollwheel,
          backgroundColor: _this2.backgroundColor,
          draggable: _this2.draggable,
          draggableCursor: _this2.draggableCursor,
          draggingCursor: _this2.draggingCursor,
          keyboardShortcuts: _this2.keyboardShortcuts,
          styles: _this2.styles,
          zoomControl: _this2.zoomControl,
          zoomControlOptions: _this2.zoomControlOptions,
          streetViewControl: _this2.streetViewControl,
          streetViewControlOptions: _this2.streetViewControlOptions,
          scaleControl: _this2.scaleControl,
          scaleControlOptions: _this2.scaleControlOptions,
          mapTypeControl: _this2.mapTypeControl,
          mapTypeControlOptions: _this2.mapTypeControlOptions,
          panControl: _this2.panControl,
          panControlOptions: _this2.panControlOptions,
          rotateControl: _this2.rotateControl,
          rotateControlOptions: _this2.rotateControlOptions,
          fullscreenControl: _this2.fullscreenControl,
          fullscreenControlOptions: _this2.fullscreenControlOptions,
          mapTypeId: _this2.mapTypeId,
          clickableIcons: _this2.clickableIcons,
          gestureHandling: _this2.gestureHandling,
          tilt: _this2.tilt
        });
        const map = yield _this2._mapsWrapper.getNativeMap();
        _this2.mapReady.emit(map);
        // register event listeners
        _this2._handleMapCenterChange();
        _this2._handleMapZoomChange();
        _this2._handleMapMouseEvents();
        _this2._handleBoundsChange();
        _this2._handleMapTypeIdChange();
        _this2._handleTilesLoadedEvent();
        _this2._handleIdleEvent();
      })();
    }
    _handleIdleEvent() {
      throw new Error('Method not implemented.');
    }
    _handleTilesLoadedEvent() {
      throw new Error('Method not implemented.');
    }
    _handleMapTypeIdChange() {
      throw new Error('Method not implemented.');
    }
    _handleBoundsChange() {
      throw new Error('Method not implemented.');
    }
    _handleMapMouseEvents() {
      throw new Error('Method not implemented.');
    }
    _handleMapZoomChange() {
      throw new Error('Method not implemented.');
    }
    _handleMapCenterChange() {
      throw new Error('Method not implemented.');
    }
    /** @internal */
    ngOnDestroy() {
      // unsubscribe all registered observable subscriptions
      this.subscription.unsubscribe();
      // remove all listeners from the map instance
      this._mapsWrapper.clearInstanceListeners();
      if (this._fitBoundsSubscription) {
        this._fitBoundsSubscription.unsubscribe();
      }
    }
    /* @internal */
    ngOnChanges(changes) {
      this._updateMapOptionsChanges(changes);
      this._updatePosition(changes);
      this._layerChanges(changes);
    }
    _updateMapOptionsChanges(changes) {
      const options = {};
      const optionKeys = Object.keys(changes).filter(k => NgMapsViewComponent._mapOptionsAttributes.includes(k));
      optionKeys.forEach(k => {
        options[k] = changes[k].currentValue;
      });
      return this._mapsWrapper.setMapOptions(options);
    }
    /**
     * @todo google specific
     * @param changes
     * @protected
     */
    _layerChanges(changes) {
      var _this3 = this;
      return _asyncToGenerator(function* () {
        if (changes.layers) {
          const map = yield _this3._mapsWrapper.getNativeMap();
          const layers = Array.isArray(_this3.layers) ? _this3.layers : [_this3.layers];
          layers.forEach(layer => {
            if (layer && !_this3._layerInstance.has(layer)) {
              const i = new google.maps[layer]();
              // @todo typings
              i.setMap(map);
              _this3._layerInstance.set(layer, i);
            }
          });
          Array.from(_this3._layerInstance.keys()).forEach(layer => {
            if (!layers.includes(layer)) {
              const i = _this3._layerInstance.get(layer);
              i?.setMap(null);
              _this3._layerInstance.delete(layer);
            }
          });
        }
      })();
    }
    /**
     * Triggers a resize event on the google map instance.
     * When recenter is true, the of the google map gets called with the current lat/lng values or fitBounds value to recenter the map.
     * Returns a promise that gets resolved after the event was triggered.
     */
    triggerResize(recenter = true) {
      var _this4 = this;
      // Note: When we would trigger the resize event and show the map in the same turn (which is a
      // common case for triggering a resize event), then the resize event would not
      // work (to show the map), so we trigger the event in a timeout.
      return new Promise(resolve => {
        setTimeout(/*#__PURE__*/_asyncToGenerator(function* () {
          yield _this4._mapsWrapper.triggerMapEvent('resize');
          if (recenter) {
            _this4.fitBounds != null ? _this4._fitBounds() : _this4._setCenter();
          }
          resolve();
        }));
      });
    }
    _updatePosition(changes) {
      var _this5 = this;
      return _asyncToGenerator(function* () {
        if (changes.latitude == null && changes.longitude == null && !changes.fitBounds) {
          // no position update needed
          return;
        }
        // we prefer fitBounds in changes
        if ('fitBounds' in changes) {
          yield _this5._fitBounds();
          return;
        }
        if (typeof _this5.latitude === 'string') {
          _this5.latitude = parseFloat(_this5.latitude);
        }
        if (typeof _this5.longitude === 'string') {
          _this5.longitude = parseFloat(_this5.longitude);
        }
        const center = yield _this5._mapsWrapper.getCenter();
        if (!(typeof _this5.latitude !== 'number' || typeof _this5.longitude !== 'number') && _this5.latitude !== center?.lat && _this5.longitude !== center?.lng) {
          yield _this5._setCenter();
          return;
        }
      })();
    }
    _setCenter() {
      const newCenter = {
        lat: this.latitude,
        lng: this.longitude
      };
      if (this.usePanning) {
        return this._mapsWrapper.panTo(newCenter);
      } else {
        return this._mapsWrapper.setCenter(newCenter);
      }
    }
    _fitBounds() {
      var _this6 = this;
      return _asyncToGenerator(function* () {
        switch (_this6.fitBounds) {
          case true:
            _this6._subscribeToFitBoundsUpdates();
            break;
          case false:
            if (_this6._fitBoundsSubscription) {
              _this6._fitBoundsSubscription.unsubscribe();
            }
            break;
          default:
            if (_this6._fitBoundsSubscription) {
              _this6._fitBoundsSubscription.unsubscribe();
            }
            return _this6._updateBounds(_this6.fitBounds);
        }
      })();
    }
    _subscribeToFitBoundsUpdates() {
      this._zone.runOutsideAngular(() => {
        this._fitBoundsSubscription = this._fitBoundsService.getBounds$().subscribe(b => this._zone.run(() => this._updateBounds(b)));
      });
    }
    _updateBounds(bounds) {
      var _this7 = this;
      return _asyncToGenerator(function* () {
        if (bounds != null) {
          /**
           * await map to not update bounds till map is initialized
           */
          yield _this7._mapsWrapper.getNativeMap();
          if (_this7.usePanning) {
            return _this7._mapsWrapper.panToBounds(bounds, _this7.boundsPadding);
          } else {
            return _this7._mapsWrapper.fitBounds(bounds, _this7.boundsPadding);
          }
        }
      })();
    }
    static {
      this.ɵfac = function NgMapsViewComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgMapsViewComponent)(i0.ɵɵdirectiveInject(MapsApiWrapper), i0.ɵɵdirectiveInject(FitBoundsService), i0.ɵɵdirectiveInject(i0.NgZone));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
        type: NgMapsViewComponent,
        selectors: [["ng-component"]],
        viewQuery: function NgMapsViewComponent_Query(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 7);
          }
          if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.container = _t.first);
          }
        },
        inputs: {
          longitude: "longitude",
          latitude: "latitude",
          zoom: "zoom",
          minZoom: "minZoom",
          maxZoom: "maxZoom",
          draggable: "draggable",
          disableDoubleClickZoom: "disableDoubleClickZoom",
          disableDefaultUI: "disableDefaultUI",
          scrollwheel: "scrollwheel",
          backgroundColor: "backgroundColor",
          draggableCursor: "draggableCursor",
          draggingCursor: "draggingCursor",
          keyboardShortcuts: "keyboardShortcuts",
          zoomControl: "zoomControl",
          zoomControlOptions: "zoomControlOptions",
          styles: "styles",
          usePanning: "usePanning",
          streetViewControl: "streetViewControl",
          streetViewControlOptions: "streetViewControlOptions",
          fitBounds: "fitBounds",
          boundsPadding: "boundsPadding",
          scaleControl: "scaleControl",
          scaleControlOptions: "scaleControlOptions",
          mapTypeControl: "mapTypeControl",
          mapTypeControlOptions: "mapTypeControlOptions",
          panControl: "panControl",
          panControlOptions: "panControlOptions",
          rotateControl: "rotateControl",
          rotateControlOptions: "rotateControlOptions",
          fullscreenControl: "fullscreenControl",
          fullscreenControlOptions: "fullscreenControlOptions",
          mapTypeId: "mapTypeId",
          layers: "layers",
          clickableIcons: "clickableIcons",
          gestureHandling: "gestureHandling",
          tilt: "tilt"
        },
        outputs: {
          mapClick: "mapClick",
          mapRightClick: "mapRightClick",
          mapDblClick: "mapDblClick",
          centerChange: "centerChange",
          boundsChange: "boundsChange",
          mapTypeIdChange: "mapTypeIdChange",
          idle: "idle",
          zoomChange: "zoomChange",
          mapReady: "mapReady",
          tilesLoaded: "tilesLoaded"
        },
        standalone: false,
        features: [i0.ɵɵNgOnChangesFeature],
        ngContentSelectors: _c1,
        decls: 4,
        vars: 0,
        consts: [["container", ""], [1, "map-container-inner"], [1, "map-content"]],
        template: function NgMapsViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelement(0, "div", 1, 0);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
          }
        },
        styles: [".map-container-inner[_ngcontent-%COMP%]{width:inherit;height:inherit}.map-content[_ngcontent-%COMP%]{display:none}"]
      });
    }
  }
  return NgMapsViewComponent;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let MarkerManager = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class MarkerManager {
    constructor(_mapsWrapper, _zone) {
      this._mapsWrapper = _mapsWrapper;
      this._zone = _zone;
      this._markers = new Map();
    }
    addMarker(marker) {
      var _this8 = this;
      return _asyncToGenerator(function* () {
        if (typeof marker.latitude !== 'number' || typeof marker.longitude !== 'number') {
          return;
        }
        const m = yield _this8._mapsWrapper.createMarker({
          lat: marker.latitude,
          lng: marker.longitude
        },
        // TODO typings
        {
          label: marker.label,
          draggable: marker.draggable,
          icon: marker.icon ?? marker.iconUrl,
          opacity: marker.opacity,
          optimized: marker.optimized,
          visible: marker.visible,
          zIndex: marker.zIndex,
          title: marker.title,
          clickable: marker.clickable,
          animation: typeof marker.animation === 'string' ? google.maps.Animation[marker.animation] : marker.animation
        });
        _this8._markers.set(marker, m);
      })();
    }
    getNativeMarker(marker) {
      return this._markers.get(marker);
    }
    static {
      this.ɵfac = function MarkerManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || MarkerManager)(i0.ɵɵinject(MapsApiWrapper), i0.ɵɵinject(i0.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: MarkerManager,
        factory: MarkerManager.ɵfac
      });
    }
  }
  return MarkerManager;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let InfoWindowManager = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class InfoWindowManager {
    constructor(_mapsWrapper, _zone, _markerManager) {
      this._mapsWrapper = _mapsWrapper;
      this._zone = _zone;
      this._markerManager = _markerManager;
      this._infoWindows = new Map();
    }
    static {
      this.ɵfac = function InfoWindowManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || InfoWindowManager)(i0.ɵɵinject(MapsApiWrapper), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(MarkerManager));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: InfoWindowManager,
        factory: InfoWindowManager.ɵfac
      });
    }
  }
  return InfoWindowManager;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let infoWindowId = 0;
/**
 * NgMapsInfoWindowComponent renders a info window inside a {@link NgMapsMarkerComponent} or standalone.
 *
 * ### Example
 * ```typescript
 * import { Component } from '@angular/core';
 *
 * @Component({
 *  selector: 'my-map-cmp',
 *  styles: [`
 *    map-view {
 *      height: 300px;
 *    }
 * `],
 *  template: `
 *    <map-view [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *      <map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
 *        <map-info-window [disableAutoPan]="true">
 *          Hi, this is the content of the <strong>info window</strong>
 *        </map-info-window>
 *      </map-marker>
 *    </map-view>
 *  `
 * })
 * ```
 */
let NgMapsInfoWindowComponent = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class NgMapsInfoWindowComponent {
    // @todo how to add correct typings?
    constructor(_infoWindowManager, elementRef) {
      this._infoWindowManager = _infoWindowManager;
      this.elementRef = elementRef;
      /**
       * Sets the open state for the InfoWindow. You can also call the open() and close() methods.
       */
      this.isOpen = false;
      /**
       * Emits an event when the info window is closed.
       */
      this.infoWindowClose = new EventEmitter();
      this._infoWindowAddedToManager = false;
      this._id = (infoWindowId++).toString();
    }
    static {
      this._infoWindowOptionsInputs = ['disableAutoPan', 'maxWidth'];
    }
    ngOnInit() {
      this._infoWindowManager.addInfoWindow(this).then(() => {
        this._infoWindowAddedToManager = true;
        this._updateOpenState();
        this._registerEventListeners();
      });
    }
    /** @internal */
    ngOnChanges(changes) {
      if (!this._infoWindowAddedToManager) {
        return;
      }
      if ((changes.latitude || changes.longitude) && typeof this.latitude === 'number' && typeof this.longitude === 'number') {
        this._infoWindowManager.setPosition(this);
      }
      if (changes.zIndex) {
        this._infoWindowManager.setZIndex(this);
      }
      if (changes.isOpen) {
        this._updateOpenState();
      }
      this._setInfoWindowOptions(changes);
    }
    _registerEventListeners() {
      this._infoWindowManager.createEventObservable('closeclick', this).subscribe(() => {
        this.isOpen = false;
        this.infoWindowClose.emit();
      });
    }
    _updateOpenState() {
      this.isOpen ? this.open() : this.close();
    }
    _setInfoWindowOptions(changes) {
      const options = {};
      const optionKeys = Object.keys(changes).filter(k => NgMapsInfoWindowComponent._infoWindowOptionsInputs.includes(k));
      optionKeys.forEach(k => {
        options[k] = changes[k].currentValue;
      });
      this._infoWindowManager.setOptions(this, options);
    }
    /**
     * Opens the info window.
     */
    open(event) {
      return this._infoWindowManager.open(this, event);
    }
    /**
     * Closes the info window.
     */
    close() {
      var _this9 = this;
      return _asyncToGenerator(function* () {
        yield _this9._infoWindowManager.close(_this9);
        return _this9.infoWindowClose.emit();
      })();
    }
    /** @internal */
    id() {
      return this._id;
    }
    /** @internal */
    toString() {
      return `NgMapsInfoWindowComponent-${this._id.toString()}`;
    }
    /** @internal */
    ngOnDestroy() {
      this._infoWindowManager.deleteInfoWindow(this);
    }
    static {
      this.ɵfac = function NgMapsInfoWindowComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgMapsInfoWindowComponent)(i0.ɵɵdirectiveInject(InfoWindowManager), i0.ɵɵdirectiveInject(i0.ElementRef));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
        type: NgMapsInfoWindowComponent,
        selectors: [["map-info-window"]],
        viewQuery: function NgMapsInfoWindowComponent_Query(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵviewQuery(_c2, 7);
          }
          if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.content = _t.first);
          }
        },
        inputs: {
          latitude: "latitude",
          longitude: "longitude",
          disableAutoPan: "disableAutoPan",
          zIndex: "zIndex",
          maxWidth: "maxWidth",
          isOpen: "isOpen"
        },
        outputs: {
          infoWindowClose: "infoWindowClose"
        },
        standalone: false,
        features: [i0.ɵɵNgOnChangesFeature],
        ngContentSelectors: _c1,
        decls: 3,
        vars: 0,
        consts: [["content", ""], [1, "info-window-content"]],
        template: function NgMapsInfoWindowComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 1, 0);
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd();
          }
        },
        encapsulation: 2
      });
    }
  }
  return NgMapsInfoWindowComponent;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let markerId = 0;
/**
 * NgMapsMarkerComponent renders a map marker inside a {@link NgMapsViewComponent}.
 *
 * @example
 * <agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
 *               <agm-marker [latitude]="lat" [longitude]="lng" label="M"></agm-marker>
 * </agm-map>
 */
let NgMapsMarkerComponent = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class NgMapsMarkerComponent {
    constructor(markerManager) {
      this.markerManager = markerManager;
      /**
       * If true, the marker can be dragged. Default value is false.
       */
      // eslint-disable-next-line @angular-eslint/no-input-rename
      this.draggable = false;
      this.icon = null;
      /**
       * If true, the marker is visible
       */
      this.visible = true;
      /**
       * Whether to automatically open the child info window when the marker is clicked.
       */
      this.openInfoWindow = true;
      /**
       * The marker's opacity between 0.0 and 1.0.
       */
      this.opacity = 1;
      /**
       * Marker optimize flag. If it is false then it prevent duplicate rendering.
       * Default it is true
       */
      this.optimized = true;
      /**
       * All markers are displayed on the map in order of their zIndex, with higher values displaying in
       * front of markers with lower values. By default, markers are displayed according to their
       * vertical position on screen, with lower markers appearing in front of markers further up the
       * screen.
       */
      this.zIndex = 1;
      /**
       * If true, the marker can be clicked. Default value is true.
       */
      // eslint-disable-next-line @angular-eslint/no-input-rename
      this.clickable = true;
      /**
       * This event emitter gets emitted when the user clicks on the marker.
       */
      this.markerClick = new EventEmitter();
      /**
       * This event is fired when the user rightclicks on the marker.
       */
      this.markerRightClick = new EventEmitter();
      /**
       * This event is fired when the user starts dragging the marker.
       */
      this.dragStart = new EventEmitter();
      /**
       * This event is repeatedly fired while the user drags the marker.
       */
      this.drag = new EventEmitter();
      /**
       * This event is fired when the user stops dragging the marker.
       */
      this.dragEnd = new EventEmitter();
      /**
       * This event is fired when the user mouses over the marker.
       */
      this.mouseOver = new EventEmitter();
      /**
       * This event is fired when the user mouses outside the marker.
       */
      this.mouseOut = new EventEmitter();
      /**
       * @internal
       */
      this.infoWindow = new QueryList();
      this._markerAddedToManger = false;
      this.subscription = new Subscription();
      this._fitBoundsDetails$ = new ReplaySubject(1);
      this._id = (markerId++).toString();
    }
    /**
     *  @internal
     */
    ngAfterContentInit() {
      this.handleInfoWindowUpdate();
      this.infoWindow.changes.subscribe(() => this.handleInfoWindowUpdate());
    }
    handleInfoWindowUpdate() {
      if (this.infoWindow.length > 1) {
        throw new Error('Expected no more than one info window.');
      }
      this.infoWindow.forEach(marker => {
        marker.hostMarker = this;
      });
    }
    /**
     * @internal
     */
    ngOnChanges(changes) {
      if (typeof this.latitude === 'string') {
        this.latitude = Number(this.latitude);
      }
      if (typeof this.longitude === 'string') {
        this.longitude = Number(this.longitude);
      }
      if (typeof this.latitude !== 'number' || typeof this.longitude !== 'number') {
        return;
      }
      if (!this._markerAddedToManger) {
        this.markerManager.addMarker(this).then(() => {
          this._updateFitBoundsDetails();
          this._markerAddedToManger = true;
          this._addEventListeners();
        });
        return;
      }
      if (changes.latitude || changes.longitude) {
        this.markerManager.updateMarkerPosition(this);
        this._updateFitBoundsDetails();
      }
      if (changes.title) {
        this.markerManager.updateTitle(this);
      }
      if (changes.label) {
        this.markerManager.updateLabel(this);
      }
      if (changes.draggable) {
        this.markerManager.updateDraggable(this);
      }
      if (changes.iconUrl) {
        this.markerManager.updateIconLegacy(this);
      }
      if (changes.icon) {
        this.markerManager.updateIcon(this);
      }
      if (changes.opacity) {
        this.markerManager.updateOpacity(this);
      }
      if (changes.visible) {
        this.markerManager.updateVisible(this);
      }
      if (changes.zIndex) {
        this.markerManager.updateZIndex(this);
      }
      if (changes.clickable) {
        this.markerManager.updateClickable(this);
      }
      if (changes.animation) {
        this.markerManager.updateAnimation(this);
      }
    }
    /**
     * @internal
     */
    getFitBoundsDetails$() {
      return this._fitBoundsDetails$.asObservable();
    }
    _updateFitBoundsDetails() {
      if (this.latitude && this.longitude) {
        this._fitBoundsDetails$.next({
          latLng: {
            lat: this.latitude,
            lng: this.longitude
          }
        });
      }
    }
    _addEventListeners() {
      const cs = this.markerManager.createEventObservable(['click', 'pointerdown'], this).subscribe({
        next: event => {
          if (this.openInfoWindow) {
            this.infoWindow.forEach(infoWindow => infoWindow.open(event));
          }
          this.markerClick.emit(this);
        }
      });
      this.subscription.add(cs);
      const rc = this.markerManager.createEventObservable('rightclick', this).subscribe(() => {
        this.markerRightClick.emit();
      });
      this.subscription.add(rc);
      const ds = this.markerManager.createEventObservable('dragstart', this).subscribe(e => {
        this.dragStart.emit(e);
      });
      this.subscription.add(ds);
      const d = this.markerManager.createEventObservable('drag', this).subscribe(e => {
        this.drag.emit(e);
      });
      this.subscription.add(d);
      const dragend = this.markerManager.createEventObservable('dragend', this).subscribe(e => {
        this.dragEnd.emit(e);
      });
      this.subscription.add(dragend);
      const mouseover = this.markerManager.createEventObservable(['mouseover', 'pointerenter'], this).subscribe(e => {
        this.mouseOver.emit(e);
      });
      this.subscription.add(mouseover);
      const mouseout = this.markerManager.createEventObservable(['mouseout', 'pointerleave'], this).subscribe(e => {
        this.mouseOut.emit(e);
      });
      this.subscription.add(mouseout);
    }
    /** @internal */
    id() {
      return this._id;
    }
    /** @internal */
    toString() {
      return `NgMapsMarker-${this._id}`;
    }
    /** @internal */
    ngOnDestroy() {
      this.markerManager.deleteMarker(this);
      // unsubscribe all registered observable subscription
      this.subscription.unsubscribe();
    }
    static {
      this.ɵfac = function NgMapsMarkerComponent_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgMapsMarkerComponent)(i0.ɵɵdirectiveInject(MarkerManager));
      };
    }
    static {
      this.ɵcmp = /* @__PURE__ */i0.ɵɵdefineComponent({
        type: NgMapsMarkerComponent,
        selectors: [["map-marker"]],
        contentQueries: function NgMapsMarkerComponent_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NgMapsInfoWindowComponent, 4);
          }
          if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.infoWindow = _t);
          }
        },
        inputs: {
          latitude: "latitude",
          longitude: "longitude",
          title: "title",
          label: "label",
          draggable: [0, "markerDraggable", "draggable"],
          iconUrl: "iconUrl",
          icon: "icon",
          openInfoWindow: "openInfoWindow",
          opacity: "opacity",
          optimized: "optimized",
          visible: "visible",
          zIndex: "zIndex",
          animation: "animation",
          clickable: [0, "markerClickable", "clickable"]
        },
        outputs: {
          markerClick: "markerClick",
          dragStart: "dragStart",
          drag: "drag",
          dragEnd: "dragEnd",
          mouseOver: "mouseOver",
          mouseOut: "mouseOut",
          markerRightClick: "markerRightClick"
        },
        standalone: false,
        features: [i0.ɵɵProvidersFeature([{
          provide: FitBoundsAccessor,
          useExisting: forwardRef(() => NgMapsMarkerComponent)
        }]), i0.ɵɵNgOnChangesFeature],
        ngContentSelectors: _c1,
        decls: 1,
        vars: 0,
        template: function NgMapsMarkerComponent_Template(rf, ctx) {
          if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
          }
        },
        encapsulation: 2
      });
    }
  }
  return NgMapsMarkerComponent;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * Adds the given directive to the auto fit bounds feature when the value is true.
 * To make it work with you custom AGM component, you also have to implement the {@link FitBoundsAccessor} abstract class.
 *
 * @example
 * <map-marker [mapFitBounds]="true"></map-marker>
 */
let NgMapsFitBoundsDirective = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class NgMapsFitBoundsDirective {
    constructor(_fitBoundsAccessor, _fitBoundsService) {
      this._fitBoundsAccessor = _fitBoundsAccessor;
      this._fitBoundsService = _fitBoundsService;
      /**
       * If the value is true, the element gets added to the bounds of the map.
       * Default: true.
       */
      this.mapFitBounds = true;
      this._latestFitBoundsDetails = null;
      this.subscription = new Subscription();
    }
    /**
     * @internal
     */
    ngOnChanges(changes) {
      this._updateBounds();
    }
    /**
     * @internal
     */
    ngOnInit() {
      this.subscription.add(this._fitBoundsAccessor.getFitBoundsDetails$().pipe(distinctUntilChanged((x, y) => x.latLng.lat === y.latLng.lat && x.latLng.lng === y.latLng.lng)).subscribe({
        next: details => this._updateBounds(details),
        complete: () => this._updateBounds()
      }));
    }
    /**
     * Either the location changed, or visible status changed.
     * Possible state changes are
     * invisible -> visible
     * visible -> invisible
     * visible -> visible (new location)
     */
    _updateBounds(newFitBoundsDetails) {
      // either visibility will change, or location, so remove the old one anyway
      if (this._latestFitBoundsDetails) {
        this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        // don't set latestFitBoundsDetails to null, because we can toggle visibility from
        // true -> false -> true, in which case we still need old value cached here
      }
      if (newFitBoundsDetails) {
        this._latestFitBoundsDetails = newFitBoundsDetails;
      }
      if (this._latestFitBoundsDetails) {
        if (this.mapFitBounds === true) {
          this._fitBoundsService.addToBounds(this._latestFitBoundsDetails.latLng);
        } else {
          this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
        }
      }
    }
    /**
     * @internal
     */
    ngOnDestroy() {
      this.subscription.unsubscribe();
      if (this._latestFitBoundsDetails !== null) {
        this._fitBoundsService.removeFromBounds(this._latestFitBoundsDetails.latLng);
      }
    }
    static {
      this.ɵfac = function NgMapsFitBoundsDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgMapsFitBoundsDirective)(i0.ɵɵdirectiveInject(FitBoundsAccessor, 2), i0.ɵɵdirectiveInject(FitBoundsService));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
        type: NgMapsFitBoundsDirective,
        selectors: [["", "mapFitBounds", ""]],
        inputs: {
          mapFitBounds: "mapFitBounds"
        },
        standalone: false,
        features: [i0.ɵɵNgOnChangesFeature]
      });
    }
  }
  return NgMapsFitBoundsDirective;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let CircleManager = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class CircleManager {
    constructor(_apiWrapper, _zone) {
      this._apiWrapper = _apiWrapper;
      this._zone = _zone;
      this._circles = new Map();
    }
    static {
      this.ɵfac = function CircleManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CircleManager)(i0.ɵɵinject(MapsApiWrapper), i0.ɵɵinject(i0.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: CircleManager,
        factory: CircleManager.ɵfac
      });
    }
  }
  return CircleManager;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgMapsCircleDirective = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class NgMapsCircleDirective {
    constructor(_manager) {
      this._manager = _manager;
      /**
       * Indicates whether this Circle handles mouse events. Defaults to true.
       */
      this.clickable = true;
      /**
       * If set to true, the user can drag this circle over the map. Defaults to false.
       */
      this.draggable = false;
      /**
       * If set to true, the user can edit this circle by dragging the control points shown at
       * the center and around the circumference of the circle. Defaults to false.
       */
      this.editable = false;
      /**
       * The radius in meters on the Earth's surface.
       */
      this.radius = 0;
      /**
       * The stroke position. Defaults to CENTER.
       * This property is not supported on Internet Explorer 8 and earlier.
       *
       * @fixme
       */
      // @Input() strokePosition: google.maps.StrokePosition =
      //   google.maps.StrokePosition.CENTER;
      /**
       * The stroke width in pixels.
       */
      this.strokeWeight = 0;
      /**
       * Whether this circle is visible on the map. Defaults to true.
       */
      this.visible = true;
      /**
       * This event is fired when the circle's center is changed.
       */
      this.centerChange = new EventEmitter();
      /**
       * This event emitter gets emitted when the user clicks on the circle.
       */
      this.circleClick = new EventEmitter();
      /**
       * This event emitter gets emitted when the user clicks on the circle.
       */
      this.circleDblClick = new EventEmitter();
      /**
       * This event is repeatedly fired while the user drags the circle.
       */
      this.drag = new EventEmitter();
      /**
       * This event is fired when the user stops dragging the circle.
       */
      this.dragEnd = new EventEmitter();
      /**
       * This event is fired when the user starts dragging the circle.
       */
      this.dragStart = new EventEmitter();
      /**
       * This event is fired when the DOM mousedown event is fired on the circle.
       */
      this.mouseDown = new EventEmitter();
      /**
       * This event is fired when the DOM mousemove event is fired on the circle.
       */
      this.mouseMove = new EventEmitter();
      /**
       * This event is fired on circle mouseout.
       */
      this.mouseOut = new EventEmitter();
      /**
       * This event is fired on circle mouseover.
       */
      this.mouseOver = new EventEmitter();
      /**
       * This event is fired when the DOM mouseup event is fired on the circle.
       */
      this.mouseUp = new EventEmitter();
      /**
       * This event is fired when the circle's radius is changed.
       */
      this.radiusChange = new EventEmitter();
      /**
       * This event is fired when the circle is right-clicked on.
       */
      this.rightClick = new EventEmitter();
      this._circleAddedToManager = false;
      this.subscription = new Subscription();
    }
    static {
      this._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];
    }
    /** @internal */
    ngOnInit() {
      this._manager.addCircle(this);
      this._circleAddedToManager = true;
      this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
      if (!this._circleAddedToManager) {
        return;
      }
      if (changes.latitude || changes.longitude) {
        this._manager.setCenter(this);
      }
      if (changes.editable) {
        this._manager.setEditable(this);
      }
      if (changes.draggable) {
        this._manager.setDraggable(this);
      }
      if (changes.visible) {
        this._manager.setVisible(this);
      }
      if (changes.radius) {
        this._manager.setRadius(this);
      }
      this._updateCircleOptionsChanges(changes);
    }
    _updateCircleOptionsChanges(changes) {
      const options = {};
      const optionKeys = Object.keys(changes).filter(k => NgMapsCircleDirective._mapOptions.indexOf(k) !== -1);
      optionKeys.forEach(k => {
        options[k] = changes[k].currentValue;
      });
      if (optionKeys.length > 0) {
        this._manager.setOptions(this, options);
      }
    }
    _registerEventListeners() {
      const events = new Map();
      events.set('center_changed', this.centerChange);
      events.set('click', this.circleClick);
      events.set('dblclick', this.circleDblClick);
      events.set('drag', this.drag);
      events.set('dragend', this.dragEnd);
      events.set('dragstart', this.dragStart);
      events.set('mousedown', this.mouseDown);
      events.set('mousemove', this.mouseMove);
      events.set('mouseout', this.mouseOut);
      events.set('mouseover', this.mouseOver);
      events.set('mouseup', this.mouseUp);
      events.set('radius_changed', this.radiusChange);
      events.set('rightclick', this.rightClick);
      events.forEach((eventEmitter, eventName) => {
        this.subscription.add(this._manager.createEventObservable(eventName, this).subscribe(value => {
          switch (eventName) {
            case 'radius_changed':
              this._manager.getRadius(this).then(radius => eventEmitter.emit(radius));
              break;
            case 'center_changed':
              this._manager.getCenter(this).then(center => eventEmitter.emit({
                ...center
              }));
              break;
            default:
              eventEmitter.emit(value);
          }
        }));
      });
    }
    /** @internal */
    ngOnDestroy() {
      this.subscription.unsubscribe();
      this._manager.removeCircle(this);
    }
    /**
     * Gets the LatLngBounds of this Circle.
     */
    getBounds() {
      var _this0 = this;
      return _asyncToGenerator(function* () {
        return _this0._manager.getBounds(_this0);
      })();
    }
    getCenter() {
      var _this1 = this;
      return _asyncToGenerator(function* () {
        return _this1._manager.getCenter(_this1);
      })();
    }
    static {
      this.ɵfac = function NgMapsCircleDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgMapsCircleDirective)(i0.ɵɵdirectiveInject(CircleManager));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
        type: NgMapsCircleDirective,
        selectors: [["map-circle"]],
        inputs: {
          latitude: "latitude",
          longitude: "longitude",
          clickable: "clickable",
          draggable: "draggable",
          editable: "editable",
          fillColor: "fillColor",
          fillOpacity: "fillOpacity",
          radius: "radius",
          strokeColor: "strokeColor",
          strokeOpacity: "strokeOpacity",
          strokeWeight: "strokeWeight",
          visible: "visible",
          zIndex: "zIndex"
        },
        outputs: {
          centerChange: "centerChange",
          circleClick: "circleClick",
          circleDblClick: "circleDblClick",
          drag: "drag",
          dragEnd: "dragEnd",
          dragStart: "dragStart",
          mouseDown: "mouseDown",
          mouseMove: "mouseMove",
          mouseOut: "mouseOut",
          mouseOver: "mouseOver",
          mouseUp: "mouseUp",
          radiusChange: "radiusChange",
          rightClick: "rightClick"
        },
        standalone: false,
        features: [i0.ɵɵNgOnChangesFeature]
      });
    }
  }
  return NgMapsCircleDirective;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PolygonManager = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class PolygonManager {
    constructor(_mapsWrapper, _zone) {
      this._mapsWrapper = _mapsWrapper;
      this._zone = _zone;
      this._polygons = new Map();
    }
    static {
      this.ɵfac = function PolygonManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PolygonManager)(i0.ɵɵinject(MapsApiWrapper), i0.ɵɵinject(i0.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: PolygonManager,
        factory: PolygonManager.ɵfac
      });
    }
  }
  return PolygonManager;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * NgMapsPolygon renders a polygon on a {@link https://ng-maps.github.io/core/components/NgMapsViewComponent.html|NgMapsView}
 */
let NgMapsPolygonDirective = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class NgMapsPolygonDirective {
    constructor(_polygonManager) {
      this._polygonManager = _polygonManager;
      /**
       * Indicates whether this Polygon handles mouse events. Defaults to true.
       */
      this.clickable = true;
      /**
       * If set to true, the user can drag this shape over the map. The geodesic
       * property defines the mode of dragging. Defaults to false.
       */
      // eslint-disable-next-line @angular-eslint/no-input-rename
      this.draggable = false;
      /**
       * If set to true, the user can edit this shape by dragging the control
       * points shown at the vertices and on each segment. Defaults to false.
       */
      this.editable = false;
      /**
       * When true, edges of the polygon are interpreted as geodesic and will
       * follow the curvature of the Earth. When false, edges of the polygon are
       * rendered as straight lines in screen space. Note that the shape of a
       * geodesic polygon may appear to change when dragged, as the dimensions
       * are maintained relative to the surface of the earth. Defaults to false.
       */
      this.geodesic = false;
      /**
       * The ordered sequence of coordinates that designates a closed loop.
       * Unlike polylines, a polygon may consist of one or more paths.
       *  As a result, the paths property may specify one or more arrays of
       * LatLng coordinates. Paths are closed automatically; do not repeat the
       * first vertex of the path as the last vertex. Simple polygons may be
       * defined using a single array of LatLngs. More complex polygons may
       * specify an array of arrays. Any simple arrays are converted into Arrays.
       * Inserting or removing LatLngs from the Array will automatically update
       * the polygon on the map.
       */
      this.paths = [];
      /**
       * This event is fired when the DOM click event is fired on the Polygon.
       */
      this.polyClick = new EventEmitter();
      /**
       * This event is fired when the DOM dblclick event is fired on the Polygon.
       */
      this.polyDblClick = new EventEmitter();
      /**
       * This event is repeatedly fired while the user drags the polygon.
       */
      this.polyDrag = new EventEmitter();
      /**
       * This event is fired when the user stops dragging the polygon.
       */
      this.polyDragEnd = new EventEmitter();
      /**
       * This event is fired when the user starts dragging the polygon.
       */
      this.polyDragStart = new EventEmitter();
      /**
       * This event is fired when the DOM mousedown event is fired on the Polygon.
       */
      this.polyMouseDown = new EventEmitter();
      /**
       * This event is fired when the DOM mousemove event is fired on the Polygon.
       */
      this.polyMouseMove = new EventEmitter();
      /**
       * This event is fired on Polygon mouseout.
       */
      this.polyMouseOut = new EventEmitter();
      /**
       * This event is fired on Polygon mouseover.
       */
      this.polyMouseOver = new EventEmitter();
      /**
       * This event is fired whe the DOM mouseup event is fired on the Polygon
       */
      this.polyMouseUp = new EventEmitter();
      /**
       * This even is fired when the Polygon is right-clicked on.
       */
      this.polyRightClick = new EventEmitter();
      this._polygonAddedToManager = false;
      this.subscription = new Subscription();
    }
    static {
      this._polygonOptionsAttributes = ['clickable', 'draggable', 'editable', 'fillColor', 'fillOpacity', 'geodesic', 'icon', 'map', 'paths', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'visible', 'zIndex', 'draggable', 'editable', 'visible'];
    }
    /** @internal */
    ngAfterContentInit() {
      if (!this._polygonAddedToManager) {
        this._init();
      }
    }
    ngOnChanges(changes) {
      if (!this._polygonAddedToManager) {
        this._init();
        return;
      }
      this._polygonManager.setPolygonOptions(this, this._updatePolygonOptions(changes));
    }
    _init() {
      this._polygonManager.addPolygon(this);
      this._polygonAddedToManager = true;
      this._addEventListeners();
    }
    _addEventListeners() {
      const handlers = [{
        name: 'click',
        handler: ev => this.polyClick.emit(ev)
      }, {
        name: 'dblclick',
        handler: ev => this.polyDblClick.emit(ev)
      }, {
        name: 'drag',
        handler: ev => this.polyDrag.emit(ev)
      }, {
        name: 'dragend',
        handler: ev => this.polyDragEnd.emit(ev)
      }, {
        name: 'dragstart',
        handler: ev => this.polyDragStart.emit(ev)
      }, {
        name: 'mousedown',
        handler: ev => this.polyMouseDown.emit(ev)
      }, {
        name: 'mousemove',
        handler: ev => this.polyMouseMove.emit(ev)
      }, {
        name: 'mouseout',
        handler: ev => this.polyMouseOut.emit(ev)
      }, {
        name: 'mouseover',
        handler: ev => this.polyMouseOver.emit(ev)
      }, {
        name: 'mouseup',
        handler: ev => this.polyMouseUp.emit(ev)
      }, {
        name: 'rightclick',
        handler: ev => this.polyRightClick.emit(ev)
      }];
      handlers.forEach(obj => {
        const os = this._polygonManager.createEventObservable(obj.name, this)
        // FIXME
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .subscribe(obj.handler);
        this.subscription.add(os);
      });
    }
    _updatePolygonOptions(changes) {
      return Object.keys(changes).filter(k => NgMapsPolygonDirective._polygonOptionsAttributes.indexOf(k) !== -1).reduce((obj, k) => {
        obj[k] = changes[k].currentValue;
        return obj;
      }, {});
    }
    /** @internal */
    id() {
      return this._id;
    }
    /** @internal */
    ngOnDestroy() {
      this._polygonManager.deletePolygon(this);
      // unsubscribe all registered observable subscriptions
      this.subscription.unsubscribe();
    }
    static {
      this.ɵfac = function NgMapsPolygonDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgMapsPolygonDirective)(i0.ɵɵdirectiveInject(PolygonManager));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
        type: NgMapsPolygonDirective,
        selectors: [["map-polygon"]],
        inputs: {
          clickable: "clickable",
          draggable: [0, "polyDraggable", "draggable"],
          editable: "editable",
          fillColor: "fillColor",
          fillOpacity: "fillOpacity",
          geodesic: "geodesic",
          paths: "paths",
          strokeColor: "strokeColor",
          strokeOpacity: "strokeOpacity",
          strokeWeight: "strokeWeight",
          visible: "visible",
          zIndex: "zIndex"
        },
        outputs: {
          polyClick: "polyClick",
          polyDblClick: "polyDblClick",
          polyDrag: "polyDrag",
          polyDragEnd: "polyDragEnd",
          polyDragStart: "polyDragStart",
          polyMouseDown: "polyMouseDown",
          polyMouseMove: "polyMouseMove",
          polyMouseOut: "polyMouseOut",
          polyMouseOver: "polyMouseOver",
          polyMouseUp: "polyMouseUp",
          polyRightClick: "polyRightClick"
        },
        standalone: false,
        features: [i0.ɵɵNgOnChangesFeature]
      });
    }
  }
  return NgMapsPolygonDirective;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let PolylineManager = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class PolylineManager {
    constructor(_mapsWrapper, _zone) {
      this._mapsWrapper = _mapsWrapper;
      this._zone = _zone;
      this._polylines = new Map();
    }
    _convertPoints(line) {
      return line._getPoints().map(point => ({
        lat: point.latitude,
        lng: point.longitude
      }));
    }
    static {
      this.ɵfac = function PolylineManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || PolylineManager)(i0.ɵɵinject(MapsApiWrapper), i0.ɵɵinject(i0.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: PolylineManager,
        factory: PolylineManager.ɵfac
      });
    }
  }
  return PolylineManager;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * NgMapsPolylinePoint represents one element of a polyline within a  {@link
 * NgMapsPolyline}
 */
// eslint-disable-next-line @angular-eslint/directive-class-suffix
let NgMapsPolylinePoint = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class NgMapsPolylinePoint {
    constructor() {
      /**
       * This event emitter gets emitted when the position of the point changed.
       */
      this.positionChanged = new EventEmitter();
    }
    ngOnChanges(changes) {
      if (changes.latitude || changes.longitude) {
        const position = {
          lat: changes.latitude ? changes.latitude.currentValue : this.latitude,
          lng: changes.longitude ? changes.longitude.currentValue : this.longitude
        };
        this.positionChanged.emit(position);
      }
    }
    static {
      this.ɵfac = function NgMapsPolylinePoint_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgMapsPolylinePoint)();
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
        type: NgMapsPolylinePoint,
        selectors: [["map-polyline-point"]],
        inputs: {
          latitude: "latitude",
          longitude: "longitude"
        },
        outputs: {
          positionChanged: "positionChanged"
        },
        standalone: false,
        features: [i0.ɵɵNgOnChangesFeature]
      });
    }
  }
  return NgMapsPolylinePoint;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let polylineId = 0;
/**
 * NgMapsPolyline renders a polyline on a {@link https://ng-maps.github.io/core/components/NgMapsViewComponent.html|NgMapsView}
 */
// eslint-disable-next-line @angular-eslint/directive-class-suffix
let NgMapsPolyline = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class NgMapsPolyline {
    constructor(_polylineManager) {
      this._polylineManager = _polylineManager;
      /**
       * Indicates whether this Polyline handles mouse events. Defaults to true.
       */
      this.clickable = true;
      /**
       * If set to true, the user can drag this shape over the map. The geodesic property defines the
       * mode of dragging. Defaults to false.
       */
      // eslint-disable-next-line @angular-eslint/no-input-rename
      this.draggable = false;
      /**
       * If set to true, the user can edit this shape by dragging the control points shown at the
       * vertices and on each segment. Defaults to false.
       */
      this.editable = false;
      /**
       * When true, edges of the polygon are interpreted as geodesic and will follow the curvature of
       * the Earth. When false, edges of the polygon are rendered as straight lines in screen space.
       * Note that the shape of a geodesic polygon may appear to change when dragged, as the dimensions
       * are maintained relative to the surface of the earth. Defaults to false.
       */
      this.geodesic = false;
      /**
       * Whether this polyline is visible on the map. Defaults to true.
       */
      this.visible = true;
      /**
       * This event is fired when the DOM click event is fired on the Polyline.
       */
      this.lineClick = new EventEmitter();
      /**
       * This event is fired when the DOM dblclick event is fired on the Polyline.
       */
      this.lineDblClick = new EventEmitter();
      /**
       * This event is repeatedly fired while the user drags the polyline.
       */
      this.lineDrag = new EventEmitter();
      /**
       * This event is fired when the user stops dragging the polyline.
       */
      this.lineDragEnd = new EventEmitter();
      /**
       * This event is fired when the user starts dragging the polyline.
       */
      this.lineDragStart = new EventEmitter();
      /**
       * This event is fired when the DOM mousedown event is fired on the Polyline.
       */
      this.lineMouseDown = new EventEmitter();
      /**
       * This event is fired when the DOM mousemove event is fired on the Polyline.
       */
      this.lineMouseMove = new EventEmitter();
      /**
       * This event is fired on Polyline mouseout.
       */
      this.lineMouseOut = new EventEmitter();
      /**
       * This event is fired on Polyline mouseover.
       */
      this.lineMouseOver = new EventEmitter();
      /**
       * This event is fired whe the DOM mouseup event is fired on the Polyline
       */
      this.lineMouseUp = new EventEmitter();
      /**
       * This even is fired when the Polyline is right-clicked on.
       */
      this.lineRightClick = new EventEmitter();
      this._polylineAddedToManager = false;
      this.subscription = new Subscription();
      this._id = (polylineId++).toString();
    }
    static {
      this._polylineOptionsAttributes = ['draggable', 'editable', 'visible', 'geodesic', 'strokeColor', 'strokeOpacity', 'strokeWeight', 'zIndex', 'icons'];
    }
    /** @internal */
    ngAfterContentInit() {
      if (this.points) {
        this.points.forEach(point => {
          const subscription = point.positionChanged.subscribe(() => {
            this._polylineManager.updatePolylinePoints(this);
          });
          this.subscription.add(subscription);
        });
        const s = this.points.changes.subscribe(() => this._polylineManager.updatePolylinePoints(this));
        this.subscription.add(s);
      }
      if (!this._polylineAddedToManager) {
        this._init();
      }
      this._polylineManager.updatePolylinePoints(this);
    }
    ngOnChanges(changes) {
      if (!this._polylineAddedToManager) {
        this._init();
        return;
      }
      const options = {};
      const optionKeys = Object.keys(changes).filter(k => NgMapsPolyline._polylineOptionsAttributes.indexOf(k) !== -1);
      optionKeys.forEach(k => options[k] = changes[k].currentValue);
      this._polylineManager.setPolylineOptions(this, options);
    }
    _init() {
      this._polylineManager.addPolyline(this);
      this._polylineAddedToManager = true;
      this._addEventListeners();
    }
    _addEventListeners() {
      const handlers = [{
        name: 'click',
        handler: ev => this.lineClick.emit(ev)
      }, {
        name: 'dblclick',
        handler: ev => this.lineDblClick.emit(ev)
      }, {
        name: 'drag',
        handler: ev => this.lineDrag.emit(ev)
      }, {
        name: 'dragend',
        handler: ev => this.lineDragEnd.emit(ev)
      }, {
        name: 'dragstart',
        handler: ev => this.lineDragStart.emit(ev)
      }, {
        name: 'mousedown',
        handler: ev => this.lineMouseDown.emit(ev)
      }, {
        name: 'mousemove',
        handler: ev => this.lineMouseMove.emit(ev)
      }, {
        name: 'mouseout',
        handler: ev => this.lineMouseOut.emit(ev)
      }, {
        name: 'mouseover',
        handler: ev => this.lineMouseOver.emit(ev)
      }, {
        name: 'mouseup',
        handler: ev => this.lineMouseUp.emit(ev)
      }, {
        name: 'rightclick',
        handler: ev => this.lineRightClick.emit(ev)
      }];
      handlers.forEach(obj => {
        const os = this._polylineManager.createEventObservable(obj.name, this)
        // FIXME
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        .subscribe(obj.handler);
        this.subscription.add(os);
      });
    }
    /** @internal */
    _getPoints() {
      if (this.points) {
        return this.points.toArray();
      } else {
        return [];
      }
    }
    /** @internal */
    id() {
      return this._id;
    }
    /** @internal */
    ngOnDestroy() {
      this._polylineManager.deletePolyline(this);
      // unsubscribe all registered observable subscriptions
      this.subscription.unsubscribe();
    }
    static {
      this.ɵfac = function NgMapsPolyline_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgMapsPolyline)(i0.ɵɵdirectiveInject(PolylineManager));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
        type: NgMapsPolyline,
        selectors: [["map-polyline"]],
        contentQueries: function NgMapsPolyline_ContentQueries(rf, ctx, dirIndex) {
          if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, NgMapsPolylinePoint, 4);
          }
          if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.points = _t);
          }
        },
        inputs: {
          clickable: "clickable",
          draggable: [0, "polylineDraggable", "draggable"],
          editable: "editable",
          geodesic: "geodesic",
          strokeColor: "strokeColor",
          strokeOpacity: "strokeOpacity",
          strokeWeight: "strokeWeight",
          icons: "icons",
          visible: "visible",
          zIndex: "zIndex"
        },
        outputs: {
          lineClick: "lineClick",
          lineDblClick: "lineDblClick",
          lineDrag: "lineDrag",
          lineDragEnd: "lineDragEnd",
          lineDragStart: "lineDragStart",
          lineMouseDown: "lineMouseDown",
          lineMouseMove: "lineMouseMove",
          lineMouseOut: "lineMouseOut",
          lineMouseOver: "lineMouseOver",
          lineMouseUp: "lineMouseUp",
          lineRightClick: "lineRightClick"
        },
        standalone: false,
        features: [i0.ɵɵNgOnChangesFeature]
      });
    }
  }
  return NgMapsPolyline;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let RectangleManager = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class RectangleManager {
    constructor(_apiWrapper, _zone) {
      this._apiWrapper = _apiWrapper;
      this._zone = _zone;
      this._rectangles = new Map();
    }
    static {
      this.ɵfac = function RectangleManager_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || RectangleManager)(i0.ɵɵinject(MapsApiWrapper), i0.ɵɵinject(i0.NgZone));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: RectangleManager,
        factory: RectangleManager.ɵfac
      });
    }
  }
  return RectangleManager;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
let NgMapsRectangleDirective = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class NgMapsRectangleDirective {
    constructor(_manager) {
      this._manager = _manager;
      /**
       * Indicates whether this Rectangle handles mouse events. Defaults to true.
       */
      this.clickable = true;
      /**
       * If set to true, the user can drag this rectangle over the map. Defaults to false.
       */
      // eslint-disable-next-line @angular-eslint/no-input-rename
      this.draggable = false;
      /**
       * If set to true, the user can edit this rectangle by dragging the control points shown at
       * the center and around the circumference of the rectangle. Defaults to false.
       */
      this.editable = false;
      /**
       * The stroke position. Defaults to CENTER.
       * This property is not supported on Internet Explorer 8 and earlier.
       */
      this.strokePosition = 'CENTER';
      /**
       * The stroke width in pixels.
       */
      this.strokeWeight = 0;
      /**
       * Whether this rectangle is visible on the map. Defaults to true.
       */
      this.visible = true;
      /**
       * This event is fired when the rectangle's is changed.
       */
      this.boundsChange = new EventEmitter();
      /**
       * This event emitter gets emitted when the user clicks on the rectangle.
       */
      this.rectangleClick = new EventEmitter();
      /**
       * This event emitter gets emitted when the user clicks on the rectangle.
       */
      this.rectangleDblClick = new EventEmitter();
      /**
       * This event is repeatedly fired while the user drags the rectangle.
       */
      this.drag = new EventEmitter();
      /**
       * This event is fired when the user stops dragging the rectangle.
       */
      this.dragEnd = new EventEmitter();
      /**
       * This event is fired when the user starts dragging the rectangle.
       */
      this.dragStart = new EventEmitter();
      /**
       * This event is fired when the DOM mousedown event is fired on the rectangle.
       */
      this.mouseDown = new EventEmitter();
      /**
       * This event is fired when the DOM mousemove event is fired on the rectangle.
       */
      this.mouseMove = new EventEmitter();
      /**
       * This event is fired on rectangle mouseout.
       */
      this.mouseOut = new EventEmitter();
      /**
       * This event is fired on rectangle mouseover.
       */
      this.mouseOver = new EventEmitter();
      /**
       * This event is fired when the DOM mouseup event is fired on the rectangle.
       */
      this.mouseUp = new EventEmitter();
      /**
       * This event is fired when the rectangle is right-clicked on.
       */
      this.rightClick = new EventEmitter();
      this._rectangleAddedToManager = false;
      this.subscription = new Subscription();
    }
    static {
      this._mapOptions = ['fillColor', 'fillOpacity', 'strokeColor', 'strokeOpacity', 'strokePosition', 'strokeWeight', 'visible', 'zIndex', 'clickable'];
    }
    /** @internal */
    ngOnInit() {
      this._manager.addRectangle(this);
      this._rectangleAddedToManager = true;
      this._registerEventListeners();
    }
    /** @internal */
    ngOnChanges(changes) {
      if (!this._rectangleAddedToManager) {
        return;
      }
      if (changes.north || changes.east || changes.south || changes.west) {
        this._manager.setBounds(this);
      }
      if (changes.editable) {
        this._manager.setEditable(this);
      }
      if (changes.draggable) {
        this._manager.setDraggable(this);
      }
      if (changes.visible) {
        this._manager.setVisible(this);
      }
      this._updateRectangleOptionsChanges(changes);
    }
    _updateRectangleOptionsChanges(changes) {
      const options = {};
      const optionKeys = Object.keys(changes).filter(k => NgMapsRectangleDirective._mapOptions.indexOf(k) !== -1);
      optionKeys.forEach(k => {
        options[k] = changes[k].currentValue;
      });
      if (optionKeys.length > 0) {
        this._manager.setOptions(this, options);
      }
    }
    _registerEventListeners() {
      const events = new Map();
      events.set('bounds_changed', this.boundsChange);
      events.set('click', this.rectangleClick);
      events.set('dblclick', this.rectangleDblClick);
      events.set('drag', this.drag);
      events.set('dragend', this.dragEnd);
      events.set('dragStart', this.dragStart);
      events.set('mousedown', this.mouseDown);
      events.set('mousemove', this.mouseMove);
      events.set('mouseout', this.mouseOut);
      events.set('mouseover', this.mouseOver);
      events.set('mouseup', this.mouseUp);
      events.set('rightclick', this.rightClick);
      events.forEach((eventEmitter, eventName) => {
        this.subscription.add(this._manager.createEventObservable(eventName, this).subscribe(value => {
          switch (eventName) {
            case 'bounds_changed':
              this._manager.getBounds(this).then(bounds => eventEmitter.emit(bounds));
              break;
            default:
              eventEmitter.emit(value);
          }
        }));
      });
    }
    /** @internal */
    ngOnDestroy() {
      this.subscription.unsubscribe();
      this._manager.removeRectangle(this);
    }
    /**
     * Gets the LatLngBounds of this Rectangle.
     */
    getBounds() {
      return this._manager.getBounds(this);
    }
    static {
      this.ɵfac = function NgMapsRectangleDirective_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgMapsRectangleDirective)(i0.ɵɵdirectiveInject(RectangleManager));
      };
    }
    static {
      this.ɵdir = /* @__PURE__ */i0.ɵɵdefineDirective({
        type: NgMapsRectangleDirective,
        selectors: [["map-rectangle"]],
        inputs: {
          north: "north",
          east: "east",
          south: "south",
          west: "west",
          clickable: "clickable",
          draggable: [0, "rectangleDraggable", "draggable"],
          editable: "editable",
          fillColor: "fillColor",
          fillOpacity: "fillOpacity",
          strokeColor: "strokeColor",
          strokeOpacity: "strokeOpacity",
          strokePosition: "strokePosition",
          strokeWeight: "strokeWeight",
          visible: "visible",
          zIndex: "zIndex"
        },
        outputs: {
          boundsChange: "boundsChange",
          rectangleClick: "rectangleClick",
          rectangleDblClick: "rectangleDblClick",
          drag: "drag",
          dragEnd: "dragEnd",
          dragStart: "dragStart",
          mouseDown: "mouseDown",
          mouseMove: "mouseMove",
          mouseOut: "mouseOut",
          mouseOver: "mouseOver",
          mouseUp: "mouseUp",
          rightClick: "rightClick"
        },
        standalone: false,
        features: [i0.ɵɵNgOnChangesFeature]
      });
    }
  }
  return NgMapsRectangleDirective;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/**
 * When using the NoOpMapsAPILoader, the Google Maps API must be added to the page via a `<script>`
 * Tag.
 * It's important that the Google Maps API script gets loaded first on the page.
 */
let NoOpMapsAPILoader = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  let NoOpMapsAPILoader = class NoOpMapsAPILoader extends MapsAPILoader {
    constructor(document) {
      super();
      this._document = document;
      this._window = this._document.defaultView;
    }
    load() {
      return Promise.resolve();
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    configure(config) {}
  };
  NoOpMapsAPILoader = __decorate([__param(0, Inject(DOCUMENT)), __metadata("design:paramtypes", [Object])], NoOpMapsAPILoader);
  return NoOpMapsAPILoader;
})()));
let ScriptLoaderService = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class ScriptLoaderService {
    constructor(document) {
      this.alreadyLoaded = new Map();
      this.document = document;
      this.head = this.document.head;
    }
    observeLoad(element) {
      return new Promise((resolve, reject) => {
        function successHandler(event) {
          const readyState = element.readyState;
          // For IE we have readyState, other browsers just call the load event and we proccede
          if (readyState === 'complete' || readyState === 'loaded' || event.type === 'load') {
            resolve(event);
          }
        }
        function errorHandler(event) {
          reject(event);
        }
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.addEventListener('readystatechange', successHandler);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.addEventListener('load', successHandler);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        element.addEventListener('error', errorHandler);
      });
    }
    createScriptElement(src) {
      const script = document.createElement('script');
      script.src = src;
      script.type = 'text/javascript';
      script.async = true;
      script.defer = true;
      return script;
    }
    // eslint-disable-next-line
    createCSSElement(href) {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.type = 'text/css';
      style.href = href;
      return style;
    }
    /**
     * Dynamically loads the given script
     *
     * @param src The url of the script to load dynamically
     * @param integrity set integrity check value
     * @returns Observable<UIEvent> Observable that will be resolved once the script has been loaded.
     */
    loadScript(src, integrity) {
      if (this.alreadyLoaded.has(src)) {
        return this.alreadyLoaded.get(src);
      } else {
        const script = this.createScriptElement(src);
        const promise = this.observeLoad(script);
        this.head.appendChild(script);
        this.alreadyLoaded.set(src, promise);
        return promise;
      }
    }
    /**
     * Dynamically loads the given CSS file
     *
     * @param href The url of the CSS to load dynamically
     * @returns Observable<UIEvent> Promise that will be resolved once the CSS file has been loaded.
     */
    loadCSS(href) {
      // eslint-disable-line
      if (this.alreadyLoaded.has(href)) {
        return this.alreadyLoaded.get(href);
      } else {
        const style = this.createCSSElement(href);
        const promise = this.observeLoad(style);
        this.head.appendChild(style);
        this.alreadyLoaded.set(href, promise);
        return promise;
      }
    }
    static {
      this.ɵfac = function ScriptLoaderService_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || ScriptLoaderService)(i0.ɵɵinject(DOCUMENT));
      };
    }
    static {
      this.ɵprov = /* @__PURE__ */i0.ɵɵdefineInjectable({
        token: ScriptLoaderService,
        factory: ScriptLoaderService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return ScriptLoaderService;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();
const MAP_PROVIDER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__/* .InjectionToken */ .nKC('Map Provider');
function isGoogleMaps(token) {
  return token === 'GoogleMaps';
}
function isHereMaps(token) {
  return token === 'HereMaps';
}
/**
 * @internal
 */
function coreDirectives() {
  return [NgMapsViewComponent, NgMapsMarkerComponent, NgMapsInfoWindowComponent, NgMapsFitBoundsDirective, NgMapsCircleDirective, NgMapsPolygonDirective, NgMapsPolyline, NgMapsPolylinePoint, NgMapsRectangleDirective];
}
/**
 * The ng-maps core module. Contains all Directives/Services/Pipes
 */
let NgMapsCoreModule = /*#__PURE__*/(/* unused pure expression or super */ null && ((() => {
  class NgMapsCoreModule {
    static {
      this.ɵfac = function NgMapsCoreModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || NgMapsCoreModule)();
      };
    }
    static {
      this.ɵmod = /* @__PURE__ */i0.ɵɵdefineNgModule({
        type: NgMapsCoreModule
      });
    }
    static {
      this.ɵinj = /* @__PURE__ */i0.ɵɵdefineInjector({});
    }
  }
  return NgMapsCoreModule;
})()));
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && void 0;
})();

/*
 * Public API Surface of core
 */
// interfaces

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng-maps-core.mjs.map

/***/ }),

/***/ 48052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ LeafletMapModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _bluehalo_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60642);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(56383);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let LeafletMapModule = /*#__PURE__*/(() => {
  class LeafletMapModule {
    static {
      this.ɵfac = function LeafletMapModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || LeafletMapModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: LeafletMapModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _nebular_theme__WEBPACK_IMPORTED_MODULE_2__/* .NbCardModule */ .lVF, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__/* .TranslateModule */ .h.forChild(), _bluehalo_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__/* .LeafletModule */ .gI]
      });
    }
  }
  return LeafletMapModule;
})();

/***/ }),

/***/ 93818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ CountryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14572);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10936);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55567);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26860);






let CountryModule = /*#__PURE__*/(() => {
  class CountryModule {
    static {
      this.ɵfac = function CountryModule_Factory(__ngFactoryType__) {
        return new (__ngFactoryType__ || CountryModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineNgModule"] */ .$C({
        type: CountryModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__/* ["ɵɵdefineInjector"] */ .G2t({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__/* .CommonModule */ .MD, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .FormsModule */ .YN, _angular_forms__WEBPACK_IMPORTED_MODULE_2__/* .ReactiveFormsModule */ .X1, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_3__/* .NgSelectModule */ .MQ, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__/* .TranslateModule */ .h.forChild()]
      });
    }
  }
  return CountryModule;
})();

/***/ })

}]);