<md-card>
  <style scoped>
    :scope .card.horizontal md-card-image .card-image img{
      max-width: initial;
    }
  </style>
  <div class="card {size} {color} {stickyAction} {dir}" onclick="{onClick}">
    <yield/>
  </div>
  <script>
    var self = this;
    self.size = opts.size || '';
    self.color = opts.color || '';
    self.stickyAction = opts.stickyAction ? 'sticky-action' : '';
    self.dir = opts.horizontal ? "horizontal" : ''
    self.onClick = function(e){
      var $root = $(self.root)
      if ($root.find('.card-reveal').length) {
        if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
          // Make Reveal animate down and display none
          $root.find('.card-reveal').velocity(
            {translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() { $(this).css({ display: 'none'}); }
            });
        }
        else if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i')) ) {
          $root.find('.card').css('overflow', 'hidden');
          $root.find('.card-reveal')
            .css({ display: 'block'})
            .velocity("stop", false)
            .velocity(
              {translateY: '-100%'}, {
                duration: 300, 
                queue: false, 
                easing: 'easeInOutQuad'
              });
        }
      }
    }
  </script>
</md-card>