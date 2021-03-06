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
 * @file  Model for NS topology related information.
 */

/** Interface for the GRAPHDETAILS */
export interface GRAPHDETAILS {
    width: number;
    height: number;
    nodeHeight: number;
    nodeWidth: number;
    textX: number;
    textY: number;
    radius: number;
    distance: number;
    strength: number;
    forcex: number;
    forcey: number;
    sourcePaddingYes: number;
    sourcePaddingNo: number;
    targetPaddingYes: number;
    targetPaddingNo: number;
    alphaTarget: number;
    imageX: number;
    imageY: number;
    shiftKeyCode: number;
}
/** Interface for the Path */
export interface TickPath {
    x: number;
    y: number;
    id: string;
    'type'?: string;
}
/** Interface for the Tick */
export interface Tick {
    target: TickPath;
    source: TickPath;
    left: boolean;
    right: boolean;
}
