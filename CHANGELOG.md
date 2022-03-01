##### [Version 3.1.6](https://github.com/Codeinwp/neve/compare/v3.1.5...v3.1.6) (2022-02-23)

- [Fix] Jquery failure when elementor header is enabled and adding a product to cart
- [Fix] Custom HTML component behavior on empty tags
- [Fix] Customizer behavior when removing the pallet switcher component
- [Fix] Padding on blog list layout for mobile devices
- [Fix] Input focus on Safari browser
- Improve support for SVG, allow crop skipping

##### [Version 3.1.5](https://github.com/Codeinwp/neve/compare/v3.1.4...v3.1.5) (2022-02-07)

- [Fix] Inconsistent colors of links in the dashboard
- [Fix] WooCommerce product variations alignment when there are multiple variations
- [Fix] Some buttons in the dashboard showing screen reader text
- [Fix] Change comment reply title tag to H2 for accessibility reasons 
- [Fix] List top and bottom margins not applying in nested HTML tags inside the content wrap
- [Fix] Spaces from footer copyright component were stripped
- [Fix] Scroll snap bug in Elementor
- [Fix] Elementor select fields arrow
- [Fix] Elementor list styles in text widget
- [Fix] PHP 8.1 deprecation notices and warning
- Updated deprecated methods theme in customizer controls classes
- Add dashboard information cards
- Update Google Fonts

##### [Version 3.1.4](https://github.com/Codeinwp/neve/compare/v3.1.3...v3.1.4) (2022-01-20)

- [Feat] Support for different logos with color palette switcher
- [Feat] Open extra features when dashboard module is activated
- [Feat] Show regular price too with the sale price on the WooCommerce cart
- [Fix] Background customizer control throws a warning if focus point inputs saved empty
- [Fix] Grouped header components next to mega-menu are not clickable
- [Fix] Root CSS custom properties are outputted twice when using dark mode toggle in the header
- [Fix] Secondary button style inconsistency in dashboard
- [Fix] Accessibility label for the button in the header search component
- [Fix] Show local version of installed plugins in the Neve options page
- [Fix] Post meta date element layout when post width is narrow
- [Fix] Allow additional classes on mega menu column, divider & heading items
- [Fix] Single post section not displayed inside the customizer on the old skin

##### [Version 3.1.3](https://github.com/Codeinwp/neve/compare/v3.1.2...v3.1.3) (2022-01-06)

- [Fix] Sidebar positioning on the shop page
- [Fix] Hide the whole page cover when hiding title in page meta
- [Fix] Conflict between Neve, Relevanssi Premium, and Elementor Pro
- [Fix] Radio-image customizer control console errors
- Improve the font-weight control to display only the weights that are available for the selected font

##### [Version 3.1.2](https://github.com/Codeinwp/neve/compare/v3.1.1...v3.1.2) (2021-12-23)

- [Fix] 'neve_before_pagination' not working on the first page 
- [Fix] Mega menu issue on mobile
- [Fix] Primary navigation menu links to in-page sections have active color
- [Fix] Adds left and right border when a user is editing table contents
- [Feat] Add documentation section in customizer
- Remove the description in the header components selector popup
- Improve upsells to better inform about pro functionality
- Keep upsells when the license is invalid
- Update Google Fonts

##### [Version 3.1.1](https://github.com/Codeinwp/neve/compare/v3.1.0...v3.1.1) (2021-12-09)

- [Fix] Remove text-decoration on links that are not part of the page content
- [Fix] Added value attribute for close button on menu and alt attribute on the search form
- [Fix] Fixes the issue with the clear button inside WooCommerce widgets filter dropdowns
- [Fix] Move autofocus to close button inside mobile nav menu to prevent the blue outline
- [Fix] Sidebar on 404 page not working correctly
- [Fix] The reset button on the customizer range and number controls
- Add information about components in pro in header's popup
- Update Google Fonts

#### [Version 3.1.0](https://github.com/Codeinwp/neve/compare/v3.0.11...v3.1.0) (2021-11-24)

