function execute(url) {
    url = url.replace('m.yuanshuku.com', 'www.yuanshuku.com');
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        let htm = doc.select("#booktxt").html();
        // htm = htm.replace(" 　　","<br/>")
        return Response.success(htm);
    }
    return null;
}