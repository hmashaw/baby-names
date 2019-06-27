import uniqueRandomArray = require('unique-random-array')

import { Names } from './Names'
import { DataViaRequire } from './strategy/DataViaRequire'
import { DataViaFSAsync } from './strategy/DataViaFSAsync'
import { DataViaFSSync } from './strategy/DataViaFSSync'

const names = new Names(new DataViaRequire())

export const all = names.loadNamesStrategy.names
export const random = uniqueRandomArray(names.loadNamesStrategy.names)
