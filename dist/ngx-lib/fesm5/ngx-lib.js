import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxLibService = /** @class */ (function () {
    function NgxLibService() {
    }
    NgxLibService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxLibService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxLibService.ngInjectableDef = defineInjectable({ factory: function NgxLibService_Factory() { return new NgxLibService(); }, token: NgxLibService, providedIn: "root" });
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
        { type: Component, args: [{
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
        { type: Component, args: [{
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
        { type: NgModule, args: [{
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

export { NgxLibService, NgxLibComponent, NgxLibModule, FooterComponent as ɵa };

//# sourceMappingURL=ngx-lib.js.map