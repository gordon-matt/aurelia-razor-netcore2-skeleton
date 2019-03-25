System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "es7.decorators",
      "es7.classProperties",
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },
  bundles: {
    "dist/aurelia-build.js": [
      "npm:aurelia-binding@2.2.0.js",
      "npm:aurelia-binding@2.2.0/aurelia-binding.js",
      "npm:aurelia-bootstrapper@2.3.2.js",
      "npm:aurelia-bootstrapper@2.3.2/aurelia-bootstrapper.js",
      "npm:aurelia-dependency-injection@1.4.2.js",
      "npm:aurelia-dependency-injection@1.4.2/aurelia-dependency-injection.js",
      "npm:aurelia-event-aggregator@1.0.2.js",
      "npm:aurelia-event-aggregator@1.0.2/aurelia-event-aggregator.js",
      "npm:aurelia-framework@1.3.1.js",
      "npm:aurelia-framework@1.3.1/aurelia-framework.js",
      "npm:aurelia-history@1.2.0.js",
      "npm:aurelia-history@1.2.0/aurelia-history.js",
      "npm:aurelia-http-client@1.3.0.js",
      "npm:aurelia-http-client@1.3.0/aurelia-http-client.js",
      "npm:aurelia-kendoui-bridge@1.8.0.js",
      "npm:aurelia-kendoui-bridge@1.8.0/common/bindables.js",
      "npm:aurelia-kendoui-bridge@1.8.0/common/constants.js",
      "npm:aurelia-kendoui-bridge@1.8.0/common/control-properties.js",
      "npm:aurelia-kendoui-bridge@1.8.0/common/decorators.js",
      "npm:aurelia-kendoui-bridge@1.8.0/common/util.js",
      "npm:aurelia-kendoui-bridge@1.8.0/config-builder.js",
      "npm:aurelia-kendoui-bridge@1.8.0/index.js",
      "npm:aurelia-kendoui-bridge@1.8.0/version.js",
      "npm:aurelia-loader-default@1.2.0.js",
      "npm:aurelia-loader-default@1.2.0/aurelia-loader-default.js",
      "npm:aurelia-loader@1.0.1.js",
      "npm:aurelia-loader@1.0.1/aurelia-loader.js",
      "npm:aurelia-logging@1.5.1.js",
      "npm:aurelia-logging@1.5.1/aurelia-logging.js",
      "npm:aurelia-metadata@1.0.5.js",
      "npm:aurelia-metadata@1.0.5/aurelia-metadata.js",
      "npm:aurelia-pal-browser@1.8.1.js",
      "npm:aurelia-pal-browser@1.8.1/aurelia-pal-browser.js",
      "npm:aurelia-pal@1.8.1.js",
      "npm:aurelia-pal@1.8.1/aurelia-pal.js",
      "npm:aurelia-path@1.1.2.js",
      "npm:aurelia-path@1.1.2/aurelia-path.js",
      "npm:aurelia-polyfills@1.3.3.js",
      "npm:aurelia-polyfills@1.3.3/aurelia-polyfills.js",
      "npm:aurelia-route-recognizer@1.3.1.js",
      "npm:aurelia-route-recognizer@1.3.1/aurelia-route-recognizer.js",
      "npm:aurelia-router@1.6.3.js",
      "npm:aurelia-router@1.6.3/aurelia-router.js",
      "npm:aurelia-task-queue@1.3.2.js",
      "npm:aurelia-task-queue@1.3.2/aurelia-task-queue.js",
      "npm:aurelia-templating-resources@1.8.0.js",
      "npm:aurelia-templating-resources@1.8.0/abstract-repeater.js",
      "npm:aurelia-templating-resources@1.8.0/analyze-view-factory.js",
      "npm:aurelia-templating-resources@1.8.0/array-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.8.0/attr-binding-behavior.js",
      "npm:aurelia-templating-resources@1.8.0/aurelia-hide-style.js",
      "npm:aurelia-templating-resources@1.8.0/aurelia-templating-resources.js",
      "npm:aurelia-templating-resources@1.8.0/binding-mode-behaviors.js",
      "npm:aurelia-templating-resources@1.8.0/binding-signaler.js",
      "npm:aurelia-templating-resources@1.8.0/compose.js",
      "npm:aurelia-templating-resources@1.8.0/css-resource.js",
      "npm:aurelia-templating-resources@1.8.0/debounce-binding-behavior.js",
      "npm:aurelia-templating-resources@1.8.0/dynamic-element.js",
      "npm:aurelia-templating-resources@1.8.0/else.js",
      "npm:aurelia-templating-resources@1.8.0/focus.js",
      "npm:aurelia-templating-resources@1.8.0/hide.js",
      "npm:aurelia-templating-resources@1.8.0/html-resource-plugin.js",
      "npm:aurelia-templating-resources@1.8.0/html-sanitizer.js",
      "npm:aurelia-templating-resources@1.8.0/if-core.js",
      "npm:aurelia-templating-resources@1.8.0/if.js",
      "npm:aurelia-templating-resources@1.8.0/map-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.8.0/null-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.8.0/number-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.8.0/repeat-strategy-locator.js",
      "npm:aurelia-templating-resources@1.8.0/repeat-utilities.js",
      "npm:aurelia-templating-resources@1.8.0/repeat.js",
      "npm:aurelia-templating-resources@1.8.0/replaceable.js",
      "npm:aurelia-templating-resources@1.8.0/sanitize-html.js",
      "npm:aurelia-templating-resources@1.8.0/self-binding-behavior.js",
      "npm:aurelia-templating-resources@1.8.0/set-repeat-strategy.js",
      "npm:aurelia-templating-resources@1.8.0/show.js",
      "npm:aurelia-templating-resources@1.8.0/signal-binding-behavior.js",
      "npm:aurelia-templating-resources@1.8.0/throttle-binding-behavior.js",
      "npm:aurelia-templating-resources@1.8.0/update-trigger-binding-behavior.js",
      "npm:aurelia-templating-resources@1.8.0/with.js",
      "npm:aurelia-templating-router@1.3.3.js",
      "npm:aurelia-templating-router@1.3.3/aurelia-templating-router.js",
      "npm:aurelia-templating-router@1.3.3/route-href.js",
      "npm:aurelia-templating-router@1.3.3/route-loader.js",
      "npm:aurelia-templating-router@1.3.3/router-view.js",
      "npm:aurelia-templating@1.10.1.js",
      "npm:aurelia-templating@1.10.1/aurelia-templating.js"
    ]
  },

  map: {
    "aurelia-binding": "npm:aurelia-binding@2.2.0",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.3.2",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
    "aurelia-dynamic-html": "npm:aurelia-dynamic-html@0.3.1",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.2",
    "aurelia-framework": "npm:aurelia-framework@1.3.1",
    "aurelia-history": "npm:aurelia-history@1.2.0",
    "aurelia-http-client": "npm:aurelia-http-client@1.3.0",
    "aurelia-kendoui-bridge": "npm:aurelia-kendoui-bridge@1.8.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.1",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.2.0",
    "aurelia-logging": "npm:aurelia-logging@1.5.1",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
    "aurelia-pal": "npm:aurelia-pal@1.8.1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.1",
    "aurelia-path": "npm:aurelia-path@1.1.2",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.3.1",
    "aurelia-router": "npm:aurelia-router@1.6.3",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.3.2",
    "aurelia-templating": "npm:aurelia-templating@1.10.1",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.8.0",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.3.3",
    "aurelia-tinymce-wrapper": "npm:aurelia-tinymce-wrapper@1.2.3",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "npm:bootstrap@4.3.1",
    "bootstrap-notify": "npm:bootstrap-notify@3.1.3",
    "core-js": "npm:core-js@1.2.7",
    "font-awesome": "npm:font-awesome@4.7.0",
    "jquery": "npm:jquery@3.3.1",
    "jquery-validation": "npm:jquery-validation@1.19.0",
    "jquery-validation-unobtrusive": "npm:jquery-validation-unobtrusive@3.2.11",
    "nprogress": "npm:nprogress@0.2.0",
    "text": "github:systemjs/plugin-text@0.0.11",
    "tinymce": "npm:tinymce@5.0.3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.2.1"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:atob@2.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aurelia-binding@2.2.0": {
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.2"
    },
    "npm:aurelia-bootstrapper@2.3.2": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.2",
      "aurelia-framework": "npm:aurelia-framework@1.3.1",
      "aurelia-history": "npm:aurelia-history@1.2.0",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.3.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.2.0",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.1.0",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.8.1",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.3.3",
      "aurelia-router": "npm:aurelia-router@1.6.3",
      "aurelia-templating": "npm:aurelia-templating@1.10.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.2",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.8.0",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.3.3"
    },
    "npm:aurelia-dependency-injection@1.4.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-dynamic-html@0.3.1": {
      "aurelia-binding": "npm:aurelia-binding@2.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-event-aggregator@1.0.2": {
      "aurelia-logging": "npm:aurelia-logging@1.5.1"
    },
    "npm:aurelia-framework@1.3.1": {
      "aurelia-binding": "npm:aurelia-binding@2.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-path": "npm:aurelia-path@1.1.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-history-browser@1.3.0": {
      "aurelia-history": "npm:aurelia-history@1.2.0",
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-http-client@1.3.0": {
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-path": "npm:aurelia-path@1.1.2"
    },
    "npm:aurelia-kendoui-bridge@1.8.0": {
      "aurelia-binding": "npm:aurelia-binding@2.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-router": "npm:aurelia-router@1.6.3",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.1",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.8.0"
    },
    "npm:aurelia-loader-default@1.2.0": {
      "aurelia-loader": "npm:aurelia-loader@1.0.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-loader@1.0.1": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-path": "npm:aurelia-path@1.1.2"
    },
    "npm:aurelia-logging-console@1.1.0": {
      "aurelia-logging": "npm:aurelia-logging@1.5.1"
    },
    "npm:aurelia-metadata@1.0.5": {
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-pal-browser@1.8.1": {
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-polyfills@1.3.3": {
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-route-recognizer@1.3.1": {
      "aurelia-path": "npm:aurelia-path@1.1.2"
    },
    "npm:aurelia-router@1.6.3": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.2",
      "aurelia-history": "npm:aurelia-history@1.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-path": "npm:aurelia-path@1.1.2",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.3.1"
    },
    "npm:aurelia-task-queue@1.3.2": {
      "aurelia-pal": "npm:aurelia-pal@1.8.1"
    },
    "npm:aurelia-templating-binding@1.5.2": {
      "aurelia-binding": "npm:aurelia-binding@2.2.0",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-templating-resources@1.8.0": {
      "aurelia-binding": "npm:aurelia-binding@2.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-path": "npm:aurelia-path@1.1.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-templating-router@1.3.3": {
      "aurelia-binding": "npm:aurelia-binding@2.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-path": "npm:aurelia-path@1.1.2",
      "aurelia-router": "npm:aurelia-router@1.6.3",
      "aurelia-templating": "npm:aurelia-templating@1.10.1"
    },
    "npm:aurelia-templating@1.10.1": {
      "aurelia-binding": "npm:aurelia-binding@2.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-path": "npm:aurelia-path@1.1.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.2"
    },
    "npm:aurelia-tinymce-wrapper@1.2.3": {
      "aurelia-binding": "npm:aurelia-binding@2.2.0",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.4.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.2",
      "aurelia-framework": "npm:aurelia-framework@1.3.1",
      "aurelia-loader": "npm:aurelia-loader@1.0.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.1",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.5",
      "aurelia-pal": "npm:aurelia-pal@1.8.1",
      "aurelia-path": "npm:aurelia-path@1.1.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.2",
      "aurelia-templating": "npm:aurelia-templating@1.10.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.5.2",
      "timers": "npm:timers@0.1.1",
      "tinymce": "npm:tinymce@5.0.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bootstrap@4.3.1": {
      "jquery": "npm:jquery@3.3.1",
      "tether": "github:HubSpot/tether@1.4.4"
    },
    "npm:buffer@5.2.1": {
      "base64-js": "npm:base64-js@1.3.0",
      "ieee754": "npm:ieee754@1.1.12"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css@2.2.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "source-map": "npm:source-map@0.6.1",
      "source-map-resolve": "npm:source-map-resolve@0.5.2",
      "urix": "npm:urix@0.1.0"
    },
    "npm:font-awesome@4.7.0": {
      "css": "github:systemjs/plugin-css@0.1.37"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jquery-validation-unobtrusive@3.2.11": {
      "jquery": "npm:jquery@3.3.1",
      "jquery-validation": "npm:jquery-validation@1.19.0"
    },
    "npm:jquery-validation@1.19.0": {
      "jquery": "npm:jquery@3.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:nprogress@0.2.0": {
      "css": "npm:css@2.2.4"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map-resolve@0.5.2": {
      "atob": "npm:atob@2.1.2",
      "decode-uri-component": "npm:decode-uri-component@0.2.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "resolve-url": "npm:resolve-url@0.2.1",
      "source-map-url": "npm:source-map-url@0.4.0",
      "urix": "npm:urix@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:source-map@0.6.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:tinymce@5.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:urix@0.1.0": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
