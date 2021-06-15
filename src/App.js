import Header from './Header/header'
import Body from './Content/body';
import Footer from './Footer/footer'
import './App.css';

const App = (props) => {
  return (

      <div className="App">
        <Header />
        <Body />
        {/* <Content products={props.state.Products}/> */}
        <Footer />
      </div>

  );
}

export default App;
