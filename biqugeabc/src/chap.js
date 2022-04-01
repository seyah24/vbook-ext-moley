function execute(url) {
    url = url.replace('m.biqugeabc.com', 'www.biqugeabc.com');
    let response = fetch(url);

    if (response.ok) {
        let doc = response.html();
        doc.select(".posterror").remove();
        let htm = doc.select(".text_row_txt").html();
        htm = htm.replace(/\&nbsp;/g, "");
        return Response.success(htm);
    }
    return null;
}