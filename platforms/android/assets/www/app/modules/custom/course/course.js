/**
 * Created by Kyle on 3/28/16.
 */

/**
 * Implements hook_menu().
 */

function course_menu() {
    var items = {};
    items['course'] = {
        title: 'Courses',
        page_callback: 'course_articles_page'
    };
    return items;
}

/**
 * The page callback to display the view.
 */
function course_articles_page() {
    try {
        var content = {};
        content.welcome = {
            	markup: '<p style="text-align: center;">' +
            	t('Select a course for more information') +
            	'</p>'
   			};
        content['course_list'] = {
            theme: 'view',
            format: 'unformatted_list',
            path: 'json-out/course', /* the path to the view in Drupal */
            row_callback: 'course_articles_list_row',
            empty_callback: 'course_articles_list_empty',
            attributes: {
                id: 'course_list_view'
            }
        };
        return content;
    }
    catch (error) { console.log('course_articles_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function course_articles_list_row(view, row) {
    try {
        return l(t(row.title), 'node/' + row.nid);
    }
    catch (error) { console.log('course_articles_list_row - ' + error); }
}

/**
 *
 */
function course_articles_list_empty(view) {
    try {
        return t('Sorry, no courses were found.');
    }
    catch (error) { console.log('course_articles_list_empty - ' + error); }
}