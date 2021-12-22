import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { XCircleFill } from 'react-bootstrap-icons';
import { List, arrayMove } from '@plesk/react-movable';

const PdfList = ({ list, setList }) => {
  return (
    <List
      values={list}
      onChange={({ oldIndex, newIndex }) => setList(arrayMove(list, oldIndex, newIndex))}
      renderList={({ children, props }) => <ListGroup {...props}>{children}</ListGroup>}
      renderItem={({ value, props }) => (
        <ListGroup.Item {...props}>
          <div className="d-flex justify-content-between">
            <p className="my-auto">
              <b>{value.file.name.slice(0, -4)}</b>
              <br />
              <small> {Math.ceil(value.file.size / 1024)} KB</small>
            </p>
            <button className="delete-btn" onClick={() => setList(list.filter((pdf) => pdf.id !== value.id))}>
              <XCircleFill className="delete-btn-icon my-auto" size={24} />
            </button>
          </div>
        </ListGroup.Item>
      )}
    />
  );
};

export default PdfList;
