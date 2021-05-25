/* 
List grid create with filters
*/

const ListGrid = {
  create(ISC) {
    ISC.ListGrid.create({
      ID: "itemList",
      width: 500,
      height: 300,
      alternateRecordStyles: true,
      dataSource: "supplyItem",
      autoFetchData: true,
      showFilterEditor: true,
    });
  },
};

export default ListGrid;
