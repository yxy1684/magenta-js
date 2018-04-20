/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {tensorflow} from '@magenta/protobuf';
import NoteSequence = tensorflow.magenta.NoteSequence;
import INoteSequence = tensorflow.magenta.INoteSequence;
import INote = NoteSequence.INote;

export {NoteSequence, INoteSequence, INote};

import * as tf from '@tensorflow/tfjs-core';
export {tf};

export {CheckpointLoader} from './checkpoint_loader';

import * as data from './data';
export {data};

import * as controls from './controls';
export {controls};

export * from './midi_io';
export * from './sequences';