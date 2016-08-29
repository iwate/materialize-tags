<md-col>
  <div class="col{s}{m}{l}{offsetS}{offsetM}{offsetL}{pushS}{pushM}{pushL}{pullS}{pullM}{pullL}">
    <yield/>
  </div>
  <script>
    var self = this
      , sizelist = ['s', 'm', 'l']
      , prefixies = ['', 'offset-', 'push-', 'pull-'];

    sizelist.forEach(function(s){
      prefixies.forEach(function(p){
        var prefix = p + s;
        var key = p ? p.slice(0, p.length-1) + s.toUpperCase() : s;
        self[key] = self.opts[key] ? ' ' + prefix + self.opts[key] : '';
      })
    })
  </script>
</md-col>