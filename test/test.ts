import { expect, tap } from '@pushrocks/tapbundle';
import * as desktopconfig from '../ts/index'

tap.test('first test', async () => {
  console.log(desktopconfig.standardExport)
})

tap.start()
