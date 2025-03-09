import {
  BrowserModule,
  DiagramModule,
  RouterModule,
  RouterOutlet,
  platformBrowser,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement
} from "./chunk-UETBI2D6.js";

// src/app/app-routing.module.ts
var routes = [
  {
    path: "diagram",
    loadChildren: () => import("./chunk-YUYCMQNN.js").then((m) => m.DiagramModule)
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/diagram"
  }
];
var AppRoutingModule = class _AppRoutingModule {
  static \u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
};

// src/app/app.component.ts
var AppComponent = class _AppComponent {
  title = "dac";
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], standalone: false, decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterOutlet], styles: ["\n\n.app-container[_ngcontent-%COMP%] {\n  background: crimson;\n}\n/*# sourceMappingURL=app.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app/app.component.ts", lineNumber: 9 });
})();

// src/app/app.module.ts
var AppModule = class _AppModule {
  static \u0275fac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    BrowserModule,
    AppRoutingModule,
    DiagramModule
  ] });
};

// src/main.ts
platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
}).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
