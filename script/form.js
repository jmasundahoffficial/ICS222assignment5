function my_function() {
    let allRows = document.querySelectorALL("table tr:nth-child(odd)");
    rows.forEach((row) =>{
        row.classList.add('zebraStripe');
    });

    }
