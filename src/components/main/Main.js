import React, { Component } from 'react';
import Devices from './devices.png';
import Hantverkare from './hantverkare.png';
import Anvandare from './anvandare.png'

class Main extends Component {



  render() {
    return (
      <div className="main-container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 " src={Hantverkare} alt="First slide"/>
              <div className="carousel-caption d-md-block bg-dark">
                <small className="carousel-text">&quot;Med flexibla kontoret har jag butiken i fickan.&quot;- <b>Jörgen Håkansson, Södertörns VVS</b></small>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 " src={Anvandare} alt="First slide"/>
              <div className="carousel-caption d-md-block bg-dark">
                <small className="carousel-text">&quot;Nu kan jag mejla mina kunder direkt från bilen när jobbet är klart.&quot;- <b>Jonas Öhrevik, Brevik VVS</b></small>
              </div>
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={Anvandare} alt="First slide"/>
              <div className="carousel-caption d-md-block bg-dark">
                <small className="carousel-text">&quot;Min vardag har verkligen blivit enklare med Flexibla Kontoret&quot;- <b>Per Kallas, Ihrevikens VVS</b></small>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <div className="card-wrapper mt-5 pt-5 pb-2">
          <div className="card-group">
            <div className="card devices w-100 mb-3 z-depth-4 rounded-top rounded-bottom">
              <img className="card-img-top pt-2 rounded-top" src={Devices} alt="Card image cap"/>
              <div className="card-body rounded-bottom">
                <h5 className="card-title">Spara tid och pengar</h5>
                <p className="card-text">Att hantera administration parallellt med yrket
                som hantverkare kan skapa utmanande situationer. Nu erbjuder vi lösningen
                till våra kunder. I Flexibla Kontoret kan du registrera allt ifrån inköp
                av material och arbetstid till fakturering och betalning. Flexibla Kontoret
                är anpassad till alla dina enheter.</p>
                <a href="https://content-eshop.dahl.se/wcsstore/Dahl%20B2B/Vara_erbjudanden/pdf/Flexibla_Kontoret.pdf" target="_blank" class="btn bg-flexibla-green text-white">Läs broschyren</a>
              </div>
            </div>
            <div className="card support rounded w-100 mb-3 z-depth-4">
              <img className="card-img-top rounded-top" src="https://c1.staticflickr.com/3/2909/14202199100_c1d8c57e35_b.jpg" alt="Card image cap"/>
              <div className="card-body support-body">
                <h5 className="card-title">Vill du veta mer?</h5>
                <p className="card-text">Skicka en intresseanmälan till våra säljare så kontaktar vi dig inom 24 timmar</p>
                <a href="mailto:support@flexiblakontoret.nu" className="btn bg-flexibla-green text-white">Intresseanmälan</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col s12 center-align pt-4 pb-1 video-container">
          <div className="resp-container">
            <iframe className="resp-iframe z-depth-2 " src="https://www.youtube.com/embed/ZIAV16-YEEg" frameborder="0" allowfullscreen="allowfullscreen"></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
