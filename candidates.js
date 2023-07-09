const searchFun = () =>{
    let filter = document.getElementById('myInput').value.toUpperCase();
    let myTable = document.getElementById('myTable');
    let tr = myTable.getElementsByTagName('tr');
    for(var i = 0; i < tr.length; i++)
    {
        let td = tr[i].getElementsByTagName('td')[0];
        // let name = tr[i].getElementsByTagName('td')[0];
        let location = tr[i].getElementsByTagName('td')[1];
        let profession = tr[i].getElementsByTagName('td')[2];

        if(td || location)
        {
            let textValue = td.textContent || td.innerHTML;
            let locValue = location.textContent || location.innerHTML;
            let proValue = profession.textContent || profession.innerHTML;

            if(textValue.toUpperCase().indexOf(filter) > -1 || locValue.toUpperCase().indexOf(filter) > -1
                || proValue.toUpperCase().indexOf(filter) > -1)
            {
                tr[i].style.display = "";
            }
            else{
                tr[i].style.display = "none";
            }
        }
        // if(name || location || profession)
        // {
        //     let nameValue = name.textContent || name.innerHTML;
        //     let locationValue = location.textContent || location.innerHTML;
        //     let professionValue = name.professiontContent || name.professionHTML;

        //     if(nameValue.toUpperCase().indexOf(filter) > -1 || locationValue.toUpperCase().indexOf(filter) > -1 
        //         || professionValue.toUpperCase().indexOf(filter) > -1)
        //     {
        //         tr[i].style.display = "";
        //     }
        //     else
        //     {
        //         tr[i].style.display = "none";
        //     }

        // }
    }
}