import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxLibService {
    constructor() { }
}
NgxLibService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxLibService.ctorParameters = () => [];
/** @nocollapse */ NgxLibService.ngInjectableDef = defineInjectable({ factory: function NgxLibService_Factory() { return new NgxLibService(); }, token: NgxLibService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxLibComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NgxLibComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-lib-ngx-lib',
                template: `
    <p>
      ngx-lib works!
    </p>
  `
            }] }
];
/** @nocollapse */
NgxLibComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FooterComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
FooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-lib-footer',
                template: "<p>\n  ngx-lib footer works!\n</p>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
FooterComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxLibModule {
}
NgxLibModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NgxLibComponent, FooterComponent],
                imports: [],
                exports: [NgxLibComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxLibService, NgxLibComponent, NgxLibModule, FooterComponent };

//# sourceMappingURL=ngx-lib.js.map