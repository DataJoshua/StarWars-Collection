function TableData({name, data}) {

    let nameUpper = name[0].toUpperCase() + name.slice(1,name.length);

    return ( 
     <>
           <tr>
                <td><b>{nameUpper}</b></td>
                <td>{data}</td>
            </tr> 
     </>
        );
}

export default TableData;