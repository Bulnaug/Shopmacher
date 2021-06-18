import Header from './Header/header'
import Conent from './Content/content';
import Footer from './Footer/footer'
import './App.css';

const App = (props) => {
  return (

      <div className="App">
        <Header />
        <Conent />
        {/* <Content products={props.state.Products}/> */}
        <Footer />
      </div>

  );
}

export default App;
