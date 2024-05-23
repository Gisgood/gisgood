jQuery(document).ready(function ($) {

    $('body select').each(function () {
        var $this = $(this),
            numberOfOptions = $this.children('option').length;

        $this.addClass('select-hidden');
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"><span></span></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.find('span').text($this.children('option:selected').text());

        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);

        for (var i = 0; i < numberOfOptions; i++) {
            var $option = $this.children('option').eq(i);
            var $li = $('<li />', {
                text: $option.text(),
                rel: $option.val()
            });

            // Check if the option has 'attr-coin-id' attribute
            if ($option.attr('data-coin-wallet')) {
                // If so, add it to the li item
                $li.attr('data-coin-wallet', $option.attr('data-coin-wallet'));
            }

            $li.appendTo($list);

            if ($option.is(':selected')) {
                $li.addClass('is-selected');
            }
        }

        var $listItems = $list.children('li');

        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            var selectedVal = $(this).attr('rel');
            $styledSelect.find('span').text($(this).text());
            $styledSelect.removeClass('active');
            $this.val(selectedVal);
            $list.find('li.is-selected').removeClass('is-selected');
            $(this).addClass('is-selected');
            $list.hide();

            $this.trigger('change'); // Manually trigger the change event on the original select
        });

        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });
});
