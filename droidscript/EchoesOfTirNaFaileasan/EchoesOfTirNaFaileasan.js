/* global app */
/* exported OnStart */

function OnStart() {
  app.SetOrientation("Portrait");

  var layout = app.CreateLayout("Linear", "FillXY");
  var web = app.CreateWebView(1, 1, "FillXY,NoScrollBars,NoActionBar");

  layout.AddChild(web);
  app.AddLayout(layout);

  web.LoadUrl("www/index.html");
}
