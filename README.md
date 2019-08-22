# Termpage
Termpage allows you to create neat functional webpages that behave like a terminal

![](https://i.imgur.com/wqaqeNB.png)

# Why Termpage?
I wanted to build an effective web interface form my raspberry pi home server without thinking too much about design or ux.

# Example usage
Just drop this code in your index.html to start using termpage
```html
<!doctype html>
<html>
  <head>
    <title>termpage@home</title>
    <script src="https://cdn.jsdelivr.net/npm/termpage@0.1.0/dist/termpage.min.js" type="text/javascript"></script>
  </style>
  </head>
  <body>
    <div class="termpage-window" style="position:absolute;top:0;bottom:0;left:0;right:0" id="window"></div>
    <script>
      Termpage.init(document.getElementById('window'), (command) => {
        command = command.toLowerCase().trim();
        if (command === 'home') {
          return "Welcome to termpage";
        } else {
          return 'Command not found';
        }
      }, {
        initialCommand: 'home'
      });
    </script>
  </body>
</html>
```
You can check more complicated usage samples in the [examples folder](https://github.com/tautvilas/termpage/tree/master/example)

# API documentation

# Styling
