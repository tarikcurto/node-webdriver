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
var os_1 = require("os");
var app_config_1 = require("../../app/config/app.config");
exports.PHANTOM_SCRIPT = (function () {
    if (os_1.platform() == "win32") {
        return app_config_1.SOURCE_DIR + "\\phantom\\service\\system\\system.service.js";
    }
    else {
        return app_config_1.SOURCE_DIR + "/phantom/service/system/system.service.js";
    }
})();
//# sourceMappingURL=phantom.config.js.map