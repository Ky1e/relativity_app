/**
 * Created by Kyle on 3/10/16.
 */

/* Implements hook_menu() which creates the front page of the app. */
function relativity_menu() {
  try {
    var items = {};
    //front_page is used in the settings.js file drupalgap.settings.front = 'front_page'; to display the page as the front page
    items['front_page'] = {
      /* Adds a title at the very top of the page right below the status bar */
      title: 'Relativity Mobile',
      page_callback: 'relativity_front_page'
    };
    return items;
  }//throws error if the page_callback is not loaded
  catch (error) { console.log('relativity_menu - ' + error); }
}

/* Implements content hook to change content item and add markup */
function relativity_front_page() {
  try {
    var content = {};
    content['my_intro_text'] = {
      markup: 'Welcome to Relativity Mobile!',
      messages: 'Here is where we will start the adventure into mobile app development',
      main: 'More text'
    };
    return content;
  }//throws error if the content is not loaded
  catch (error) { console.log('relativity_front_page - ' + error); }
}
