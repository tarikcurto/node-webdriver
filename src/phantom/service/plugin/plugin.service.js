/*
 * Copyright 2017 Tarik Curto - centro.tarik@live.com
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PluginService = (function () {
    function PluginService() {
    }
    /**
     * Evaluate JS on instanced page.
     *
     * @param callback
     * @param {Object} data Client properties of evaluation
     */
    PluginService.prototype.evaluate = function (callback, data) {
        if (data === void 0) { data = {}; }
        //PhantomJS don't has support for Function.property.bind(), Function.property.apply()
        //Explanation: https://groups.google.com/forum/#!msg/phantomjs/r0hPOmnCUpc/uxusqsl2LNoJ
        return page.evaluate(callback, data);
    };
    PluginService.prototype.screenshot = function (captureName) {
        page.render(captureName + ".png");
    };
    return PluginService;
}());
exports.PluginService = PluginService;
//# sourceMappingURL=plugin.service.js.map