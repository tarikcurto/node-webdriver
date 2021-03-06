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
var InstanceSystemService = (function () {
    function InstanceSystemService() {
    }
    InstanceSystemService.instanceListByProperty = function (moduleList) {
        return InstanceSystemService.instanceList(JSON.parse(moduleList));
    };
    InstanceSystemService.instanceList = function (moduleList) {
        var instanceList = [];
        for (var i = 0; i < moduleList.length; i++) {
            var instance = InstanceSystemService.instance(moduleList[i]);
            instanceList.push(instance);
        }
        return instanceList;
    };
    InstanceSystemService.instance = function (moduleInfo) {
        var instance = new (require(moduleInfo.path)[moduleInfo.moduleName])();
        return instance;
    };
    return InstanceSystemService;
}());
exports.InstanceSystemService = InstanceSystemService;
//# sourceMappingURL=instance-system.service.js.map