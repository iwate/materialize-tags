<md-tags>
  <style scoped>
    :scope .chips-placeholder input {
      margin-bottom: 0px;
    }
  </style>
  <div class="chips chips-placeholder"></div>
  <script>
    this.on("updated", function(){
      $('.chips-placeholder',this.root).material_chip({
        placeholder: 'Enter a tag',
        secondaryPlaceholder: '+Tag',
      });
    })
  </script>
</md-tags>