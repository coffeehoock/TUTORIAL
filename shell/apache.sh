sudo apt-get install apache2 libapache2-mod-fastcgi php7.0 php7.0-fpm phpmyadmin mysql-client mysql-server-5.7 libapache2-mod-php

#sudo a2enmod mpm_worker

sudo a2dismod mpm_event
sudo a2enmod proxy_fcgi
sudo a2enmod php7.0




sudo ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf-available/phpmyadmin.conf 
sudo a2enconf phpmyadmin


# sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin или --> Hktg7sor5hjf884843hbdj



sudo chmod -R 755 /var/www


