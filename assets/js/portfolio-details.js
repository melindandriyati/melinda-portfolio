const CurrentURL = window.location.href;
const ParseURL = new URL(CurrentURL);
var content;
if (ParseURL.searchParams.get('project_name')) {
  console.log(ParseURL.searchParams.get('project_name'))
  if (ParseURL.searchParams.get('project_name') == "kaleidoskop") {
    content = `<div class="row gy-4">

      <div class="col-lg-8">
        <div class="portfolio-details-slider swiper">
          <div class="swiper-wrapper align-items-center">

            <div class="swiper-slide">
              <img src="assets/img/portfolio/kaleidoskop1.png" alt="">
            </div>

            <div class="swiper-slide">
              <img src="assets/img/portfolio/kaleidoskop2.png" alt="">
            </div>

          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="portfolio-info">
          <h3>Project information</h3>
          <ul>
            <li><strong>Category</strong>: Web Development</li>
            <li><strong>Client</strong>: Badan Meteorologi, Klimatologi dan Geofisika (BMKG) Balikpapan</li>
            <li><strong>Project date</strong>: 01 February, 2020 - 01 September, 2020</li>
          </ul>
        </div>
        <div class="portfolio-description">
          <h2>Kaleidoskop BMKG Balikpapan</h2>
          <p>
            BMKG adalah instansi pemerintah yang melaksanakan tugas pemerintahan di bidang meteorologi, klimatologi, dan geofisika. Oleh karena itu, BMKG harus memiliki dashboard dan kaleidoskop yang up-to-date sesuai dengan data cuaca terbaru. Saat melakukan prakiraan cuaca, salah satu informasi yang digunakan adalah trend cuaca 30 tahun terakhir. Sehingga BMKG Balikpapan memutuskan untuk membantu penyelesaian pekerjaan dengan cara membangun website ini. 
          </p>
        </div>
      </div>

    </div>`;
  } else if (ParseURL.searchParams.get('project_name') == "hira") {
    content = `<div class="row gy-4">

      <div class="col-lg-8">
        <div class="portfolio-details-slider swiper">
          <div class="swiper-wrapper align-items-center">

            <div class="swiper-slide">
              <img src="assets/img/portfolio/hira1.png" alt="">
            </div>

            <div class="swiper-slide">
              <img src="assets/img/portfolio/hira2.png" alt="">
            </div>

            <div class="swiper-slide">
              <img src="assets/img/portfolio/hira3.png" alt="">
            </div>

            <div class="swiper-slide">
              <img src="assets/img/portfolio/hira4.png" alt="">
            </div>

            <div class="swiper-slide">
              <img src="assets/img/portfolio/hira5.png" alt="">
            </div>

            <div class="swiper-slide">
              <img src="assets/img/portfolio/hira6.png" alt="">
            </div>

            <div class="swiper-slide">
              <img src="assets/img/portfolio/hira7.png" alt="">
            </div>

            <div class="swiper-slide">
              <img src="assets/img/portfolio/hira8.png" alt="">
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="portfolio-info">
          <h3>Project information</h3>
          <ul>
            <li><strong>Category</strong>: Web Development</li>
            <li><strong>Client</strong>: Telkom Regional VI</li>
            <li><strong>Project date</strong>: 01 December, 2020 - now</li>
          </ul>
        </div>
        <div class="portfolio-description">
          <h2>HiRA</h2>
          <p>
            Telkom Indonesia memiliki lebihg dari 11 ribu karyawan yang tersebar di seluruh Indonesia. Lebih dari 3 ribu diantaranya bertugas di divisi Regional untuk melaksanakan tugas di tiap daerah. Oleh karena itu, HiRA muncul sebagai inovasi untuk membantu Human Capital dalam melaksanakan tugas operasional yang rutin dilakukan. Kegiatan rutin ini dilakukan setiap bulan maupun setiap hari, seperti dashboard karyawan untuk pelaporan, pemerataan jumlah karyawan tiap unit, simulasi promosi dan mutasi, serta reminder absensi.
          </p>
        </div>
      </div>

    </div>`;
  }
} else {
  content = `<div class="row gy-4">
      <p>No content</p>
    </div>`;
}
document.getElementById("portfolio_details").innerHTML = content;
