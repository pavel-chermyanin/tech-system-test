import { Table } from "antd";
import { useState } from "react";
import ReactDragListView from "react-drag-listview";

const ListColumns = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const initialColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const [columns, setColumns] = useState(initialColumns);


  const dragProps = {
    onDragEnd(fromIndex, toIndex) {
      const newColumns = [...columns];
      const item = newColumns.splice(fromIndex, 1)[0];
      newColumns.splice(toIndex, 0, item);
      setColumns(newColumns);
    },
    nodeSelector: "th",

  };

  return (
    <ReactDragListView.DragColumn {...dragProps}>
      <Table
        style={{ width: "900px", margin: "0 auto" }}
        dataSource={dataSource}
        columns={columns}
        bordered
        pagination={false}
      />
    </ReactDragListView.DragColumn>
  );
};

export default ListColumns;

//   const [characters, setCharacters] = useState(data);
//   function habdleOnDragEnd(result) {
//     if (!result.destination) return;
//     const items = Array.from(characters);
//     const [reorderedItem] = items.splice(result.source.index, 1);
//     items.splice(result.destination.index, 0, reorderedItem);

//     setCharacters(items);
//   }

//   return (
//     <div>
//       <DragDropContext onDragEnd={habdleOnDragEnd}>
//         <Droppable
//         direction="horizontal"
//         droppableId="list">
//           {(provided) => (
//             <ul
//               className="list"
//               {...provided.droppableProps}
//               ref={provided.innerRef}
//             >
//               {characters.map((item, index) => (
//                 <Draggable
//                   key={item.id}
//                   draggableId={item.id}
//                   index={index}
//                 >
//                   {(provided) => (
//                     <li
//                       {...provided.dragHandleProps}
//                       {...provided.draggableProps}
//                       ref={provided.innerRef}
//                     >
//                       {item.title}
//                     </li>
//                   )}
//                 </Draggable>
//               ))}
//               {/* {provided.placeholder} */}
//             </ul>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </div>
//   );
