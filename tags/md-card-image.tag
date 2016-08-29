<md-card-image>
  <div class="card-image {waves}">
    <img class="{activator}" src="{src}" if="{src}">
    <span class="card-title" if="{title}">{title}</span>
  </div>
  <script>
    var self = this,
        wavesType = opts.wavesType ? `waves-${opts.wavesType}` : 'waves-block',
        wavesColor = opts.wavesColor ? `waves-${opts.wavesColor}` : 'waves-light';
    self.src = opts.src;
    self.title = opts.title;
    self.waves = opts.waves ? `waves-effect ${wavesType} ${wavesColor}` : '';
    self.activator = opts.activator ? 'activator' : '';
  </script>
</md-card-image>