import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import './index.css';

export default function BookList({ data, EditEvent, deleteEvent }) {
    return (
        <>
            <div className="last-div">
                <table className="table table-bordered">
                    <thead>
                        <tr className="top-row">
                            <th>Title</th>
                            <th> Author</th>
                            <th>ISBN#</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {
                        data.map((book) => {
                            return (
                                <>
                                    <tbody>
                                        <tr className="all-row" key={book.id}>
                                            <td>{book.title}</td>
                                            <td>{book.author}</td>
                                            <td>{book.isbn}</td>
                                            < td > <EditIcon onClick={() => EditEvent(book.id)} /></td>
                                            <td><DeleteIcon onClick={() => deleteEvent(book.id)} /></td>
                                        </tr>
                                    </tbody>
                                </>
                            );
                        })
                    }
                </table>
            </div>
        </>
    )
}