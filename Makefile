test:
	npm test
	echo "yes"

list-tests:
	npm test -- --listTests

.envrc:
	echo PATH_add \$$PWD/node_modules/.bin > .envrc
	direnv allow

dirty:
	echo  " " >> src/__tests__/app.test.jsx
	echo  " " >> src/__tests__/button.test.js




delete-envrc:
	- rm -f  .envrc


deno-run:
	cd src && deno test --allow-read --allow-net --unstable-sloppy-imports perplexity_deno.jsx
