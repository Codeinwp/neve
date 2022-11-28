# How to run Playwright tests locally 

## Setting up the environment:

There are two ways of running Playwright tests on your local machine:

### Running Playwright tests with Docker:

#### 1. Install Docker

If you don't have Docker, you need to install it to be able to continue with this guide. You can install it from [here](https://www.docker.com/products/docker-desktop).

#### 2. Set up the Docker instance

To set it up for the first time, please run this command into the root folder:  
```bash
bash bin/envs/init.sh
```
It will create the initial Docker setup according to the same docker-compose file that runs on the CI pipeline.

#### 3. Load the environment
 
To load the `sample-data` environment you need to run this command:
```bash
docker-compose -f docker-compose.ci.yml run --rm -u root cli sh "/var/www/html/bin/envs/sample-data/start.sh"
```
Currently, we only migrated the customizer tests for which you need the `sample-data` environment. As we develop more tests, you'll need to load different environments.

#### 4. Run the Playwright tests

To run the Playwright tests, run the following command from the root folder:
```bash
yarn run test:e2e:playwright
```
___
### Running Playwright tests on your chosen environment:

For an accurate result, we recommend running those tests on a fresh WordPress install. To reset your WordPress instance, you can run `wp db reset --yes` from the root directory of your project.

#### 1. Install wp-cli on your local machine
If you don't have WP CLI, you need to install it. Please follow [this guide](https://make.wordpress.org/cli/handbook/guides/installing/) to install WP CLI.

#### 2. Load the environment
Assuming that your local url is `https://neve.test` you can run the following command **from the root folder** to set up the `sample-data` environment:
```bash
BASE_URL=https://neve.test bash bin/envs/local.sh sample-data
```
Currently, we only migrated the customizer tests for which you need the `sample-data` environment. As we develop more tests, you'll need to load different environments.

#### 3. Run the Playwright tests
Assuming that your local url is `https://neve.test`, navigate to `e2e-tests` folder and run the following command:
```bash
baseURL=https://neve.test bash npx playwright test
```

To run a specific test you can run the following command:
```bash
baseURL=https://neve.test bash npx playwright test path/to/your/file.spec.ts

```
