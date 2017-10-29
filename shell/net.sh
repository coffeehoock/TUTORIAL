sudo lsof -i | grep 80
sudo lsof -i
hostname -I -i
netstat -lantp | grep ESTABLISHED |awk '{print $5}' | awk -F: '{print $1}' | sort -u
Список подключенных хостов

netstat -lantp | grep ESTABLISHED |awk '{print $5}' | awk -F: '{print $1}' | sort -u
