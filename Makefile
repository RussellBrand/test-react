list-tests:
	jest --listTests

.envrc:
	echo PATH_add \$$PWD/node_modules/.bin > .envrc
	direnv allow



delete-envrc:
	- rm -f  .envrc

