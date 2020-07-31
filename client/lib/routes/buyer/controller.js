exports.somePage = (req, res) => {
  return app.render(req, res, '/a', req.query)
}