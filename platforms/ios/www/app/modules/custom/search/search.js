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
            filter: 'title'
        };
        return content;
    }
    catch (error) { console.log('search_autocomplete_page - ' + error); }
}
