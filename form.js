
    function myfunction() {
        let rows = document.querySelectorAll('table tr:nth-child(odd)');
        rows.forEach((row) => {
            row.classList.add('paintrow');
        });   
    }
    
