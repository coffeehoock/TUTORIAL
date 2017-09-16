 		
			#настройка

git config --global user.name "coffeehoock"
git config --global user.email "coffeehoock@gmail.com"
git config --global core.editor "subl -w"
git config --global color.ui true

git config --list

cat .gitconfig			

curl -OL https://raw.github.com/git/git/raw/master/contrib/completion/git-completion.bash 

mv git-completion.bash .git-completion.bash 

														  #Инициализируем папку

git init

                     #Связываем папку с удаленным репозиторием


git remote add origin   https://github.com/codehook/test.git

		
		     #Закачиваем код на удаленный репозиторий

git push -u origin master

				#cкачать репозиторий 


		      #Добавляем все новые и измененные файлы

git add .  #отправка в буфер
git commit -m "message"  
git push
git status          


git log #info
cat .git/refs/heads/master

git diff 					# сравнить файлы дериктории с буфером
git diff --staged # сравнить файлы репозитория с буфером




						#удаление и перемищение файлов

git rm
git mv

