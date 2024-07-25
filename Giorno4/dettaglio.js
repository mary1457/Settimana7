const addressBarParameters = new URLSearchParams(location.search)
const img = addressBarParameters.get('src') 
const artist = addressBarParameters.get('artist') 
const purl = addressBarParameters.get('purl') 
const eventsRow = document.getElementById('events-row')

function creaCard () {
    const newEventCol = `
                <div class="col-md-4">
              <div class="card mb-4 shadow-sm">
             
               <img
                  src="${img}"
                  class="bd-placeholder-img card-img-top w-100"
                />
                <div class="card-body">
                
                  <h5 class="card-title">${artist}</h5>
                  <a href=" ${purl}">
                  ${purl}
                  </a>
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
                      
                        class="btn btn-sm btn-outline-secondary"
                      >
                        Hide
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                `
            
            eventsRow.innerHTML = eventsRow.innerHTML + newEventCol
}

creaCard()