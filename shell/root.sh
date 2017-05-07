   find . -name "*js"
   find . -name "jQ*"
   grep "back" jQuery.css

   chmod
------------------------
  - 'фаил'
  d 'дериктория'
------------------------
   rwx
 # r 'чтение'
 # w 'редактирование'
 # x 'исполнение'
------------------------
   u- 'user'
   g- 'gruop'
   o- 'oстальные' 
  добавить права u+rwx,g+rw jQuery.css
  убрать   права u-rwx,g-rw jQuery.css
------------------------
  sudo ufw disable
  sudo ufw enable
Открыть порт (в данном примере SSH):
sudo ufw allow 22
http://help.ubuntu.ru/wiki/%D1%80%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE_%D0%BF%D0%BE_ubuntu_server/%D0%B1%D0%B5%D0%B7%D0%BE%D0%BF%D0%B0%D1%81%D0%BD%D0%BE%D1%81%D1%82%D1%8C/firewall
--------------------------
sudo netstat -ntulp
sudo lsof -i

http://www.adodo.ru/blog/linux/79.html
netstat -an | grep LISTEN
ping 192.168.0.11

sudo chown -R sadhu:sadhu FAC606BCC6067961/
