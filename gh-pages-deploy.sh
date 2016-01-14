mkdir build; cp index.html build/;cp -r vendor build/;cp -r pamphlet build/;cp -r js build/;cp -r img build/;cp -r data build/;cp -r css build/; cd build
git init
git config user.name "Travis-CI"
git config user.email "travis@email.com"
git add .
git commit -m "Deployed to Github Pages"
git push --force --quiet "https://${GH_TOKEN}@github.com/Kushagra343/conference" master:gh-pages > /dev/null 2>&1