const fs = require('fs');
const argv = process.argv;
const axios = require('axios');

cat(argv[2]);

function cat(file){
    fs.readFile(file, 'utf8', (err, data) => {
        if(err){
            console.log(`Error reading ${file}`, err);
            process.kill(1);
        }
        
        let urls = data.split("\n");
        for(let u of urls){
            webCat(u);
        }
    });
}

function webCat(path){
    axios.get(path)
    .then(res => {
        echo(path, res.data);
    })
    .catch(err => console.log(`Couldn't download ${path}`));
}

function echo(path, content){
    let url = stripURL(path);
    let file = `${url}.txt`
    fs.writeFile(file, content, "utf8", (err) => {
        if(err){
            console.log(`Couldn't write to ${path}`, err);
            process.exit(1);
        }
        
        console.log(`Wrote to ${url}`);
    });
}

function stripURL(path){
    if(path.indexOf('.com') > -1){
        let a = path.indexOf('/');
        let b = a + 2;
        let x = path.indexOf('.com');
        let y = x + 4;
        return path.slice(b,y);
    }
    else{
        let c = path.indexOf('/');
        let d = c + 2;
        let e = path.indexOf('.org');
        let z = e + 4;
        return path.slice(d,z);
    }
}
