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
            content.welcome = {
            	markup: '<p style="text-align: center;">' +
            	t('Enter a course name you want to search!') +
            	'</p>'
   			};
            content.search = {
                theme: 'autocomplete',
                remote: true,
                custom: true,
                path: 'json-out',
                value: 'nid',
                label: 'title',
                filter: 'title',
            };
            return content;
        }
        catch (error) { console.log('search_autocomplete_page - ' + error); }
    }