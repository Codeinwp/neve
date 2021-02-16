
## Releasing

This repository uses conventional [changelog commit](https://github.com/Codeinwp/conventional-changelog-simple-preset) messages to trigger release 

How to release a new version:

- Clone the master branch
- Do your changes
- Send a PR to master and merge it using the following subject message
  - `release: <release short description>` - for patch release
  - `release(minor): <release short description>` - for minor release
  - `release(major): <release short description>` - for major release
The release notes will inherit the body of the commit message which triggered the release. For more details check the [simple-preset](https://github.com/Codeinwp/conventional-changelog-simple-preset) that we use.

## Running Cypress tests with Docker
**Please read our [Cypress Guideline](https://github.com/Codeinwp/cypress-guideline) before writing Cypress tests.**

To run the Docker environment, you need to have Docker installed; you can install it [here](https://www.docker.com/products/docker-desktop)

To set it up for the first time, please run this command into the root folder: `bash bin/envs/init.sh`

It will create the initial Docker setup according to the same docker-compose file that runs on the CI pipeline.

Since we use a different environment setup for each spec group, you will need to run another script after running that will change according to the env you need to run; you can check the envs for specs [here](https://github.com/Codeinwp/neve/blob/master/.github/workflows/build-dev-artifacts.yml#L96-L146).

E.g., you want to run the customizer spec that runs on sample-data env; you should run this command:
```bash
docker-compose -f docker-compose.ci.yml run --rm -u root cli sh "/var/www/html/bin/envs/sample-data/start.sh"
```

After running this script, you can run the Cypress tests, and if they pass, you can submit your PR knowing that the e2e tests will pass on the pipeline. :raised_hands:
