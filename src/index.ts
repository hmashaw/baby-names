import uniqueRandomArray = require('unique-random-array')

import { Names } from './Names'
import { DataViaRequire } from './strategy/DataViaRequire'
import { DataViaFSAsync } from './strategy/DataViaFSAsync'
import { DataViaFSSync } from './strategy/DataViaFSSync'

const babyNames = new Names(new DataViaRequire())

export const all = babyNames.loadNamesStrategy.names
export const random = uniqueRandomArray(babyNames.loadNamesStrategy.names)
