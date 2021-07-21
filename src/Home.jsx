import React, { useState } from 'react';
import './index.css';
import Logo from "./image/logo.png";
import BookList from "./BookList.jsx";

const App = () => {

    const [bookData, setBookData] = useState({
        title: '',
        author: '',
        isbn: ''
    });
    const [data, setData] = useState([]);
    const [toggleSave, setToggleSave] = useState(true);
    const [isEditItem, isSetEditItem] = useState(null);


    const addEvent = (e) => {
        e.preventDefault();
        if (!toggleSave) {

            let editedObjArr = data.map((elem) => {
                if (elem.id === isEditItem) {
                    return {
                        ...elem,
                        title: bookData.title,
                        author: bookData.author,
                        isbn: bookData.isbn
                    };
                }
                return elem;
            })
            setData(editedObjArr);
            setToggleSave(true);
            setBookData({ title: '', author: '', isbn: '' });
            isSetEditItem(null);
        }

        else {
            const newData = {
                id: new Date().getTime().toString(),
                title: bookData.title,
                author: bookData.author,
                isbn: bookData.isbn
            }
            setData([...data, newData]);
            setBookData({ title: '', author: '', isbn: '' });
        }
    }

    const deleteEvent = (indx) => {
        const deleteItem = data.filter((elem) => {
            return indx !== elem.id;
        });

        setData(deleteItem);
    }

    const EditEvent = (indx) => {
        let EditItem = data.find((elem) => {
            return indx === elem.id;
        });

        setBookData(EditItem);
        setToggleSave(false);
        isSetEditItem(indx);
    }

    return (
        <>
            <div className="main-div">


                <div className="child-div">
                    <div className="heading">
                        <img src={Logo} alt="logo"></img>
                        <h1>My <span style={{ color: "blue" }}>Book</span> List</h1>
                    </div>

                    <div className="center-part">
                        <form>
                            <label>Title</label><br />
                            <input type="text"
                                name="title"
                                value={bookData.title}
                                onChange={e => setBookData({ ...bookData, title: e.target.value })} /><br />

                            <label>Author</label><br />
                            <input type="text"
                                name="author"
                                value={bookData.author}
                                onChange={e => setBookData({ ...bookData, author: e.target.value })} /><br />

                            <label>ISBN#</label><br />
                            <input type="text"
                                name="isbn"
                                value={bookData.isbn}
                                onChange={e => setBookData({ ...bookData, isbn: e.target.value })} /><br />
                            {
                                toggleSave ?
                                    <button className="save-button" onClick={addEvent}>Save Book</button>
                                    :
                                    <button className="save-button" onClick={addEvent}>Edit Book</button>
                            }
                        </form>
                    </div>
                    <div>
                        <BookList data={data} EditEvent={EditEvent} deleteEvent={deleteEvent} />
                    </div>
                </div>
            </div>
        </>
    );
}
export default App;