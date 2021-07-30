### How to run cypress tests locally 

* Firs you will need to setup the environment on your local machine and have wp-cli installed. Assuming that your local url is http://neve.test you can `CYPRESS_BASE_URL=http://neve.test bash bin/envs/local.sh` or if you want to install a specific environment you can use `CYPRESS_BASE_URL=http://neve.test bash bin/envs/local.sh amp` where amp is the environment inside `bin/envs/amp`
  
* Than you can move to e2e-tests folder and run `yarn install --frozen-lockfile` to install the dependencies.
* After this you will have to open cypress with the proper base url, as `CYPRESS_BASE_URL=http://neve.test  npm run cypress:open` and run the spec that you want.




