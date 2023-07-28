## FAQ

### Text translations and localization. What rules should I follow?

We aim to keep the translation as close to 100% as possible. To achieve this, we need to follow some rules:

- All user facing text should be translatable, using the `__()` function.
- Before adding a new string to the code, check if it's already available in the theme. If it is, use the existing string.
    Adding a new string will require a new translation. So, if you can avoid it, do it.
- If you need to add a new string, make sure to add a context to it. This will help translators to understand the
	context of the string and translate it accordingly.
- For the theme all the new added string  will require approval from the reviewer before merging.
- When removing a string, instead of deleting it you can move it to `get_strings()` function from `inc/core/front_end.php` 
    so that the translation is kept for the future.

### Compatibilities. How to add a new compatibility for a plugin?
For writing and fixing compatibilities with 3rd party plugins we have a special location under `inc/compatibility`
If there is already a file for the plugin you are working on, please add your code there. If not, create a new file 
following the same naming convention.
`inc/compatibility/plugin_name.php`. The class name should be `Plugin_Name`
After that make sure you register the compatibility class in `inc/core/core_loader.php` file inside the `define_modules()` method.

When writing the class, please make sure you only load the compatibility code when the plugin is active. 
You can do that by using `should_load()` function, where you define the logic for checking if the plugin is active or 
not and/or if the compatibility code should be loaded or not.

The class requires to have a `init()` method that is the entry point for the class. Ussually here you will use the 
`should_load()` to check if further execution is needed or not.


### CSS and JS. How to add new CSS and JS code?

We currently use the following limits for CSS and JS:

| File                               | Type | Limit  |
|------------------------------------|------|--------|
| assets/js/build/modern/frontend.js | JS   | 7KB    |
| assets/js/build/modern/shop.js     | JS   | 33KB   |
| style-main-new.min.css             | CSS  | 38.1KB |

The limits are for the minified files. These are compiled automatically when you run `npm run build` command.
You can check the size of the files by running `npm run size` command.

If you need to add new CSS or JS code, please make sure you follow the limits. If you need to add more code, you can 
follow the steps below:

1. Check if the code is required as part of the core functionality. If it is, you can add it to the core files.
    - If you go over the limits, you can try to optimize the code.
    - Another option if no further optimization is possible is to remove some of the existing code that might not be 
      needed anymore.
2. Check if the code can be moved to a separate file. If it can, move it to a separate file and load it conditionally. Or 
   load it only on the pages where it's needed inline.

#### CSS
For CSS we use `.scss` files. The files are located under a `assets/scss` folder. The main file is `style.scss`.

#### JS
For JS we use `.js` files or `.tsx`. We encourage the use of `.tsx` files as they allow us to use TypeScript. This should be
respected especially for new code.
