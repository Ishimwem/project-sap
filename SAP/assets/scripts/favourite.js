function favourite(cat, sub){
  console.log(cat)
  console.log(sub)

  $.ajax({
        url: "http://localhost:3030/category/favourite",
        type: "POST",
        data: {newcat : cat, subcat: sub},
        success: (result) => {
          alert("You have favourited this item")
        },
        error: (xhr) => {
          // don't do anything yet
          if (xhr.status == 404){
            alert("You have already favourited this.")
          }
          else {
            alert("The request is blocked.")
          }
        }
    })

}


function unfavourite(cat, sub){

  $.ajax({
        url: "http://localhost:3030/category/unfavourite",
        type: "POST",
        data: {newcat : cat, subcat: sub},
        success: (result) => {
          alert("You have unfavourited this item")
        },
        error: (xhr) => {
          // don't do anything yet
          if (xhr.status == 404){
            alert("You have not favourite this item yet.")
          }
          else {
            alert("The request is blocked.")
          }
        }
    })

}
