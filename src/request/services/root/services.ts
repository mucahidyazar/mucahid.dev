import {rootApi} from '../../axios'

import {endpoints} from './endpoints'

export const serviceHealth = async () => await rootApi.get(endpoints.health)

export const serviceKill = async () => await rootApi.post(endpoints.kill)
