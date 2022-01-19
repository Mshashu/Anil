import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Content from './component/Content/Content';
import Footer from './component/Footer/Footer';
import SecHeader from './component/SecHeder/SecHeader';
// import TrendingPost from './component/TrendingPost/TrendingPost';
function App() {
  return (
    <div className="App">
      <Header />
       <SecHeader />
      <Content />  
     {/* <TrendingPost /> */}
       <Footer /> 
    </div>
  );
}

export default App;
