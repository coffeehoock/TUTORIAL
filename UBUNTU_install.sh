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
sudo subl /etc/php/7.2/apache2/php.ini
# php_value upload_max_filesizeUSER
# /etc/init.d/apache2 restart or /etc/init.d/httpd restart
# sudo a2dismod php7.0 http://fkn.ktu10.com/?q=node/8596


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

## https
## sendmail
sudo dpkg-reconfigure sendmail-bin sensible-mda
sudo update-alternatives --remove-all sendmail-mta
# info sendmail
echo '$=w' | sendmail -Am -bt


### LAMP ###
sudo apt install apache2
sudo apt install mysql-server
sudo apt install php libapache2-mod-php php-mcrypt php-mysql
sudo apt install phpmyadmin php-mbstring php-gettext

sudo ln -s /etc/phpmyadmin/apache.conf /etc/apache2/conf-available/phpmyadmin.conf
sudo a2enconf phpmyadmin
sudo /etc/init.d/apache2 reload



sudo systemctl start apache2

# subl /etc/php/7.0/apache2/*
ss
### laravel ###
sudo a2enmod rewrite

sudo chmod 755 -R laravel_blog
sudo chmod -R o+w laravel_blog/storage
sudo chmod -R gu+w storage
sudo chmod -R guo+w storage
sudo chmod -R gu+w bootstrap/cache/

# php artisan cache:clear

# composer create-project --prefer-dist laravel/laravel blog "5.3.*"


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
# DocumentRoot %sprogdir%/home/commpier/desktop/public_html


# RewriteEngine On
# RewriteCond %{HTTPS} !on
# RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}

# RewriteEngine On
# RewriteCond %{REQUEST_URI} !^public
# RewriteRule ^(.*)$ public/1$ [L]

### $USER ###

# create user
# add user
sudo useradd <userName> -b /mnt/56f5f743-0eb2-4a7b-9b09-d7eb97dce628/user/  -g www-data -m
# add pass
sudo passwd  <userName>
# add root
grep <userName> /etc/passwd
sudo atom /etc/passwd
<userName>:x:0:0::/mnt/56f5f743-0eb2-4a7b-9b09-d7eb97dce628/user//env-html:
sudo usermod -a -G root,sudo <userName>


sudo chown -R  lowchat:commpier /home/lowchat
sudo chgrp -R commpier /home/lowchat/
sudo usermod -a -G sudo lowchat #сменить оболочку
sudo adduser lowchat  sudo
tail -1 /etc/passwd # поверить оболочку

cat /etc/group | grep -i lowchat #в какие гуппы входит lowchat
sed 's/:.*//' /etc/passwd #список групп Системные регистрационные имена
# http://citforum.ru/operating_systems/unix/kravchuk/3.shtml

sudo usermod -R группа пользователь #Удалить пользователя из группы
sudo addgroup groupname
sudo delgroup groupname
sudo adduser username groupname

groups lowchat #показать в какие группы входит пользователь


sudo lastlog

# usermod опции имя_пользователя
# -G — дополнительные группы, в которые нужно добавить пользователя
# -g изменить основную группу для пользователя
# -R удалить пользователя из группы.
# sudo usermod -G -a имя_группы имя_пользователя

### git ###
git log --name-status
git checkout HEAD^ file_name



# Как установить новые пакеты
sudo dpkg --configure -a

sudo apt install {pkgNameHere}
sudo apt remove  {pkgNameHere}

# Опция purge чтобы удалить пакет и конфигурационные файлы
sudo apt purge {pkgNameHere}
sudo apt --purge autoremove

# Как искать пакеты
apt search {pkgNameHere}
apt show {pkgNameHere}
apt list | grep {pkgNameHere}
apt list 'php7*'

#программа находит пакет как не до конца установленный или удалённый и удаляет.
sudo apt-get purge ttf-mscorefonts-installer
sudo fuser -vki /var/lib/dpkg/lock
sudo rm -r /var/lib/dpkg/info/sendmail-*
rm -rf ~/.local/share/applications/wine*
sudo rm -rf /etc/apt/sources.list

# группа приложения
sudo adduser --system --group --no-create-home redis

### debug apt ###
# https://neosvc.ru/stati/232-nevozmozhno-ispravit-oshibki-u-vas-otlozheny-held-bitye-pakety.html


systemctl unmask  redis-server.service

git clone git://github.com/nicolasff/phpredis.git
cd phpredis
phpize
./configure
make
sudo -s make install

sudo -s


echo "extension=redis.so">/etc/php/7.0/apache2/conf.d/redis.ini
ln -s /etc/php/7.0/apache2/conf.d/redis.ini /etc/php/7.0/apache2/20-redis.ini
exit

## HOST ###

subl /etc/hosts
cd etc/apahe/
#ensite


### kill ###
sudo netstat -plnt | grep '127.0.0.1:8000'
kill -KILL 4073

### symfony ###
cd app
sudo chmod a+w cache -R
php app/console cache:clear
sudo rm -rf app/cache/
sudo rm -rf app/cache/*
sudo rm -rf app/logs/*

# https://symfony.com/doc/2.2/book/installation.html
##### no mdel

sudo chown -R www-data:www-data app/logs/
sudo chown -R www-data:www-data app/cache/

# http_protocol: http


find . -type f -not -name "fil1"  -exec mv {} "fold/" \;


### SSH ###
ssh -p 22 lowc@ip

### SESSION ###
usermod -s /bin/fish lowchat
cat /etc/shells
sudo killall -u vica
su lowchat -c "sudo killall -u lowchat"

### sicurity ###
<FilesMatch "\.(engine|inc|info|install|make|module|profile|test|po|sh|.*sql|theme|tpl(\.php)?|xtmpl)$|^(\..*|Entries.*|Repository|Root|Tag|Template)$">
  Order allow,deny
</FilesMatch>
благодаря которым "скачать движок с модулями" и не получится

wget -r -k -l 0 -p -E -nc https://www

