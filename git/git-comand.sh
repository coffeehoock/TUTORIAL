# удалить ветку
git branch -d <branchname>
git push origin :<branchname>

# создать ветку
git checkout --orphan <branchname>

# удалить файл из индекса, оставив его при этом в рабочем каталоге
git rm --cached readme.txt

# удалить файл из истории git
git filter-branch --index-filter "git rm --cached --ignore-unmatch path/to/file" --prune-empty HEAD

# перекинуть на ветку
git add dist && git commit -m "Initial dist subtree commit"
git subtree push --prefix dist origin gh-pages

git symbolic-ref HEAD refs/heads/gh-pages
rm .git/index 
git clean -fdx

# .gitignore
# http://qaru.site/questions/11078/make-gitignore-ignore-everything-except-a-few-files

# ng
ng build --base-href https://coffeehoock.bitbucket.io  --deploy-url https://coffeehoock.bitbucket.io   --prod

