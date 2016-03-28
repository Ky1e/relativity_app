I am a firm believer in always starting a new project by completing a "Hello World" because it is familiar and will
 give you an basic understanding of how a project is constructed After completing this "Hello World" you'll be ready to 
 start building a mobile application for your Drupal website.
   
1. Create the "Hello World" App Page
   * Navigate to www/app/modules/custom and create a new folder called my_module. 
   * Create a new Javascript file and name it my_module.js.
   * Place this code into the my_module JavaScript file:
```
/**
 * Implements hook_menu().
 */
function my_module_menu() {
  var items = {};
  items['hello_world'] = {
    title: 'My custom front page',
    page_callback: 'my_module_hello_world_page'
  };
  return items;
}

/**
 * The callback for the "Hello World" page.
 */
function my_module_hello_world_page() {
  var content = {};
  content['my_button'] = {
    theme: 'button',
    text: 'Hello World',
    attributes: {
      onclick: "drupalgap_alert('Hi!')"
    }
  };
  return content;
}
```

2. Set the "Hello World" page as the App's Front Page
   * Open the `www/app/settings.js` file and set the app's front page path:

```
drupalgap.settings.front = 'hello_world';
```

3. Run the App by typing the following command in terminal:

```
cordova build && run
```

Now when we run the app, we'll have a "Hello World" button widget that will say "Hi" when clicked:

![Hello World](http://www.drupalgap.org/sites/default/files/hello-world_0.png)

That's it, you've now got the basic tools to build a custom mobile application for a Drupal website!

Next, try placing an additional [widget](Widgets) or two on your page or head back to the getting started guide for more topics and features within DrupalGap.
