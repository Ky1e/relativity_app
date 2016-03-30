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

    /**
     * My autocomplete page callback.
     */
    function search_autocomplete_page() {
        try {
            var content = {};
            content.search = {
                theme: 'autocomplete',
                remote: true,
                custom: true,
                path: 'json-out',
                value: 'nid',
                label: 'title',
                filter: '%',
                params: 'limit=5'
            };
            return content;
        }
        catch (error) { console.log('search_autocomplete_page - ' + error); }
    }