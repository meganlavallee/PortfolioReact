import react from "react";

function App() {
  return (
    <Router>
      <div>
        <NavBars />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={Home} />
        <Route exact path="/blog" component={Home} />
        <Route exact path="/contact" component={Home} />
      </div>
    </Router>
  )
}