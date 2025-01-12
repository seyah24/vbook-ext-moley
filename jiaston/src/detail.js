
function execute(url) {
    let response = fetch(url);
    if (response.ok) {
        let res_json = response.json();
        let author = res_json.data.Author;
        let bookname = res_json.data.Name;
        let description = res_json.data.Desc.replace(/\n/g, "<br>");
        let coverImg = res_json.data.Img;
        let lastime = res_json.data.LastTime;
        let category = res_json.data.CName;
        let bookstatus = res_json.data.BookStatus;
        coverImg = "https://imgapixs.pigqq.com/BookFiles/BookImages/" + coverImg;
        return Response.success({
            name: bookname,
            cover: coverImg,
            author: author,
            description: description,
            detail: "作者： " + author  + "<br>" + category + "<br>" + lastime +"<br>" + bookstatus,
            host: "https://scxs.pigqq.com",
        });
    }
    return null;
}