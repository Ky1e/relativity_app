/**
 * Created by Kyle on 3/10/16.
 */

/**
 * Implements hook_menu() to create the front page of the app.
 */
function relativity_menu() {
  try {
    var items = {};
    items['front_page'] = {
      title: 'Relativity Mobile',
      page_callback: 'relativity_front_page'
    };
    return items;
  }
  catch (error) { console.log('relativity_menu - ' + error); }
}

function relativity_front_page() {
  try {
    var content = {};
    content['my_intro_text'] = {
      markup: 'Welcome to Relativity Mobile!'
    };
    return content;
  }
  catch (error) { console.log('relativity_front_page - ' + error); }
}
