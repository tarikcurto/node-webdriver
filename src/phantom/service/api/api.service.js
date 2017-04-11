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
const tarikcurto_node_terminal_1 = require("tarikcurto.node-terminal");
const phantom_config_1 = require("../../config/phantom.config");
class ApiService {
    constructor() {
        this.terminalService = new tarikcurto_node_terminal_1.CommandService();
        this.terminalService.nameCommandService.nameCommandData = { value: "phantomjs " + phantom_config_1.PHANTOM_SCRIPT };
    }
    run() {
        console.log(this.terminalService.instanceExecution().executeSync());
    }
}
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map