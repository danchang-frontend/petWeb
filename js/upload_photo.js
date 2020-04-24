function makeImgurUrl(para) {
    const id = 'cd39c2181d056c8'; // 填入 App 的 Client ID
    const token = 'd31ada64e270338e2c9508b655df8306bba3c403'; // 填入 token
    const album = 'i9gCUlp'; // 若要指定傳到某個相簿，就填入相簿的 ID
    for (var count in $('#myFile').prop('files')) {

        let file;
        let notiLabel;
        let urlLabel;

        if (para == "class") {
            file = $('#myFile').prop('files')[count];
            notiLabel = $("#cnoti");
            urlLabel = $("#curlLabel");
        } else { //pare = set
            file = $('#newSetFile').prop('files')[count];
            notiLabel = $("#snoti");
            urlLabel = $("#surlLabel");
        }

        let settings = {
            async: false,
            crossDomain: true,
            processData: false,
            contentType: false,
            type: 'POST',
            url: 'https://api.imgur.com/3/image',
            headers: {
                Authorization: 'Bearer ' + token
            },
            mimeType: 'multipart/form-data'
        };
        let form = new FormData();
        form.append('image', file);
        form.append('album', album); // 有要指定的相簿就加這行

        settings.data = form;

        $.ajax(settings).done(function(res) {
            notiLabel.html("成功上傳摟～");
            imgArray[count] = JSON.parse(res).data.link;
        });
    }
    console.log(imgArray);
}