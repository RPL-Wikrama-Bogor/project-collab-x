
document.getElementById('journalForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageInput = document.getElementById('image');
    const imageFile = imageInput.files[0];

    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const imageURL = e.target.result;

            const card = `
                    <div class="col-md-8">
                        <div class="card border-0 shadow-lg rounded-5 overflow-hidden animate__animated animate__fadeInUp">
                            <img src="${imageURL}" class="card-img-top" alt="Journal Image" style="object-fit: cover; height: 300px;">
                            <div class="card-body">
                                <h4 class="card-title fw-bold">${title}</h4>
                                <p class="card-text text-muted">${content}</p>
                            </div>
                        </div>
                    </div>
                `;
            document.getElementById('journalPreview').innerHTML = card;
            document.getElementById('journalForm').reset();
        };
        reader.readAsDataURL(imageFile);
    } else {
        alert('Please upload an image!');
    }
});

document.getElementById('view').addEventListener('click', function () {
    const card = document.getElementById('journalPreview');
    if (card) {
        card.classList.toggle('d-none');
        card.classList.toggle('d-block');
    }
})