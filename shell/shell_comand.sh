pwd
ls -a
ls -l
ls -alt #все свойства команды сразу
cp #копировать 
cp m*.txt scifi/ #коепировать из текущей папки все файлы начинающиеся на  m  с расшерением .txt
cp  w/* q/* r/* /home/codehook/Desktop/
cp /home/codehook/Desktop/test/w/*.text .

rm удаляет файлы
rm -r удаляет каталоги

(I/O) #ввод и вывод
echo "Hello"
#перенаправление 
codehook@pc:~/Desktop$ echo "Alex" > alex.txt #удаляет все что есть в файле заменяя на "Alex"
codehook@pc:~/Desktop$ cat alex.txt 
Alex
 cat #вывод содержимого файла 
 cat oceans.txt > continents.txt удаляет заменяя тексе
 cat oceans.txt >> continents.txt добавляет тексе
 cat 1.txt | sort > sorted-1.txt создает файл с содержимым сортерует а
 

 grep var java.html -поиск содержимого в файле
 grep -i var java.html -поиск содержимого в файле


 grep -R слово любое и путь  /home/codehook/Desktop/
 grep -Rl слово любое и путь  /home/codehook/Desktop/
 ищет все файлы в каталоге и выводит имена файлов и строки , содержащие совпавшие результаты
 grep -R jsssss .

sed 's/hf/ra/g' e.txt замена текста с hf на ra
sed 's/hf/ra/' e.txt 

source ~/.bash_profile активацыя

whereis -b имя_искомой_команды либо locate имя_искомой_команды (можно ещё так: locate имя | grep bin ).


which php -поиск команды


