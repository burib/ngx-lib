(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ngx-lib', ['exports', '@angular/core'], factory) :
    (factory((global['ngx-lib'] = {}),global.ng.core));
}(this, (function (exports,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxLibService = /** @class */ (function () {
        function NgxLibService() {
        }
        NgxLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        NgxLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgxLibService.ngInjectableDef = i0.defineInjectable({ factory: function NgxLibService_Factory() { return new NgxLibService(); }, token: NgxLibService, providedIn: "root" });
        return NgxLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxLibComponent = /** @class */ (function () {
        function NgxLibComponent() {
        }
        /**
         * @return {?}
         */
        NgxLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        NgxLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-lib-ngx-lib',
                        template: "\n    <p>\n      ngx-lib works!\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        NgxLibComponent.ctorParameters = function () { return []; };
        return NgxLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var FooterComponent = /** @class */ (function () {
        function FooterComponent() {
        }
        /**
         * @return {?}
         */
        FooterComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        FooterComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'ngx-lib-footer',
                        template: "<p>\n  ngx-lib footer works!\n</p>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        FooterComponent.ctorParameters = function () { return []; };
        return FooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxLibModule = /** @class */ (function () {
        function NgxLibModule() {
        }
        NgxLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [NgxLibComponent, FooterComponent],
                        imports: [],
                        exports: [NgxLibComponent]
                    },] }
        ];
        return NgxLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgxLibService = NgxLibService;
    exports.NgxLibComponent = NgxLibComponent;
    exports.NgxLibModule = NgxLibModule;
    exports.ɵa = FooterComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-lib.umd.js.map