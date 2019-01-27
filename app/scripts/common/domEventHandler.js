import Util from './utils.js';
export
default {
    renderMyTemplate: function(id, inputTemplate, data) {

        var template = _.template(inputTemplate);
        if (data) {
            $('#' + id).html(template(data));
        } else {
            $('#' + id).html(template());
        }
    },

    bindEvent: function(id, currEvent, currData, currEventHandler) {
        $('#' + id).on(currEvent, currData, currEventHandler);
    },

    bindClassEvent: function(className, currEvent, currData, currEventHandler) {
        $('.' + className).on(currEvent, currData, currEventHandler);
    },

    bindEventByTag: function(tag, currEvent, currData, currEventHandler) {
        $(tag).on(currEvent, currData, currEventHandler);
    },

    bindRippleEvent: function(event) {
            event.preventDefault();

            var $div = $('<div/>'),
                btnOffset = $(this).offset(),
                xPos = event.pageX - btnOffset.left,
                yPos = event.pageY - btnOffset.top;



            $div.addClass('ripple-effect');
            var $ripple = $('.ripple-effect');

            $ripple.css('height', $(this).height());
            $ripple.css('width', $(this).height());
            $div
                .css({
                    top: yPos - ($ripple.height() / 2),
                    left: xPos - ($ripple.width() / 2),
                    background: $(this).data('ripple-color')
                })
                .appendTo($(this));

            window.setTimeout(function() {
                $div.remove();
            }, 2000);

    },
    hammerManager: function(id, currEvent, currEventHandler) {
        let Manager = new Hammer(id);
        Manager.add(new Hammer.Swipe({
            threshold: 100
        }));
        Manager.get('swipe').set({ direction: Hammer.DIRECTION_ALL });
        Manager.on(currEvent, currEventHandler);
    },

    hammerEvent: function(id, currEvent, currEventHandler) {
        (new Hammer(document.getElementById(id))).on(currEvent, currEventHandler);
    },

    renderView: function(view, data) {
        view.render(data);
    }
}
