/**
 * Created by Kyle on 3/10/16.
 */

/**
 * Implements template_info() hook.
 */
function relativity_info() {

  // Init an empty theme object.
  var theme = {};

  // Set the theme's machine name.
  theme.name = 'relativity';

  // Init the theme's regions.
  theme.regions = {};

  // Header region.
  theme.regions['header'] = {
    attributes: {
      'data-role': 'header',
      'data-position': 'fixed',
      'data-theme': 'b'
    }
  };
  
  // Sub header region.
  theme.regions['sub_header'] = {
    attributes: {
      'data-role': 'header',
    }
  };

  // Navigation region.
  theme.regions['navigation'] = {
    attributes: {
      'data-role': 'navbar'
    }
  };

  // Content Region
  theme.regions['content'] = {
    attributes: {
      'data-role': 'content'
    }
  };

  // Footer region.
  theme.regions['footer'] = {
    attributes: {
      'data-role': 'footer',
      'data-position': 'fixed',
      'data-position': 'b'
    }
  };

  // Return the assembled theme.
  return theme;

}
