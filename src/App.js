import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import QuestionList from './components/Questions/QuestionList';
import AskForm from './components/AskForm/AskForm';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="row topRow">
        <AskForm />
        <SearchBar />
      </div>
      <div className="row">
        <QuestionList />
      </div>
    </div>
  );
}

export default App;
