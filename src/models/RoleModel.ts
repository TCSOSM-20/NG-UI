/*
 Copyright 2020 TATA ELXSI

 Licensed under the Apache License, Version 2.0 (the 'License');
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 Author: KUMARAN M (kumaran.m@tataelxsi.co.in), RAJESH S (rajesh.s@tataelxsi.co.in), BARATH KUMAR R (barath.r@tataelxsi.co.in)
 */
/**
 * @file  Model for role related information.
 */

/** Interface for ProjectDetails */
export interface RoleDetails {
    _admin?: Admin;
    _id?: string;
    name?: string;
    id?: string;
    permissions?: {};
}

/** Interface for Admin */
interface Admin {
    created: number;
    modified: number;
}
/** Interface for Role data in smarttable */
export interface RoleData {
    name: string;
    identifier: string;
    modified: string;
    created: string;
    permissions: {};
}
/** Interface for Role configuration from role config file */
export interface RoleConfig {
    rolePermissions: PermissionGroup[];
}
/** Interface for Role permission group */
export interface PermissionGroup {
    title: string;
    permissions: Permission[];
}
/** Interface for Role permission group */
export interface Permission {
    operation: string;
    value: string | boolean;
}
