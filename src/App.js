import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import EditPage from './Components/Edit/EditPage';
import Footer from './Components/Footer/Footer';
import MakePost from './Components/Posts/MakePost';
import Post from './Components/Posts/Post';

function App() {
  const [isEdit, setEdit] = useState(false);
  const [isOpenPost, setOpen] = useState(false);
  return (
    <div className="App">
      {isEdit ?
        <EditPage setEdit={setEdit} />
        : !isEdit && !isOpenPost ? (
          <>
            <Header setEdit={setEdit} />
            <div className='post-container'>
              <Post />
            </div>
            < Footer isOpenPost={isOpenPost} setOpen={setOpen} />
          </>
        ) : (
          <>
            <Header setEdit={setEdit} />
            <MakePost setOpen={setOpen} />
          </>
        )}
    </div >
  );
}

export default App;
