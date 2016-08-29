<md-card-panel>
  <div class="card-panel {size} {color}">
    <span class="{textColor}">
      <yield/>
    </span>
  </div>
  <script>
    var self = this;
    self.size = opts.size || '';
    self.color = opts.color || 'teal';
    self.textColor = opts.textColor || 'white-text';
  </script>
</md-card-panel>