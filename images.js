const imageSources = ['images1.jpeg','images2.jpeg','images3.jpeg','images4.jpeg','images5.jpeg','images6.jpeg','images8.jpeg','images9.jpeg','images10.jpeg'];
    
            function changeBackgroundImage() {
                const randomIndex = Math.floor(Math.random() * imageSources.length);
                document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
            }
    
            // Change the background image every 5 seconds (5000 milliseconds)
            setInterval(changeBackgroundImage, 900);