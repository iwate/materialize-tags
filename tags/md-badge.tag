<md-badge>
  <span class="{_new}badge" data-badge-caption="{caption}">
    <yield/>
  </span>
  <script>
    var self = this;
    self._new = opts.new ? 'new ': '';
    self.caption = opts.caption || '';
  </script>
</md-badge>