
///====================================================================
$(function () {
    $('#bigTable').simpleTableSort({
        order: 'asc',
        excludeSortColumns: [1],
        dynamic: true,
        multiSortStates: false,

        onBeforeSort: function (index) {
            $('#sort-loading').show();
        },

        onAfterSort: function (index) {
            $('#sort-loading').animate({ opacity: 0 }, 100, function () {
                $(this).css({
                    display: 'none',
                    opacity: .5
                });
            });
        }
    });

    $('#desc-link').on('click', function () {
        var pre = $('#desc-link').find('.pre');
        $('#desc').slideToggle(function () {
            pre.text(pre.text() == '+' ? '-' : '+');
        });
    });

    $('#delete-row').on('click', function () {
        $('#bigTable').find('tbody').children().first().eq(0).remove();
    });
});

///====================================================================