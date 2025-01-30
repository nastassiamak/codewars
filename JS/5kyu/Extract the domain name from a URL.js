// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//
//     * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    // Удаляем префиксы http://, https:// и www. и разбиваем строку по символу /
    let domain = url.replace(/^(https?:\/\/)?(www\.)?/, '').split('/')[0];
    // Убираем все символы после точки, чтобы оставить только имя домена
    return domain.split('.')[0];
}

console.log(domainName('http://github.com/carbonfive/raygun'));
console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('https://www.cnet.com'));