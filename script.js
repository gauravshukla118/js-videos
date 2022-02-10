let products = [];

function addProduct(){
    var pid = document.getElementById("productid").value;
    var pname = document.getElementById("productname").value;
    var pprice = document.getElementById("productprice").value;

    var product={}; //created an empty object to store the values

        product.id = pid;
        product.name = pname;
        product.price = pprice;
        products.push(product); //pushed the object inside a global array
        console.log(product)
        displaylist();
}
//     if(isproductExist(id))
//     {
//         alert("Product alreadey exist");
//     }
//     else
//     {
//         var product={} //created an empty object to store the values

//         product.id = id;
//         product.name = name;
//         product.price = price;
//         products.push(product); //pushed the object inside a global array
//     }
//     displaylist();
   
// }

// isproductExist(id)      //function to check the duplicate values
// {
//     for(var i=0;i<products.length;i++)
//     {
//         if(products[i].id == id)
//         {
//             return true
//         }
//     }
//    return false;     
// }


//function to delete the object
function deleteProduct(pid)
{
    console.log(pid);
    for(var i=0;i<products.length;i++)
    {
        if(products[i].id == pid)
        {
            products.splice(i,1);
        }
    }
    displaylist();
}

//to edit the product

function editProduct(id){
    var p = {};  //created a dummy object
    for(var i=0;i<products.length;i++)
    {
        if(products[i].id == id)
            p=products[i];
    }
}displayEditform(p);

function displayEditform(p)
{
    //now we will populate the form 
    document.getElementById('productid').value=p.id;
    document.getElementById('productname').value=p.name;
    document.getElementById('productprice').value=p.price;

    //now we are hiding add button and showing update button

    document.getElementById('updateProductbtn').style.display="block";
    document.getElementById('addProductbtn').style.display="none";


}

function updateProduct()
{
    var pid = document.getElementById("productid").value;
    var pname = document.getElementById("productname").value;
    var pprice = document.getElementById("productprice").value;

    if(isproductExist(id)) //insde this coz suppose updating an id that doesn't exist
    {
        for(var i=0;i<products.length;i++)
        {
            if(products[i].id == id){
                products[i].name = pname;
                products[i].price = pprice;
            }
        }
    }
    displaylist();
}




//function to display the list(array of objects in a tabular format)
function displaylist(){

    var html = '';  //create an empty string and take value from user

    html += '<table><tr><th> ID </th><th> Name </th><th> Price </th><th> Action </th></tr>';

    for(var i=0;i<products.length;i++)
    {
        //if you want to add a variable in a string in js then you have to use single 
        // quote to concatinate the object if you've used single quotes for the string and
        //  use double quotes if you'va used double quotes for the main string
        html += '<tr>\
        <td> '+products[i].id+' </td>\
        <td>' +products[i].name+' </td>\
        <td> '+products[i].price+' </td>\
        <td><a href="#" onclick="deleteProduct('+products[i].id+')">Delete</a></td>\
        <td><a href="#" onclick="editProduct('+products[i].id+')">Edit Product</a></td>\
        </tr> ';
        html += '</table>';

        document.getElementById("productList").innerHTML = html;  //create html using js

    }
}
