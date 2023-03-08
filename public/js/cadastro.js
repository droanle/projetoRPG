

$("#register").submit(function (event) {

    ajaxSubmit(event).then(
        (result) => {
            console.table(result);
        },
        (error) => {
            console.table(error);
        }
    );
    event.preventDefault();
});