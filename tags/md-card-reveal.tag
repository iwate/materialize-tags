<md-card-reveal>
  <div class="card-reveal {textColor}">
    <span class="card-title {titleColor}">{title}<i class="material-icons right">{icon}</i></span>
    <yield/>
  </div>
  <script>
    var self = this;
    self.title = opts.title || '';
    self.titleColor = opts.titleColor || '';
    self.textColor = opts.textColor || '';
    self.icon = opts.icon || 'close';
  </script>
</md-card-reveal>