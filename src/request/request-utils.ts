
export function toQueryString(params: any): string {

    if(typeof params !== 'object') return ''
    var queryString = Object.keys(params).map((key) => {
        return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    }).join('&');

    return queryString
    
}