<md-card-content>
  <style scoped>
    :scope {
      flex-grow: 1;
    }
  </style>
  <div class="card-content {textColor}">
    <span class="card-title {activator} {titleColor}">{title}<i class="material-icons right" if="{activator}">{icon}</i></span>
    <yield/>
  </div>
  <script>
    var self = this;
    self.title = opts.title || '';
    self.titleColor = opts.titleColor || '';
    self.textColor = opts.textColor || '';
    self.activator = opts.activator ? 'activator' : '';
    self.icon = opts.icon || 'more_vert';
  </script>
</md-card-content>