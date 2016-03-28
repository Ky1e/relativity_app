/**
 * Created by Kyle on 3/28/16.
 */

/**
 * Implements hook_menu().
 */
function front_page_menu() {
    var items = {};
    items['hello_world'] = {
        title: 'DrupalGap',
        page_callback: 'my_module_hello_world_page'
    };
    return items;
}

/**
 * The callback for the "Hello World" page.
 */
function front_page_hello_world_page() {
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