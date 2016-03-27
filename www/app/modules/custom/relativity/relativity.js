/**
 * Created by Kyle on 3/10/16.
 */

/**
 * Implements hook_install().
 */
function my_module_install() {
  try {
    var css = drupalgap_get_path('module', 'relativity') + '/relativity.css';
    drupalgap_add_css(css);
  }
  catch (error) { console.log('relativity_install - ' + error); }
}

/**
 * Implements hook_menu().
 */

