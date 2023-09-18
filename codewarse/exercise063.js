// <---------  exercise   --------> => 5kyu

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:


// <---------  Exsample   -------->

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"


// <---------  solution  -------->

function domainName(url){
  let filterStr = url.replace('http://','').replace('https://','').replace('www.', '')
  return filterStr.split('.')[0]
}