# Contributing

Thank you for thinking about contributing to Neve! All sorts of contributions are welcomed.

## License

Neve is [licensed under the GPLv2+](LICENSE.txt), and all contributions to Neve will be released under the GPLv2+ license. By contributing to this repository, you agree to release your contribution under the GPLv2+ license.

## Setting Up Local Environment

You need a WordPress Environment to run the theme on. This project needs a lot of different packages to be installed before you can start coding, but we've made the process easier with Docker.

### Getting Started with Docker

The quickest way to get up and running is to use the provided [Docker](https://www.docker.com/) setup which takes care of setting up the environment for you within seconds. Install docker and docker-compose by following the most recent instructions on the Docker site.

Once Docker is installed, fork Neve repository. Clone your fork of this project and enter the working directory:

```
git clone http://github.com/YOUR-USERNAME/neve/
cd neve
```

Once inside the folder, you can run the following command to start your Docker container:

```
docker-compose up -d
```

This will make your WordPress instance up and running at http://localhost:8080

- If you want to use a different port for your environment, then you can change it from [docker-compose.yml](docker-compose.yml) file.

- If you're developing plugins, or core WordPress functionality alongside Neve, you can make the WordPress files accessible in `/neve/wordpress/` folder in your home directory.

- If you want bash access to your environment, you can use the following command to find the ID of your Docker container:

```
docker ps
```

And then you can get bash access with the following command:

```
docker exec -it <ID OF YOUR CONTAINER> bash
```

If you want to stop your Docker container, for the time being, you can use the following command:

```
docker-compose stop
```

Moreover, if you want to delete your Docker instance, you can use:

```
docker-compose down
```

### Installing Dependencies

Once you've bash access of your WordPress container, you need to enter your Neve directory with:

```
cd /var/www/html/wp-content/themes/neve/
```

Now, we need to install `npm` and `composer` dependencies with the following commands:

```
npm install
composer install
```

Now you can start making your changes to the theme.

### Running Grunt Tasks

We use [Grunt](https://gruntjs.com/) for automating many tasks, such as compiling Sass to CSS, PHP Code Sniffer, and more.

Once you have made your changes, you can run Grunt tasks by running:

```
grunt local
```

It will take some time to finish all the tasks. If there are any issues found in PHP or JavaScript, it gives you a detailed log inside `/logs/` folder of the theme. Fix those issues and run `grunt local` again until it finishes without an error.

### PHP Unit Testing

Tests for PHP use PHPUnit as the testing framework, which is run with:

```
phpunit
```

## Sending a Pull Request

A good workflow for pull requests to follow is listed below:

- Fork Neve repository
- Clone forked repository
- Use **development** branch for your changes, or create a new branch from **development** branch.
- Setup environment
- Make code changes
- Run Grunt tasks and PHPUnit tests.
- Push branch to forked repository
- Submit Pull Request

## Reporting Security Issues

ThemeIsle team takes security bugs very seriously. Do not report potential security vulnerabilities here. Email them privately to our team at friends@themeisle.com

## Reporting a Bug

We use [GitHub issues](https://github.com/Codeinwp/neve/issues) for tracking bugs. When filing an issue, make sure to answer these questions:

- What version of Neve are you using?
- What version of WordPress are you using are you using?
- What did you do?
- What did you expect to see?
- What did you see instead?

Explain the problem and include additional details to help maintainers reproduce the problem:

- Use a clear and descriptive title for the issue to identify the problem.
- Describe the exact steps which reproduce the problem in as many details as possible, including screenshots if needed.

## Localizing Neve Theme

You don't need to be a developer to contribute to Neve. You can also contribute to the project by translating it to your language. You can find your [locale here](https://translate.wordpress.org/projects/wp-themes/neve).

Language packs are automatically generated once 95% of the theme's strings are translated and approved for a locale.
