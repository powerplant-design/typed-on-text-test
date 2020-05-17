const typedText = document.querySelectorAll(".typed")

const runRandom = tag => {

    const originalContent = tag.innerHTML

    let num = 0

    const addInterval = setInterval(() => {
        num++
        tag.innerHTML = originalContent.substring(0, num)
        
        if (originalContent == tag.innerHTML) {
            clearInterval(addInterval)
            tag.innerHTML = originalContent
            console.log('DONE');
        }
    
    }, 120)
}

// let observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.intersectionRatio > 0.5) {
//         runRandom(entry.target)
//       }
//     })
//   }, {
//     threshold: [0.0, 0.5, 1.0]
//   })

typedText.forEach(tag => {
    runRandom(tag)
    // observer.observe(tag)
})
