/* @flow */

import { createCollectionActions } from '../helpers/collection/actions.js'

const actions = createCollectionActions('cloudaccounts')

export const createCloudaccounts = actions.createCloudaccounts
export const selectCloudaccounts = actions.selectCloudaccounts

export const createCloudaccountsSubmit = actions.createCloudaccountsSubmit
export const createCloudaccountsSuccess = actions.createCloudaccountsSuccess
export const createCloudaccountsError = actions.createCloudaccountsError

export const requestCloudaccounts = actions.requestCloudaccounts
