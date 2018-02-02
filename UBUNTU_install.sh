### ccsm ###
sudo apt-get install fish unity-tweak-tool plank compizconfig-settings-manager compiz-plugins-extra chromium-browser gdebi 

# Установка
sudo systemctl enable plank

# После установки добавим программу в автозагрузку:
sudo systemctl enable apache2

### subl ###

sudo add-apt-repository ppa:webupd8team/sublime-text-3
sudo apt-get update
sudo apt-get install sublime-text


### apache ###
sudo subl /etc/php/7.0/apache2/php.ini

display_errors on

sudo mkdir /var/run/mysqld
sudo mkfifo /var/run/mysqld/mysqld.sock
sudo chown -R mysql /var/run/mysqld
sudo a2enmod rewrite
subl /etc/apache2/apache2.conf
AllowOverride # https://laravel.ru/docs/v3/install
cat sites-available/000-default.conf # -> Alias /laravel "/var/www/html/laravel/blog/public/"
# ssl -> http://help.ubuntu.ru/wiki/apache2

#чтобы apache смог в какой-то папке сохранять файлы, выполняем:
#ttps://900913.ru/2017/05/09/prava-na-fayly-i-papki-v-linux-freebsd-i-macos/
sudo chown -R www-data:www-data /home/user/www/site/upload/


### LAMP ###
sudo apt install apache2
sudo apt install mysql-server
sudo apt install php libapache2-mod-php php-mcrypt php-mysql
sudo apt install phpmyadmin php-mbstring php-gettext

sudo ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf-available/phpmyadmin.conf
sudo a2enconf phpmyadmin
sudo /etc/init.d/apache2 reload

sudo systemctl start apache2

subl /etc/php/7.0/apache2/*
ss
### laravel ###
sudo a2enmod rewrite

sudo chmod 755 -R laravel_blog
sudo chmod -R o+w laravel_blog/storage
sudo chmod -R gu+w storage
sudo chmod -R guo+w storage
sudo chmod -R gu+w bootstrap/cache/

php artisan cache:clear

composer create-project --prefer-dist laravel/laravel blog "5.3.*"


echo 'export PATH="$PATH:$HOME/.config/composer/vendor/bin"' >> ~/.bashrc
source ~/.bashrc

# https://www.digitalocean.com/community/tutorials/how-to-set-up-mod_rewrite-for-apache-on-ubuntu-14-04
# http://laravel.su/docs/5.0/templates#other-blade-control-structures

# app
sudo apt install gparted

### theme ###
sudo add-apt-repository ppa:noobslab/themes
sudo apt-get update
sudo apt-get install flatabulous-theme

sudo add-apt-repository ppa:noobslab/icons
sudo apt-get update
sudo apt-get install ultra-flat-icons
# https://www.fossmint.com/ubuntu-16-04-my-experience-so-far-and-customization/

### FISH ###
set -Ux FOO 'bar'

### .htaccess ###
# redirect http -> https
DocumentRoot %sprogdir%/home/commpier/desktop/public_html


RewriteEngine On
RewriteCond %{HTTPS} !on
RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}

RewriteEngine On
RewriteCond %{REQUEST_URI} !^public
RewriteRule ^(.*)$ public/1$ [L]

### $USER ###
sudo chown -R  lowchat:commpier /home/lowchat
sudo chgrp -R commpier /home/lowchat/
sudo usermod -a -G sudo lowchat
sudo adduser lowchat  sudo

sudo addgroup groupname
sudo delgroup groupname
sudo adduser username groupname


