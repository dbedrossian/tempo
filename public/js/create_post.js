const cloudName = "dtgo6e01y";
const uploadPreset = "ml_default";
let url;

const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
  },
  (error, result) => {
    console.log(error);
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the info: ", result.info);
      url = result.info.secure_url;
    }
  }
);

document.getElementById("upload_widget").addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    console.log("i got here");
    myWidget.open();
  },
  false
);

const postFormHandler = async (event) => {
  event.preventDefault();

  const captionEl = document.querySelector('#post-caption');
  const mediaTypeEl = document.querySelector('#')
  // const urlEl = document.querySelector('#post-media-url');

  const caption = captionEl ? captionEl.value.trim() : null;
  const media_type = mediaTypeEl ? mediaTypeEl.value : null;
  const media_url = url ? url : null;

  console.log(caption);
  console.log(media_url);

  if (caption || media_url) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ caption, media_type, media_url }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace(window.location.href);
    } else {
      alert('Failed to post.');
    }
  }
};

document
  .querySelector('.post-form')
  .addEventListener('submit', postFormHandler);
