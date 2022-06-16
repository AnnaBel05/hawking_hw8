<!DOCTYPE html>
<html>
    <head>
        <!-- <script src="script.js"></script> -->
    </head>
    <body>
        <h1>Valute rates</h1>
        <div id="rates"></div>
        
    </body>
    <script src="script.js"></script>

    <!-- <script>
        const ul = document.getElementById('rates');
        const url = 'https://www.cbr-xml-daily.ru/daily_json.js';

        function createNode(element)
        {
            return document.createElement(element);
        }

        function append(parent,el)
        {
            return parent.appendChild(el);
        }

        fetch(url)
            .then((resp) => resp.json())
            .then(function(data)
            {
                let rates = data.results;
                return rates.map(function(rate)
                {
                    let li = createNode('li');
                    let span = createNode('span');

                    span.innerHTML = `${rate.Valute}`;
                    
                    append(li,span);
                    append(ul,li);
                })
            }) 
            .catch(function(error)
            {
                console.log(error);
            });
    </script> -->
</html>
