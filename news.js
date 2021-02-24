let newsAccordion = document.getElementById("newsAccordion");
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let newsHtml = "";
        json.forEach(function(element, index){
            let news = `<div class="card">
                            <div class="card-header" id="${index}">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    ${element.title}
                                    </button>
                                </h5>
                                </div>
                            
                                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#accordion">
                                <div class="card-body">
                                    ${element.body}
                                </div>
                            </div>
                        </div>`;
            newsHtml += news
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send();
