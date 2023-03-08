
function ajaxSubmit(form) {
    return new Promise((resolve, rejects) => {
        var data = {};

        Object.entries(form.currentTarget).forEach(([key, element]) => {
            if (element.tagName == "INPUT") {
                data[element.name] = element.value;
            }
        })

        $.ajax({
            url: form.target.action,
            data: data,
            type: 'POST',
            success: (data) => data.success ? resolve(data) : rejects(data),
            error: (error) => rejects(error)
        });
    });
}