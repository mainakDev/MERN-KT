
const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;
    
    if(url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Form Page</title></head>')
        res.write('<body>')
        res.write('<form action="/message" method="POST">')
        res.write('<input type="text" name="message"/>')
        res.write('<button type="submit">SEND</button>')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    if(url === '/message' && method === 'POST'){
        //event listener to listen for whenever the message gets passed
        const body = []; 
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location','/');
                return res.end();
            });
        })
    }
    res.setHeader('Content-Type','text/html');
    res.write('<html>')
    res.write('<body>')
    res.write('<h1>Hello from Server</h1>')
    res.write('</body>')
    res.write('</html>')
    return res.end();
};


module.exports = requestHandler;
