# Service Bus - NodeJs
## A project from [Eduardo Destruti](http://destruti.com/)

###What is NodeJs [nodejs.org](https://nodejs.org/)
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.
Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

![php-benchmark](http://destruti.com/content/github-imgs/nodejs-micro-service-bus/nodejs-benchmark.png)


##The Propouse

In this project, this example will try to make a conhection between two servers using NodeJs with any defined route.

![php-benchmark](http://destruti.com/content/github-imgs/nodejs-micro-service-bus/nodejs-benchmark.png)

We use routes of Hati.js as NodeJs Framework

![php-benchmark](http://destruti.com/content/github-imgs/nodejs-micro-service-bus/hapi.png)


### Calling

A simple call at servers/destruti.js solve the conection.


> servers/destruti.js

> Server running at: http://localhost::8081/


The is a better way to start a NodeJs Server, using PM2 (install guide below)

> pm2 start servers/destruti.js --name DESTRUTI

> pm2 update

> pm2 monit


![php-benchmark](http://destruti.com/content/github-imgs/nodejs-micro-service-bus/pm2-monit.png)





##Install Features to run this Phalcon Project on Linux


###Install Basics
> sudo apt-get update

> sudo apt-get install -y memcached git vim htop lynx whois curl xclip build-essential


###Install Composer
> curl -sS https://getcomposer.org/installer | php

> sudo mv composer.phar /usr/local/bin/composer



###Install Apache

> sudo apt-get update

> sudo apt-get install apache2

> sudo a2enmod rewrite

> sudo service apache2 restart



###Install Mysql

> sudo apt-get install mysql-server

> sudo /usr/bin/mysql_secure_installation



###Install PHP

> sudo apt-get install libapache2-mod-php5 php5-common php5-mysql php5-xmlrpc php5-curl php5-gd php5-cli php-pear php5-dev php5-imap php5-mcrypt php5-json php5-geoip php5-imagick php5-memcache php5-memcached



###Install Phalcon

> sudo apt-add-repository ppa:phalcon/stable

> sudo apt-get update

> sudo apt-get install php5-phalcon



##Atention

If you need help with apache configs, go to folder "scripts/apache.conf". Its a good example to config your VHOST.

```

<VirtualHost *:80>
        ServerAdmin eduardo@destruti.com
        ServerName  destruti.dev

        SetEnv APPLICATION_ENV "development"

        DocumentRoot "/var/www/php-phalcon-basic-structure/public"

	    <Directory "/var/www/php-phalcon-basic-structure">
        	Options Indexes FollowSymLinks MultiViews
        	AllowOverride All
        	Order allow,deny
        	allow from all
    	</Directory>

    	<Directory "/var/www/php-phalcon-basic-structure/public">
        	Options Indexes FollowSymLinks MultiViews
        	AllowOverride All
        	Order allow,deny
        	allow from all
    	</Directory>

        ErrorLog ${APACHE_LOG_DIR}/error.php-phalcon-basic-structure.log
        LogLevel warn

        CustomLog ${APACHE_LOG_DIR}/access.php-phalcon-basic-structure.log combined

    Alias /doc/ "/usr/share/doc/"
    <Directory "/usr/share/doc/">
        Options Indexes MultiViews FollowSymLinks
        AllowOverride None
        Order deny,allow
        Deny from all
        Allow from 127.0.0.0/255.0.0.0 ::1/128
    </Directory>

</VirtualHost>

```
