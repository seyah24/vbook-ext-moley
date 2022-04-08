function execute(url) {
    url = url.replace('m.min-yuan.com', 'www.min-yuan.com');
    if(url.slice(-1) !== "/")
        url = url + "/";
    let response = fetch(url);
    if (response.ok) {

        let doc = response.html();
        let coverImg = doc.select(".img img").first().attr("src");
        if (coverImg.startsWith("/")) {
            coverImg = "http://www.min-yuan.com" + coverImg;
        }
        return Response.success({
            name: doc.select("h2.name").text(),
            cover: coverImg,
            author: doc.select(".info p.author").first().text().replace(/作\s*者：/g, ""),
            description: doc.select(".book-intro").text(),
            detail: doc.select(".info p").html(),
            host: "http://www.min-yuan.com"
        });
    }
    return null;
}