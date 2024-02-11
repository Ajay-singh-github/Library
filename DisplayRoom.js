import MaterialTable from "material-table";








export default function DisplayRoom()
{
    return(<div>
         <MaterialTable
            title="Category Display "
            columns={[
              {title:""},
            //   { title: 'Category Name', render:rowData=><><div>{rowData.categoryname}</div></> },
              {title:'Name'},
              {title:""},
              {title:""},
              //{ title: 'Category Icon', render:rowData=><><div><img src={`${serverURL}/images/${rowData.icon}`}   style={{width:50,height:50,borderRadius:10}}/></div></> }
            
                
            ]}
          //  data={allCategory}   
          data={["hello",'ajay']}     
            actions={[
              {
                icon: 'edit',
                tooltip: 'Edit Category',
                // onClick: (event, rowData) => handleEdit(rowData)
              },
              {
                icon: 'delete',
                tooltip: 'Delete Category',
                // onClick: (event, rowData) => handleDelete(rowData) 
              },
              {
                icon: 'add',
                tooltip: 'Add Category',
                isFreeAction:true,
                // onClick: (event, rowData) =>navigate('/admindashboard/restaurantcategoryinterface') 
              },
            ]}
          />

    </div>)
}