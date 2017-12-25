$(function(){
    let from = $('#from');
    let to = $('#to');
    let func = $('#func');
    let btn = $('#plot_btn');
    let plot = $('#plot');

    btn.click(function(e){
        e.preventDefault();

        let from_val = parseFloat(from.val());
        let to_val = parseFloat(to.val());
        let str_of_errors = "";


        if( isNaN(from_val) || isNaN(to_val) ) {
            str_of_errors = "Вы неправильно указали границы";

            if( isNaN(func) ) {
                str_of_errors += "или вы не указали функцию";
            }

            alert(str_of_errors);
        } else {
             // вариант без анимации
             /*let values = []

             for (let x = from_val; x <= to_val; x += 0.1) {
                 values.push([x, eval(func.val())])
             }

             $.plot(plot, [values], {})*/

             // вариант с анимацией
             let values = []
             setInterval(function () {
                 from_val += 0.1;
                 to_val += 0.1;

                 for (let x = from_val; x <= to_val; x += 0.1) {
                     values.push([x, eval(func.val())])
                 }

                 $.plot(plot, [values], {})
             }, 20);
         }

    });
})