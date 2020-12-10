const base_url = "http://localhost:3000/";

$(document).ready(() => {

    $.post(base_url + "getList", {}, (data) => {
        console.log(data.list);

        for (let i = 0; i < data.list.length; i++) {

            const html = `
                <tr>
                    <td>${data.list[i].priority}</td>
                    <td>${data.list[i].title}</td>
                    <td>${data.list[i].text}</td>
                </tr>
            `;

            $("#tasks tbody").append(html);
        }
        
    });

    $("#submit").click(() => {

        let priorityNumber = $("#note-priority option:selected").attr("value");

        priorityNumber = parseInt(priorityNumber);

        let noteObject = {
            author: null,
            title: $("#note-title").val(),
            text: $("#note-text").val(),
            completed: false,
            archived: false,
            priority: priorityNumber,
            categories: null,
            timestamp: Date.now()
        }

        $("#submit").attr("disabled", "disabled");
        $("#loading-icon").fadeIn(600);
        // Loading Icon
        $.post(base_url + "newNote", noteObject, (data) => {
            console.log(data.saved);
            if (data.saved === true) {
                setTimeout(() => {
                    $("#submit").removeAttr("disabled");
                    $("#loading-icon").fadeOut(600);
                    $("#submit-message").text("Successfully saved the following: " + noteObject.title);
                    $("#submit-message").fadeIn(600);

                    $("#note-title").val("");
                    $("#note-text").val("");
                    $("#note-priority").val("1");

                    const html = `
                        <tr>
                            <td>${noteObject.priority}</td>
                            <td>${noteObject.title}</td>
                            <td>${noteObject.text}</td>
                        </tr>
                    `;

                    $("#tasks tbody").append(html);

                    setTimeout(() => {
                        $("#submit-message").fadeOut(600, () => {
                            $("#submit-message").text("");
                        });
                    }, 4000);
                }, 2000);
            }
        });     
    });
});