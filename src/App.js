import './App.scss';
import ReactPageScroller from "react-page-scroller";
import React from 'react'
import Project from './page/Project'
import Projects from './Projects.json'
import Front from './page/Front'
import Contact from './page/Contact'

function App() {
  const [page, setPage] = React.useState(0)

  const handlePageChange = (number) => {
    setPage(number)
  }

  return (
    <div className="App">
      <ReactPageScroller
          pageOnChange={handlePageChange}
          customPageNumber={page}
        >
        <Front changePage={handlePageChange} maxPage={Projects.data.length + 1}/>
        {Projects.data.map((elem, index) => {
          return (<Project data={elem} key={elem.title} index={index}/>)
        })}
        <Contact changePage={handlePageChange}/>
      </ReactPageScroller>
    </div>
  );
}

export default App;
