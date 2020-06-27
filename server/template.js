var template = function(app, data) {
  return (
    `<div id="wrap">${app}</div>
    <script>window.__initialData__ = ${JSON.stringify(data)}</script>
    <script src="bundle.js"></script>`
  )
}
export default template;