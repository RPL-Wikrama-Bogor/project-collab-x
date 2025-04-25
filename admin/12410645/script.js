        // View Button
        document.querySelectorAll('.btn-view').forEach(button => {
          button.addEventListener('click', function(e) {
            e.preventDefault();
            Swal.fire({
              title: 'SunFlower',
              text: 'SunFlower is...',
              imageUrl: 'img/bunga matahari.jpeg',
              imageWidth: 300,
              imageAlt: 'SunFlower',
            });
          });
        });
      
        // Edit Button
        document.querySelectorAll('.btn-edit').forEach(button => {
          button.addEventListener('click', function(e) {
            e.preventDefault();
            Swal.fire({
              title: 'Edit Image',
              html:
                `<input type="text" id="title" class="swal2-input" placeholder="Title" value="SunFlower">
                 <textarea id="desc" class="swal2-textarea" placeholder="Description">SunFlower is...</textarea>`,
              confirmButtonText: 'Save',
              showCancelButton: true,
              preConfirm: () => {
                const title = document.getElementById('title').value;
                const desc = document.getElementById('desc').value;
                console.log('Title:', title, 'Desc:', desc);
              }
            });
          });
        });
      
        // Delete Button
        document.querySelectorAll('.btn-delete').forEach(button => {
          button.addEventListener('click', function(e) {
            e.preventDefault();
            Swal.fire({
              title: 'Are you sure?',
              text: 'You will delete SunFlower.',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#d33',
              cancelButtonColor: '#aaa',
              confirmButtonText: 'Yes, delete it!'
            });
          });
        });