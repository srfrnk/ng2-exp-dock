var replace = require('replace-in-file');

try {
    console.log(process.cwd());
    replace({
        files: [
            'src/environments/environment.ts',
            'src/environments/environment.prod.ts',
        ],
        from: [
            /{API_HOST}/g,
            /{API_PORT}/g
        ],
        to: [
            process.env.API_HOST,
            process.env.API_PORT
        ],
        allowEmptyPaths: false,
    }).then(e => console.log(e)).catch(e => console.log(e));
}
catch (error) {
    console.error('Error occurred:', error);
}
