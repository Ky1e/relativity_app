/**
 * Implements hook_menu().
 */
function search_menu() {
    var items = {};
    items['search'] = {
        title: 'Search',
        page_callback: 'search_autocomplete_page'
    };
    return items;
}

function search_autocomplete_page() {
    try {
        var content = {};
        content.search = {
            theme: 'autocomplete',
            remote: true,
            path: 'search-autocomplete',
            value: 'nid',
            label: 'title',
            filter: 'title',
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