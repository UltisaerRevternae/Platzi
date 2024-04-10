"use strict";
/**
 * How to implement Builder
 *
 * 1. Declare base builder base class/interface who will define
 *  the general steps for build products, each builder must
 *  implement functionality for these steps.
 *
 * Base builder:
 *  - CarProductionLine
 *
 * Build steps:
 *  - setAirBags
 *  - setColor
 *  - setEdition
 *  - resetProductionLine
 *
 * 2. Implement concrete builders subclasses that offer different
 *  versions of the build steps. These builders could create
 *  concrete products or base ones. Depends on what we need.
 *
 *  SedanProductionLine: build() -> {Mastodon|Rhino}Car | Car
 *  RhinoProductionLine: build() -> {Mastodon|Rhino}Car | Car
 *
 * 3. Implement Product classes, these ones could not inherit/implement
 *  from base class/interface.
 *
 *  For the problem we will make the builder returns the
 *  product base class.
 *
 *  Base product:
 *    - BaseCar
 *
 *  Concrete products:
 *    - MastodonSedanCar
 *    - RhinoSedanCar
 *
 * 4. Implement director class, this one will know the build
 *  process for each product, so we can create specific
 *  configurations for the products.
 *
 *  Product representations
 *      constructCvtEdition
 *      constructSignatureEdition
 *
 * Notes:
 *  The code of this file has some modifications with the version showed
 *  during the course.
 *
 *  Change 1: In resetProductionLine function, the cars to be created
 *  must be sedan cars (mastodon sedan, rhino sedan), since the production
 *  line don't create sedans, but receive and personalize sedan cars to
 *  match different versions (CVT, Signature).
 *
 *  Change 2: Renamed model to modelToCustomizeInLine as the param to be passed
 *  in production line object creation.
 *
 *  Change 3: Renamed Car class to BaseCar.
 *
 *  Change 4: Renamed class MastodonCar to MastodonSedanCar.
 *
 *  Change 5: Renamed class RhinoCar to RhinoSedanCar.
 *
 *  Change 6: Delete function setModel and remove function call at build
 *  method in SedanProductionLine class. Make the model assignment directly
 *  in Mastodon and Rhino car classes constructors.
 *
 *  Change 7: Add more comments to code.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
var SedanProductionLine = /** @class */ (function () {
    /**
     * For now the production line class is composed (creating) by the
     * different sedan car models. Ideally the line should receive the
     * sedan car instance as param, an aggregation relationship.
     *
     * @param modelToCustomizeInLine car model to customize in the line
     */
    function SedanProductionLine(_a) {
        var modelToCustomizeInLine = _a.modelToCustomizeInLine;
        this.setModelToBuild(modelToCustomizeInLine);
        this.resetProductionLine();
    }
    /**
     * @override setAirBags() method
     * @param howMany airbags number
     * @returns production line working instance
     */
    SedanProductionLine.prototype.setAirBags = function (howMany) {
        this.sedanCar.airBags = howMany;
        return this;
    };
    /**
     * @override setColor() method
     * @param color car color
     * @returns production line working instance
     */
    SedanProductionLine.prototype.setColor = function (color) {
        this.sedanCar.color = color;
        return this;
    };
    /**
     * @override setEdition() method
     * @param  edition car edition
     * @returns production line working instance
     */
    SedanProductionLine.prototype.setEdition = function (edition) {
        this.sedanCar.edition = edition;
        return this;
    };
    /**
     * @param {string} model car model to be build in line
     */
    SedanProductionLine.prototype.setModelToBuild = function (model) {
        this.modelToCustomizeInLine = model;
    };
    /**
     * Emulates how the production line receives a new
     * sedan car to be customized for match the desired editions.
     */
    SedanProductionLine.prototype.resetProductionLine = function () {
        this.sedanCar =
            this.modelToCustomizeInLine === 'mastodon'
                ? new MastodonSedanCar()
                : new RhinoSedanCar();
    };
    /**
     * Restart production line and returns customized sedan car instance.
     *
     * For this case we decided to set BaseCar as return type.
     *
     * @returns base car instance
     */
    SedanProductionLine.prototype.build = function () {
        var sedanCar = this.sedanCar;
        this.resetProductionLine();
        return sedanCar;
    };
    return SedanProductionLine;
}());
// STEP 3
var BaseCar = /** @class */ (function () {
    function BaseCar() {
        this._airBags = 2;
        this._color = 'black';
    }
    Object.defineProperty(BaseCar.prototype, "airBags", {
        /**
         * Base car airBags attribute setter
         * @param howMany airbags number
         */
        set: function (howMany) {
            this._airBags = howMany;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseCar.prototype, "color", {
        /**
         * Base car color attribute setter
         * @param color car color from a specific list
         */
        set: function (color) {
            this._color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseCar.prototype, "edition", {
        /**
         * Base car edition attribute setter
         * @param {string} edition car edition
         */
        set: function (edition) {
            this._edition = edition;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseCar.prototype, "model", {
        /**
         * Base car model attribute setter
         * @param {string} model car model (sedan/hatchbak)
         */
        set: function (model) {
            this._model = model;
        },
        enumerable: false,
        configurable: true
    });
    return BaseCar;
}());
var MastodonSedanCar = /** @class */ (function (_super) {
    __extends(MastodonSedanCar, _super);
    function MastodonSedanCar() {
        var _this = _super.call(this) || this;
        _this.model = 'sedan';
        return _this;
    }
    return MastodonSedanCar;
}(BaseCar));
var RhinoSedanCar = /** @class */ (function (_super) {
    __extends(RhinoSedanCar, _super);
    function RhinoSedanCar() {
        var _this = _super.call(this) || this;
        _this.model = 'sedan';
        return _this;
    }
    return RhinoSedanCar;
}(BaseCar));
// STEP 4
var Director = /** @class */ (function () {
    function Director() {
    }
    /**
     * Set the production line to be used for the director to build editions
     * @param productionLine contains concrete customization steps implementation
     */
    Director.prototype.setProductionLine = function (productionLine) {
        this.productionLine = productionLine;
    };
    /**
     * CVT Edition customization steps
     */
    Director.prototype.constructCvtEdition = function () {
        this.productionLine
            .setAirBags(4)
            .setColor('blue')
            .setEdition('cvt');
    };
    /**
     * Signature Edition customization steps
     */
    Director.prototype.constructSignatureEdition = function () {
        this.productionLine
            .setAirBags(8)
            .setColor('gray')
            .setEdition('signature');
    };
    return Director;
}());
exports.Director = Director;
/**
 * Main function
 */
function appBuilder(director) {
    console.log('--- [TS] Calling appBuilder ---\n');
    if (!director) {
        console.log('--- No director provided ---');
        return;
    }
    var mastodonSedanProductionLine = new SedanProductionLine({
        modelToCustomizeInLine: 'mastodon',
    });
    director.setProductionLine(mastodonSedanProductionLine);
    director.constructCvtEdition();
    var mastodonSedanCvt = mastodonSedanProductionLine.build();
    console.log('--- Mastodon Sedan CVT ---\n');
    console.log(mastodonSedanCvt);
    director.constructSignatureEdition();
    var mastodonSedanSignature = mastodonSedanProductionLine.build();
    console.log('\n--- Mastodon Sedan Signature ---\n');
    console.log(mastodonSedanSignature);
}
appBuilder(new Director());
