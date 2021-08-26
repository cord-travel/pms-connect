import { StoreInMemory, IBaseTokenStore } from '.'
import { RestRequestDriver } from '../request'


test('InMemory store initialize and set tokens', () => {
    let store = new StoreInMemory()
    expect(store.store.at).toBe("")
    expect(store.store.rt).toBe("")
    store.setTokens({ access_token: "at1", refresh_token: "rt1" })
    expect(store.store.at).toBe("at1")
    expect(store.store.rt).toBe("rt1")
       
})




