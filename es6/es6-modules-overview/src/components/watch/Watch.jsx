// {
//     "watch": {
//         "id": 1,
//         "name": "samsung watch",
//         "color": "grey",
//         "price": 1800
//     }
// }


function Watch({watch}) {
    const {name,price,color} = watch;
 
    return (
        <div>
            <h2>Watch Name: {name}</h2>
            <p>Watch Price: {price}</p>
            <p>Watch Color: { color}</p>
        </div>
    );
}

export default Watch;