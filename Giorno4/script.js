const apiKey = "YiGB1DRmNKP7lWQEEP1XrioMrYiRoVqIsWux9ZAuLvDsQ8Ie2ERhoiRR";
const opzioni = {
    headers: {Authorization: apiKey}
}

const ricerca = document.getElementById("ricerca")
const ricerca2 = document.getElementById("ricerca2")
const campo = document.getElementById("campo")
const eventsRow = document.getElementById('events-row')

window.addEventListener("load",()=>{
    ricerca.addEventListener("click",getImg)
    ricerca2.addEventListener("click",getImg2)
    
})



const getImg = function () {
    eventsRow.innerHTML=""
    fetch(
      'https://api.pexels.com/v1/search?query='+campo.value,opzioni
    )
      .then((response) => {
        console.log(response)
        if (response.ok) {
        
          return response.json()
        } else {
          throw new Error('Qualcosa è andato storto nella chiamata di rete')
          
        }
      })
      .then((responsePhotos) => {
        console.log(responsePhotos)
        responsePhotos.photos.forEach((photo) => {
            const newEventCol = `
                <div class="col-md-4" id="col${photo.id}">
              <div class="card mb-4 shadow-sm">
              <a href="dettaglio.html?src=${photo.src.small}&artist=${photo.photographer}&purl=${photo.photographer_url}">
               <img
                  src="${photo.src.small}"
                  class="bd-placeholder-img card-img-top w-100"
                /></a>
                <div class="card-body">
                 <a href="dettaglio.html">
                  <h5 class="card-title">${photo.alt}</h5></a>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        onclick="removeCard(${photo.id})"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Hide
                      </button>
                    </div>
                    <small class="text-muted">${photo.id}</small>
                  </div>
                </div>
              </div>
            </div>
                `
            
            eventsRow.innerHTML = eventsRow.innerHTML + newEventCol
          })
      })
      .catch((err) => {
        console.log('ERRORE!', err)
      })
  }
  
//   getImg()

const getImg2 = function () {
    fetch(
      'https://api.pexels.com/v1/search?query=cat',opzioni
    )
      .then((response) => {
        console.log(response)
        if (response.ok) {
        
          return response.json()
        } else {
          throw new Error('Qualcosa è andato storto nella chiamata di rete')
          
        }
      })
      .then((Photos) => {
        console.log(Photos)  
        
      })
      .catch((err) => {
        console.log('ERRORE!', err)
      })}
function removeCard (id) {
    const colonna=document.getElementById("col"+id)
    colonna.hidden= true
}