# Service Bus - NodeJs
## A project from [Eduardo Destruti](http://destruti.com/)

##What is a Service Bus?

An enterprise service bus (ESB) is a software architecture model used for designing and implementing communication 
between mutually interacting software applications in a service-oriented architecture (SOA).

As a software architectural model for distributed computing, it is a specialty variant of the more general
client-server model and promotes agility and flexibility with regard to communication between applications. 

![php-benchmark](http://destruti.com/content/github-imgs/nodejs-micro-service-bus/service-bus-complete.png)


###What is NodeJs [nodejs.org](https://nodejs.org/)
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

![php-benchmark](http://destruti.com/content/github-imgs/nodejs-micro-service-bus/nodejs-benchmark-complete.png)

##The Propouse

In this project, this example will try to make a connection between two servers using Node Js with ANY POST defined route.

We use routes of [hapijs.com](http://hapijs.com/) as NodeJs Framework

![php-benchmark](http://destruti.com/content/github-imgs/nodejs-micro-service-bus/hapi.png)

### Calling

A simple call at servers/destruti.js solve the conection.


> servers/destruti.js

> Server running at: http://localhost::8081/


The is a better way to start a NodeJs Server, using [PM2](http://pm2.keymetrics.io//), a advanced, production process manager for Node.js

> pm2 start servers/destruti.js --name DESTRUTI

> pm2 update

> pm2 monit

![php-benchmark](http://destruti.com/content/github-imgs/nodejs-micro-service-bus/pm2-monit.png)