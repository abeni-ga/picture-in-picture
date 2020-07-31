const videoElement = document.getElementById('video');
const button = document.getElementById('button');

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }


    } catch (error) {
        console.log('something went wrong', error);
    }
}

button.addEventListener('click', async () => {
    // disabled button
    button.disabled = true;
    // requestion picture to picture
    videoElement.requestPictureInPicture();
    // enabled button
    button.disabled = false;
})
// onload 
selectMediaStream();