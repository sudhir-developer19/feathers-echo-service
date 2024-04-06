// For more information about this file see https://dove.feathersjs.com/guides/cli/service.test.html
import assert from 'assert'
import type { Server } from 'http'
import { app } from '../../../src/app'
const port = app.get('port')

const appUrl = `http://${app.get('host')}:${port}`

describe('echo service', () => {
  let server: Server

  before(async () => {
    server = await app.listen(port)
  })

  after(async () => {
    await app.teardown()
  })
  it('registered the service', () => {
    const service = app.service('echo')

    assert.ok(service, 'Registered the service')
  }) 
    
})