- [Feat] Global options for page - [Learn more](https://docs.themeisle.com/article/1491-neve-page-options)
- [Feat] Global header background
- [Fix] Starter content buttons alignment with and without the Gutenberg plugin

##### [Version 3.0.11](https://github.com/Codeinwp/neve/compare/v3.0.10...v3.0.11) (2021-11-10)

- [Feat] Add the possibility to replace WooCommerce Breadcrumbs with the ones from Yoast, SeoPress Pro, or RankMath - [Learn more](https://docs.themeisle.com/article/1123-breadcrumbs-in-neve#woo)
- [Fix] Infinite scroll not working in some specific context
- [Fix] Compatibility of palette switcher with Elementor global colors
- [Fix] Archive featured image as background works only with all taxonomies enabled
- [Fix] Post title alignment
- [Fix] Repeater control adding unused values to the database & causing customizer to load in publishing state
- [Fix] Edge case of footer columns not having a proper corresponding layout
- [Fix] Bug affecting the container size and elements style
- [Fix] Compatibility with Cartflows plugin
- [Fix] HTML Component's TinyMCE new lines for existing content and Safari support
- [Fix] Bring back custom font size field inside the WordPress editor
- [Fix] Removed previously added values for font-size presets inside the editor
- [Fix] Removed redundant border controls for mobile header sidebar
- [Fix] Ordering control with blank elements
- [Fix] Double scrollbar appearing in some customizer sections
- [Fix] Inconsistent console error inside the customizer preview  
- Update Google Fonts

##### [Version 3.0.10](https://github.com/Codeinwp/neve/compare/v3.0.9...v3.0.10) (2021-10-27)

- [Fix] header rows background images not applying on legacy skin

##### [Version 3.0.9](https://github.com/Codeinwp/neve/compare/v3.0.8...v3.0.9) (2021-10-26)

- [Fix] editor in HTML header component

##### [Version 3.0.8](https://github.com/Codeinwp/neve/compare/v3.0.7...v3.0.8) (2021-10-26)

- [Fix] Ordering control when header layout is changed on the single post
- [Fix] Customizer controls not loading properly due to browser caching issue in some instances

##### [Version 3.0.7](https://github.com/Codeinwp/neve/compare/v3.0.6...v3.0.7) (2021-10-26)

- [Feat] Header row border control - [Learn more](https://docs.themeisle.com/article/1245-header-rows-settings#border)
- [Feat] Jump to page blog pagination type - [Learn more](https://docs.themeisle.com/article/1306-neve-blog-archive-options#ordering)
- [Feat] Support for the named text sizes inside the editor 
- [Feat] TinyMCE field inside header HTML Component
- [Feat] Add Painter starter site - [Elementor](https://demosites.io/painter/)
- [Feat] Add Freelance Designer starter site - [Elementor](https://demosites.io/minimal-portfolio/)
- Replace react-sortable-hoc with sortablejs already used in the header
- Update Google Fonts

##### [Version 3.0.6](https://github.com/Codeinwp/neve/compare/v3.0.5...v3.0.6) (2021-10-11)

- [Feat] Adds alignment option to the mobile sidebar row setting;
- [Feat] Adds vertical alignment option for each footer row
- [Fix] Conflict with the global header from Elementor Pro
- [Fix] Cannot update a page: Updating failed. Can not update the value of 'neve_meta_sidebar' in the database
- [Fix] Missing default value for vertical-align on the single post cover layout
- [Fix] Builder rows with columns controls execute sync too soon on some environments
- [Fix] The available items aren't properly updated when adding a component to the mobile sidebar
- [Fix] Outdated template alert for search form on WooCommerce Status
- [Fix] Remove forced 100% width of images inside image widgets 
- [Fix] Custom layouts not acting properly on old skin
- [Fix] Letter-spacing inline-style not applying for headings
- Updated Google Fonts

##### [Version 3.0.5](https://github.com/Codeinwp/neve/compare/v3.0.4...v3.0.5) (2021-09-29)

- [Feat] Add additional font variants control for body font family used on the body
- [Fix] Remove hardcoded concatenation for menu item and page title
- [Fix] Fix hooks added in the REST endpoint for dynamic elements of the infinite scroll
- [Fix] Icons not rotating during site import in progress actions
- [Fix] Sidebar visibility on customizer preview
- [Fix] Food store compatibility
- [Fix] Unclosed div element on the shop page
- [Fix] Remove aria-role which was breaking AMP validator on the menu carets
- [Fix] Components inside the mobile sidebar inheriting wrong colors
- [Fix] Dropdowns inside the mobile sidebar inheriting overlay background color when using a background image
- [Fix] Footer components not updating after columns change
- Header components labels font styles should be inherited from the primary menu if placed in the same slot 
- Change archive post title tag back to h2
- Refreshed design for the Architecture starter site - [Gutenberg](https://demosites.io/architecture-gb/) | [Elementor](https://demosites.io/architecture/)
- Remove some unused CSS

##### [Version 3.0.4](https://github.com/Codeinwp/neve/compare/v3.0.3...v3.0.4) (2021-09-15)

- fix customizer loading when elementor pro is active
- fix exclusive products category restriction
- fix list indent overrides some blocks that contain ul/ol
- improve links appear within a larger body of block-level content, they must be clearly distinguishable from surrounding content
- improve keyboard navigation, allow focus trap inside search/mobile sidebar
- allow overwriting of Woocommerce search form and default search form
- Fix footer being hidden after we add one component
- Fix font family saving issue on the Header Nav widget

##### [Version 3.0.3](https://github.com/Codeinwp/neve/compare/v3.0.2...v3.0.3) (2021-09-06)

- [Fix] Cart icon component is vertically misaligned when it has a label
- [Fix] Fix notice with legacy values on padding for buttons when values are empty
- [Fix] Letterbox effect on video embeds
- [Fix] HTML structure for menu icon and consistency of aria-label with screen reader text
- [Fix] Search on other languages when PolyLang is activated
- [Fix] Customizer live refresh selector for header sidebar text color
- [Fix] Post tags spacing when there are a lot of tags
- [Fix] Mega menu container live refresh & size issues on old skin
- [Fix] Typography style specificity inside the editor was causing some blocks to act weird
- [Fix] Block patterns provided the theme provides had broken styles
- [Fix] Drop form fields & labels spacing controls
- [Fix] Design on password-protected posts
- Removes mobile dropdown outline on tap
- Update Google Fonts

##### [Version 3.0.2](https://github.com/Codeinwp/neve/compare/v3.0.1...v3.0.2) (2021-08-23)

- [Fix] issue with some hosting environments not loading JS files that contained ~ in the file name
- [Fix] items in customizer panel don't adjust when changing presets 
- [Fix] adds backspacing for Woocommerce standard pages and fieldset
- [Fix] solve an issue with multi worded google fonts names
- [Fix] blog custom layout inside the loop with masonry
- [Fix] div tag isn't closed for products on the shop page
- [Fix] Product category description displayed above the breadcrumbs and the "sort by" dropdown instead of below
- [Fix] Alignment classes still apply on the new skin for the primary menu when they shouldn't 
- [Fix] WooCommerce account login form appearance
- [Fix] Footer One component not working properly in WordPress core version 5.7.2
- [Fix] Autoscroll in customizer when opening Header/Footer builder
- [Fix] Comment reply HTML markup
- [Feat] Adds AMP infinite scroll
- [Feat] Adds section for Neve troubleshooting info
- [Feat] Enhanced repeater control for Customizer settings

##### [Version 3.0.1](https://github.com/Codeinwp/neve/compare/v3.0.0...v3.0.1) (2021-08-06)

- [Fix] bring back custom-background theme support
- [Fix] input type reset on new skin
- [Fix] fatal error because of non-existent class property
- [Fix] footer row display when using old skin
- [Fix] single product top wrap priority
- [Fix] builder breaking in specific edge-case when using the pro version

#### [Version 3.0.0](https://github.com/Codeinwp/neve/compare/v2.11.6...v3.0.0) (2021-08-04)

- [Feat] New Header & Footer builder experience
- [Feat] New default skin for frontend with better performance and page weight - [Learn more](https://docs.themeisle.com/article/1388-neve-3-0-core-design)
- [Feat] Color palette switcher header component (dark mode toggle) - [Learn more](https://docs.themeisle.com/article/1358-header-palette-switch-dark-light-theme)
- [Feat] New single post layout and customization options
- [Fix] Improve accessibility for the search form
- [Fix] Scripts appearing next to single product buttons
- [Fix] Compatibility issue with the PW WooCommerce Gift Cards plugin 
- [Fix] Compatibility issue with the WooCommerce Appointments plugin
- [Fix] Wishlist button looking distorted on the product page with sticky add to cart enabled
- [Fix] magic tag for {meta_author} not rendering the author avatar
- [Fix] Modified the check for the sidebar so that it does not conflict with the individual post settings
- [Fix] Disable Neve Styles on Custom Single Product and Products Archive Elementor Templates
- [Fix] Compatibility for Gutenberg widgets editor inside the customizer
- Add ability to self-heal theme mods in case of corrupted value
- Remove Otter compatibility for Gutenberg Templates

##### [Version 2.11.6](https://github.com/Codeinwp/neve/compare/v2.11.5...v2.11.6) (2021-06-01)

- [Fix] wishlist button on single product pages

##### [Version 2.11.5](https://github.com/Codeinwp/neve/compare/v2.11.4...v2.11.5) (2021-05-31)

- [Fix] Header cart doesn't show a dropdown when adding a new product to the cart
- [Fix] Replace current implementation to update meta with Data API
- [Fix] Image width of archive products are not wide enough
- [Fix] External links behavior on the changelog page

##### [Version 2.11.4](https://github.com/Codeinwp/neve/compare/v2.11.3...v2.11.4) (2021-05-14)

- [Fix] font weights not getting properly enqueued when some font families are set to inherit
- [Fix] CSS error causing padding issues on some Gutenberg blocks

##### [Version 2.11.3](https://github.com/Codeinwp/neve/compare/v2.11.2...v2.11.3) (2021-05-12)

- [Fix] Editor text color not working as expected
- [Fix] Editor group block and columns block child blocks not inheriting text color
- Restyle post date styling inside latest posts widget

##### [Version 2.11.2](https://github.com/Codeinwp/neve/compare/v2.11.1...v2.11.2) (2021-04-28)

- [Fix] Dropdowns (input select) in specific widgets do not respect global form styles
- [Fix] Wrong text color inheritance in group blocks with color settings
- [Fix] Cart icon opening behavior when positioned on the left side of header
- [Fix] Improve accessibility for external links in the Neve page and customizer
- [Fix] Color Picker Modal remains open even after switching Color Palettes
- [Fix] Increase Templates Cloud visibility on Neve options page
- [Fix] Infinite scroll loads posts of incorrect language
- [Feat] Add global color as presets in beaver builder
- [Feat] Ignore lazyload on above the fold images 
- [Feat] implement next page links for infinite scroll
- [Feat] Adds compatibility for meta association on template import/export for Neve Cloud

##### [Version 2.11.1](https://github.com/Codeinwp/neve/compare/v2.11.0...v2.11.1) (2021-04-13)

- [Fix] Fatal error caused by the removal of some global functions

#### [Version 2.11.0](https://github.com/Codeinwp/neve/compare/v2.10.4...v2.11.0) (2021-04-12)

- [Fix] Masonry on the blog
- [Fix] Sync theme mods on child themes
- [Fix] Load proper weights for fonts in the customizer
- [Fix] Global colors switching back when the color-picker is opened and input is focused
- [Fix] Header cart icon not updating the total amount when adding a new product
- [Fix] Hide the empty comment tag if comments are not enabled
- [Fix] Hover color for secondary buttons when WooCommerce is active
- [Fix] Headings not inheriting body font when set as default
- [Fix] Active buttons from the editor sidebar overlapping the panel heading  
- [Feat] Allow hosting Google Fonts locally
- Show last updated date on posts
- New developer hooks

##### [Version 2.10.4](https://github.com/Codeinwp/neve/compare/v2.10.3...v2.10.4) (2021-03-16)

- [Fix] customizer responsive switches not working

##### [Version 2.10.3](https://github.com/Codeinwp/neve/compare/v2.10.2...v2.10.3) (2021-03-16)

- [Fix] utilize wp_get_attachment_image for responsive logo image in header
- [Fix] add compatibility with PHP 8
- [Fix] apply font-family for inputs
- [Fix] button styles not applying to form buttons properly

##### [Version 2.10.2](https://github.com/Codeinwp/neve/compare/v2.10.1...v2.10.2) (2021-03-01)

- [Feat] Add compatibility with Google Web Stories
- [Fix] meta_comments and current_post_meta magic tags
- [Fix] add to cart notice when product template is made with Elementor
- [Fix] changelog parsing in the Neve Options dashboard page
- [Fix] global colors palette selector not showing swatches in safari
- [Fix] visual hierarchy for the Cart Totals
- [Fix] subtotal prices squished on checkout pages for products with large titles
- [Fix] street address textbox was too narrow in Woocommerce

##### [Version 2.10.1](https://github.com/Codeinwp/neve/compare/v2.10.0...v2.10.1) (2021-02-10)

- [Feat] Compatibility with Beaver Themer parts location
- [Feat] Out of stock badge
- [Fix] Variable products in the Header Builder Cart component
- [Fix] {meta_author} magic tag throwing notice on 404 page
- [Fix] Code tag style inconsistencies
- [Fix] Header search component background now inherits site background
- [Fix] Editor background-color
- [Fix] Close button style for off-canvas cart
- [Fix] Appearance of global colors selector in customizer when Gutenberg plugin is installed
- [Fix] Allow HTML markup inside the comments heading
- [Fix] Remove some redundant classes from the Header / Footer

#### [Version 2.10.0](https://github.com/Codeinwp/neve/compare/v2.9.5...v2.10.0) (2021-01-18)

- [Feat] Form fields styling controls
- [Feat] Redesign global colors list
- [Fix] Infinite scroll on the Blog page with masonry enabled

##### [Version 2.9.5](https://github.com/Codeinwp/neve/compare/v2.9.4...v2.9.5) (2020-12-28)

- [Feat] Update starter content

##### [Version 2.9.4](https://github.com/Codeinwp/neve/compare/v2.9.3...v2.9.4) (2020-12-25)

- [Feat] Starter content support

##### [Version 2.9.3](https://github.com/Codeinwp/neve/compare/v2.9.2...v2.9.3) (2020-12-17)

- [Fix] Cart menu component layout on mobile devices
- [Fix] Dynamic tags list not inserted for header/footer builder components

##### [Version 2.9.2](https://github.com/Codeinwp/neve/compare/v2.9.1...v2.9.2) (2020-12-15)

- [Fix] Customizer tabs not opening in Windows browsers
- [Fix] Syntax error causing errors
- [Fix] Search input not focused when opened from the Search Icon component
- [Fix] Individual page settings not applying to the Shop page
- [Fix] Composer requiring PHP greater than 7.1.0

##### [Version 2.9.1](https://github.com/Codeinwp/neve/compare/v2.9.0...v2.9.1) (2020-12-07)

- [Feat] New Fallback Font option
- [Fix] Compatibility with WP 5.6
- [Fix] WooCommerce products variations dropdown color
- [Fix] Cart Icon component layout revision
- [Fix] Not translatable strings in the Options page

#### [Version 2.9.0](https://github.com/Codeinwp/neve/compare/v2.8.4...v2.9.0) (2020-11-24)

- [Feat] Globally linked Color Palettes
- [Feat] Compatibility with Template Cloud and single page templates import
- [Feat] Adds compatibility for more Checkout styles
- [Fix] Compatibility with the Visualizer plugin
- New Gutenberg Starter Sites

##### [Version 2.8.4](https://github.com/Codeinwp/neve/compare/v2.8.3...v2.8.4) (2020-11-02)

- [Fix] Warning jQuery .load() function is deprecated
- [Fix] Header builder responsive instructions notifications
- [Fix] Search icon component going out of the window when right-aligned
- [Fix] Search icon opening behavior on mobile
- [Fix] Button styling for WooCommerce blocks
- [Fix] Move Customizer homepage settings to the Layout panel

##### [Version 2.8.3](https://github.com/Codeinwp/neve/compare/v2.8.2...v2.8.3) (2020-10-19)

- [Fix] Exclusive products section in RTL mode
- [Fix] Font Family dropdown layout in RTL mode
- [Fix] Migrate from Zelle theme
- [Fix] Default values for the spacing and custom content width controls
- [Fix] Default line-height for buttons
- [Fix] Search icon color in the mobile header builder
- New Gutenberg Starter Sites

##### [Version 2.8.2](https://github.com/Codeinwp/neve/compare/v2.8.1...v2.8.2) (2020-10-01)

- [Feat] New Blog Layout options
- [Feat] New Header Builder presets
- [Feat] Support for Alpha RGBa Color Picker
- [Feat] Enhancements to the Neve Options page
- [Fix] Updated date layout in magic tags {current_post_meta} {meta_date}
- [Fix] Compatibility with Elementor PRO 404 templates pages
- [Fix] Style captions
- [Fix] Button component style options overlapping with general button options
- [Fix] Default meta elements order

##### [Version 2.8.1](https://github.com/Codeinwp/neve/compare/v2.8.0...v2.8.1) (2020-09-17)

- [Feat] New options for styling buttons ( text-transform, weight, font size, line height, and letter spacing )
- [Feat] New block patterns
- [Feat] Async/defer loading of the JS scripts
- [Fix] Masonry not working in Safari
- [Fix] Range controls in older versions of WordPress
- [Fix] Links and headings not inheriting Customizer colors inside the editor
- [Fix] Do not parse HTML tags inside the search heading
- [Fix] Cart Icon size and color options not working properly
- [Fix] Accessibility issues with form labels
- [Fix] Update list of Google Fonts
- [Fix] Button state management in the Starter Sites notice
- [Fix] Inputs text color on a dark background
- New Gutenberg Starter Sites

#### [Version 2.8.0](https://github.com/Codeinwp/neve/compare/v2.7.7...v2.8.0) (2020-09-03)

- [Feat] Compatibility with AMP 2.0
- [Feat] New opening behaviors for the mobile menu (Slide from Left/Right, Pull from Left/Right, Full Canvas, Slide Down)
- [Feat] New option to automatically expand first level dropdowns on mobile
- [Feat] Single post/page customization options for Gutenberg editor
- [Fix] Primary Menu and Secondary Menu alignment on mobile
- [Fix] Scrollbar in the Primary Menu on mobile for larger font size
- [Fix] Items spacing for Primary Menu on mobile
- [Fix] Range controls lagging

##### [Version 2.7.7](https://github.com/Codeinwp/neve/compare/v2.7.6...v2.7.7) (2020-08-19)

- [Fix] Permissions callback for REST route in WP 5.5
- [Fix] Color not working for the Cart Icon component
- [Fix] Headings and lists alignment in the editor
- [Fix] Warnings in the Music Band 2 Starter Site
- [Fix] Range controls controlled from the keyboard
- [Fix] Previewing templates from Otter Blocks
- [Fix] Inline text-color not applying in the editor
- New Gutenberg Starter Sites

##### [Version 2.7.6](https://github.com/Codeinwp/neve/compare/v2.7.5...v2.7.6) (2020-08-04)

- [Feat] New magic tags for single post pages
- [Feat] Move Starter Sites library and import process in the Cloud Templates & Patterns collection plugin
- [Fix] Compatibility with WP 5.5
- [Fix] Starter sites tab layout on smaller resolutions

##### [Version 2.7.5](https://github.com/Codeinwp/neve/compare/v2.7.4...v2.7.5) (2020-07-10)

- [Fix] Move Starter Sites library and import process in OrbitFox companion plugin

##### [Version 2.7.4](https://github.com/Codeinwp/neve/compare/v2.7.3...v2.7.4) (2020-07-08)

- [Feat] Improved Starter Sites library layout
- [Feat] Use display:swap for Google Fonts
- [Fix] Live refresh for spacing controls
- [Fix] Canvas mode for the search icon in AMP on mobile
- New Gutenberg Starter Sites

##### [Version 2.7.3](https://github.com/Codeinwp/neve/compare/v2.7.2...v2.7.3) (2020-06-23)

- [Feat] New typography controls for the Blog and Single Post pages
- [Feat] New vertical alignment controls for the footer builder components
- [Fix] Neve Options page in RTL mode
- [Fix] Optimize screenshots in Starter Sites library
- [Fix] Make sure all keys in values are defined for the Spacing Component
- [Fix] Add back single product name in breadcrumbs
- New Brizy Starter Sites

##### [Version 2.7.2](https://github.com/Codeinwp/neve/compare/v2.7.1...v2.7.2) (2020-06-04)

- [Feat] Three layouts for the header builder Search Icon component ( Canvas, Minimal and Float above Header )
- [Feat] Styling controls for the header builder Search Icon and Search Form components
- [Feat] New neve_before_header_wrapper_hook and neve_after_header_wrapper_hook hooks
- [Fix] Dismissable notice for contributing to Neve
- [Fix] Support for Main image width and Thumbnail width options in WooCommerce ( to fix blurred images on the Shop page )
- [Fix] Wrong default padding for buttons
- [Fix] Wrong content width for grouped blocks
- [Fix] Neve Options page not loading in Microsoft Edge v18
- [Fix] Update list of Google Fonts
- [Fix] Google lighthouse reports not unique ID attribute
- [Fix] Live refresh with the Primary Menu hover skin option

##### [Version 2.7.1](https://github.com/Codeinwp/neve/compare/v2.7.0...v2.7.1) (2020-05-21)

- [Feat] Replaced Skin Mode control with a Text Color control in the header builder rows
- [Fix] Apply row background color to menu dropdowns
- [Fix] Filter by price widget button default background-color
- [Fix] Make the alignment classes more generic to allow overwriting from block specific settings
- [Fix] Clickable links in the Changelog area
- [Fix] Neve Options page on lower resolutions
- [Fix] Check for the Rest API endpoint before allowing users to start an import

#### [Version 2.7.0](https://github.com/Codeinwp/neve/compare/v2.6.6...v2.7.0) (2020-05-13)

- [Feat] Improved Neve Options page and onboarding experience
- [Feat] Integration with the Toolset plugin
- [Feat] Improved dynamic CSS generation & Gutenberg integration
- [Fix] Yellow background on the number of products in categories on the Shop page
- [Fix] Secondary Menu alignment on mobile
- New starter sites
- [Book Shop](https://themeisle.com/demo/?theme=Book%20Shop)
- [Psychologist](https://themeisle.com/demo/?theme=Psychologist)
- [Doctors](https://themeisle.com/demo/?theme=Doctors%202)
- [Pet Shop](https://themeisle.com/demo/?theme=Pet%20Shop)
- [Apparel](https://themeisle.com/demo/?theme=Apparel)
- [Boat Rental](https://themeisle.com/demo/?theme=Boat%20Rental)
- [Jewellery Shop](https://themeisle.com/demo/?theme=Jewellery%20Shop%202)
- [Perfume Shop](https://themeisle.com/demo/?theme=Perfume%20Shop)
- [Music Band](https://themeisle.com/demo/?theme=Music%20Band%202)
- [Fitness Trainer](https://themeisle.com/demo/?theme=Fitness%20Trainer)

##### [Version 2.6.6](https://github.com/Codeinwp/neve/compare/v2.6.5...v2.6.6) (2020-04-07)

- [Fix] Background color for mobile menu
- [Fix] Last Menu Search icon in AMP

##### [Version 2.6.5](https://github.com/Codeinwp/neve/compare/v2.6.4...v2.6.5) (2020-04-06)

- [Fix] Infinite scroll with masonry scrolling to the top of page
- [Fix] Variations product select height on iPhone
- [Fix] JS error regarding customizer typography line-height suffix
- [Fix] Max Mega Menu alignment
- [Fix] Firefox Customizer visual bugs
- [Fix] Compatibility with latest Gutenberg version
- [Fix] Add missing role=button and tabindex=0 for search icon button for AMP
- [Fix] Small performance tweaks and optimizations
- New Gutenberg Starter Sites

##### [Version 2.6.4](https://github.com/Codeinwp/neve/compare/v2.6.3...v2.6.4) (2020-03-23)

- [Fix] Disable admin notice
- New Gutenberg Starter Sites

##### [Version 2.6.3](https://github.com/Codeinwp/neve/compare/v2.6.2...v2.6.3) (2020-03-19)

 * [Feat] Refactor customizer UI
* [Fix] Compatibility issues with WP 5.4
* [Fix] Compatibility with WooCommerce Product Addon plugin

### v2.6.2 - 2020-02-26 
 **Changes:** 
 * [Feat] New text color option for the HTML and Copyright components
* [Feat] New option to Disable Homepage Link in the Logo & Site Identity component
* [Fix] Issues in AMP when using Google Tag Manager Codeless Injection
* [Fix] Footer menu alignment
* [Fix] Mega Menu not working in Edge
* [Fix] Narrow editor with the new Gutenberg version
* New Gutenberg and Beaver Builder Starter Sites
 
 ### v2.6.1 - 2020-02-13 
 **Changes:** 
 * [Feat] New header presets
* [Feat] New justify option for the button component
* [Feat] New menu item spacing and menu item height options
* [Fix] Style closing menu icon to match menu icon
* [Fix] Primary and secondary menu alignments
* [Fix] Made button a mergeable component in the header builder
* [Fix] Changed the Leave a reply title to H3
* [Fix] Search form width when merged with mergeable components
* [Fix] Selective refresh on non-header builders
* [Fix] Notice from array offset in responsive style method
* [Fix] Page break pagination not appearing on the blog page
 
 ### v2.6.0 - 2020-02-03 
 **Changes:** 
 * [Feat] Adds quantity box back to the product pages 
* [Feat] Better organize the Woocommerce controls in the customizer
*  [Fix] Fixed metabox range input style in Firefox 
* [Fix] Fixed editor alignment for the quote block
*  [Fix] Fixed sidebar layout not updating on single product pages [Fix] Fixed search results page sidebar when using Elementor
*  [Fix] Fixed expanded cart positioning
* New Starter Sites
* [ Web Agency](https://themeisle.com/demo/?theme=Web%20Agency)
*  [Blogger](https://themeisle.com/demo/?theme=Blogger)
 
 ### v2.5.4 - 2019-12-19 
 **Changes:** 
 * [Feat] New styling options for buttons in the header builder
* [Feat] New dynamic tags for the header and footer builder
* [Fix] External fonts not loading in editor
* [Fix] Removed unnecessary post metadata saved in the database
* [Fix] Improved primary menu closing animation on mobile
* [Fix] Button block preview in the editor
* [Fix] Compatibility with the latest update of Gutenberg
* [Fix] Improved padding and margin components layout
* [Fix] Button border-radius control default value not allowing a zero value
* [Fix] Made default layout full width when the sidebar is empty
 
 ### v2.5.3 - 2019-12-05 
 **Changes:** 
 * [Feat] New option to allow both logo and site and tagline in different layouts
* [Feat] New dedicated typography controls for the Primary, Secondary and Footer menus, HTML, Copyright, Cart and Search icons components on the header builder
* [Fix] Embeds compatibility issues with Jetpack and the Embed Plus for YouTube – Gallery, [Fix] Channel, Playlist, Live Stream plugin
* [Fix] Excerpt compatibility with the Seriously Simple Podcasting plugin
* [Fix] Removed list styling from the All Products block in the WooCommerce Block plugin
* [Fix] Content width live preview on mobile devices
* [Fix] Replaced the Last menu item option with dedicated components for new users
* [Fix] Removed Neve Visual Integration causing issues in the editor
* [Fix] Copyright component striping spaces before and after links
* [Fix] Replaced buttons old padding control with a new version
* [Fix] Padding for the Menu Icon component
* [Fix] Lists spacing alignment
* [Fix] Updated Google Fonts list
* [Fix] Getting post meta value for single product page meta-box
 
 ### v2.5.2 - 2019-11-19 
 **Changes:** 
 * [Feat] Improved mobile header/footer builder UX
* [Feat] New styling controls for the Menu Icon component
* [Feat] New Filled and Outline style options for buttons
* [Fix] Uploading background images in the header/footer builder
* [Fix] Content alignment when Gutenberg is activated
* [Fix] Multiple embeds not visible on the single post page
* [Fix] Better alignment for small icon components of the header/footer builder
* [Fix] Excerpts now inherit text color
* [Fix] Single product titles now inherit H1 typography options
* [Fix] Typography units changes did not trigger control refresh
* [Fix] Enlarged the narrow content in the editor
* [Fix] Removed hover effect on table rows overriding block colors
* [Fix] Overriding header/footer builder templates using child themes
 
 ### v2.5.1 - 2019-11-04 
 **Changes:** 
 * [Fix] Correct migration of body font size to new version
 
 ### v2.5.0 - 2019-11-04 
 **Changes:** 
 * [Feat] Improve header/footer builder UX
* [Feat] Increased header/footer builder row height to 700px
* [Feat] Improve typography controls, adds Text Transform, Font Weight, Letter Spacing controls for headings.
* [Feat] Shadow option for the blog thumbnails
* [Fix] Removed extra padding-top on embeds
* [Fix] Embeds not visible on the blog page
* [Fix] Small compatibility issues with WP 5.3
* [Fix] Cover block text color not updating
* [Fix] Reply comments mechanism when Yoast is installed
* [Fix] Scroll on mobile and tablet and wireframe view in the Divi editor
* [Fix] Content width on full-width container
* [Fix] Headings blocks errors with Gutenberg 6.8.0
* New Beaver Builder Starter Sites
* New Brizy Starter Sites

 ### v1.0.0 - 2018-09-06 
 **Changes:**
