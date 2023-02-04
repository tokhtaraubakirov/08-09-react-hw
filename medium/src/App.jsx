import './App.css';
import Container from './components/Container';
import PostList from './components/Container/PostList/index';

function App() {

  return (
    <div className="App">
      <Container>
        <header class="header">
          <h2>medium alike</h2>
        </header>
        <section class="title-section">
          <h1>Hello, world!</h1>
        </section>
      </Container>
    <Container>
      <PostList/>
    </Container>
    <Container>
        <footer class="footer">
          <div class="credits">
              <p>Credits: photos from <span>Unsplash.com</span>, icons from <span>Icons8</span>, graphics from <span>craftwork.design</span>, font Kanit from <span>fonts.google</span>.</p>
          </div>
          <p class="student">nFactorial student Aubakirov Tokhtar ✨❤</p>
        </footer>
    </Container>
    </div>
  )
}

export default App
