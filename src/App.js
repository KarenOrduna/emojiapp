import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Definition from './components/definition';

function App() {
  return (
    <div className='App'>
      <Header />
      <Definition />
      {/* <div className='container-posts'>
        <Posts posts={currentPosts} loading={loading} />
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
        />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
