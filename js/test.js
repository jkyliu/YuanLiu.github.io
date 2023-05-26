.container-fluid {
    background-image: url("https://svgsilh.com/svg_v2/2018617.svg");
    background-color: #ffc467;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100vh;
    justify-content: center;
  }
  .card {
    .smile {
      font-size: 50px;
    }
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 400px;
    .emojy {
      text-align: center;
      padding: 20px;
    }
    img {
      width: 50px;
      height: 50px;
    }
  }
  h1 {
    font-size: 20px;
    text-align: center;
    margin: 20px;
  }
  
  .star {
    &:hover {
      transform: scale(1.2);
    }
    position: relative;
    display: inline-block;
    cursor: pointer;
    width: 0;
    transition: transform 0.2s;
    height: 0;
    margin-left: 0.9em;
    margin-right: 0.9em;
    margin-bottom: 1.2em;
    border-right: 0.3em solid transparent;
    border-bottom: 0.7em solid #ffcc004a;
    border-left: 0.3em solid transparent;
    /* Controlls the size of the stars. */
    font-size: 24px;
  
    &:before,
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 0;
      position: absolute;
      top: 0.6em;
      left: -1em;
      border-right: 1em solid transparent;
      border-bottom: 0.7em solid #ffcc004a;
      border-left: 1em solid transparent;
      transform: rotate(-35deg);
    }
    &:after {
      transform: rotate(35deg);
    }
  }
  .star-hover,
  .star-click {
    border-bottom: 0.7em solid #fc0;
    &:before,
    &:after {
      border-bottom: 0.7em solid #fc0;
    }
  }
  