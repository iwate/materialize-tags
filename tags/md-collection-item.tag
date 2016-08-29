<md-collection-item>
  <a href="{href}" class="collection-item">
    <yield/>
  </a>
  <script>
    var self = this;
    self.href = opts.href || 'javascript:void(0)';
  </script>
</md-collection-item>