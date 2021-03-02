const searchVideo = query => fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&videoCaption=closedCaption&maxResults=25&key=AIzaSyBdllPS54DvK1SyqQRGQZEOGW0LvkyLgCA`).then(response => response.json());

export { searchVideo };
