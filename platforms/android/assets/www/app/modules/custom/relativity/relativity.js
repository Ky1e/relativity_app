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
    content.site_info = {
      markup: '<h4 style="text-align: center;">' +
      Drupal.settings.site_path +
      '</h4>'
    };
    content.welcome = {
      markup: '<h2 style="text-align: center;">' +
      t('Welcome to Relativity Mobile') +
      '</h2>' +
      '<p style="text-align: center;">' +
      t('The mobile solution for Relativity!') +
      '</p>'
    };
    // content.logo = {
    //   markup: '<center>' +
    //   theme('image', {path: drupalgap.settings.logo}) +
    //   '</center>'
    // };
    content.get_started = {
      theme: 'button_link',
      text: t('Getting Started Guide'),
      path: 'http://www.github.com/ky1e/relativity_app',
      options: {InAppBrowser: true}
    };
    content.support = {
      theme: 'button_link',
      text: t('Support'),
      path: '#',
      options: {InAppBrowser: true}
    };
    return content;
  }//throws error if the content is not loaded
  catch (error) { console.log('relativity_front_page - ' + error); }
}