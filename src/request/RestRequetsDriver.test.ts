import { RestRequestDriver } from './RestRequestDriver';


test('Test rest request driver', async () => {
    
    let restClient = new RestRequestDriver({
        refreshToken: "old rt",
        baseUrl: "",
        generteAccessToken: ()  => {
            return { accesss_token:"new at", refresh_token:"new rt"}
        }
    })

    expect(restClient.refreshToken).toBe('old rt')

    await restClient.generteAccessToken()

    expect(restClient.refreshToken).toBe('new rt')
})