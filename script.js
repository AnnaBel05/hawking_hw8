const api_url = "https://www.cbr-xml-daily.ru/daily_json.js";
async function getapi(url)
{
    const response = await fetch(url);
    var data = await response.json();
    return data;
    // console.log(data);
}

async function cookieRates()
{
    let rates = await getapi(api_url);
    document.cookie = "cookie2S=" + JSON.stringify(rates) + "; path='/path/'; expires=3600";
    localStorage.setItem('key', JSON.stringify(rates));
    document.cookie = "testcookie=" + "hehe" + "; expires=3600";
    console.log(JSON.stringify(rates));
}

// function getCookie(name)
//         {
//             let nameHelp = name + '=';
//             //const value = `${document.cookie}`;
//             var cookie = document.cookie.split(';');

//             for (var i=0; i < cookie.length; i++)
//             {
//                 var cook = cookie[i];
//                 while (cook.charAt(0)==' ') 
//                 {
//                     cook = cook.substring(1,cook.length);
//                 }
//                 if (cook.indexOf(nameHelp)==0)
//                 {
//                     var cookstring = cook.substring(name.length,cook.length);
//                     // document.getElementById("rates").innerHTML = cookstring;
//                     return "<h6>" + cook.substring(name.length,cook.length) + "</h6>";
//                 }
//             }

//             return null;
//         }

cookieRates();
// getCookie("cookie2S");
document.getElementById("rates").innerHTML = localStorage.getItem("key");


