const server = require('./api/server.js');

const port = process.env.PORT || 5550;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));
