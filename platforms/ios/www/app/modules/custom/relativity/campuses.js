/**
 * Created by Kyle on 3/28/16.
 */

/**
 * Implements hook_menu().
 */

function campus_menu() {
    var items = {};
    items['campus_articles_page'] = {
        title: 'Campuses',
        page_callback: 'campus_articles_page'
    };
    return items;
}

/**
 * The page callback to display the view.
 */
function campus_articles_page() {
    try {
        var content = {};
        content['campus_list'] = {
            theme: 'view',
            format: 'ul',
            path: 'campuses', /* the path to the view in Drupal */
            row_callback: 'campus_articles_list_row',
            empty_callback: 'campus_articles_list_empty',
            attributes: {
                id: 'campus_list_view'
            }
        };
        return content;
    }
    catch (error) { console.log('campus_articles_page - ' + error); }
}

/**
 * The row callback to render a single row.
 */
function campus_articles_list_row(view, row) {
    try {
        return l(t(row.title), 'node/' + row.nid);
    }
    catch (error) { console.log('campus_articles_list_row - ' + error); }
}

/**
 *
 */
function campus_articles_list_empty(view) {
    try {
        return t('Sorry, no campuses were found.');
    }
    catch (error) { console.log('campus_articles_list_empty - ' + error); }
}