import uniqueRandomArray = require('unique-random-array')

import { Names } from './Names'
import { DataViaRequire } from './strategy/DataViaRequire'

const babyNames = new Names(new DataViaRequire())

export const random = uniqueRandomArray(babyNames.loadNamesStrategy.names)
