import fond1 from './asset/fond1 (1).png';
import fond2 from './asset/fond2 (1).png';
import logo from './asset/Logo-Header.svg';
import coffre from './asset/Groupe de masques 1.svg'
import coffreOpen from './asset/Groupe de masques 2.svg'
import porte1 from './asset/port1.png'
import openSong from './asset/open.mp3'
import enigeme1 from './asset/enige1.png';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  var Gettoken = localStorage.length;

  //varibele pour coffre 
  const [imgcoffre1, setImgcoffre1] = useState(coffre);
  const [imgcoffre2, setImgcoffre2] = useState(coffre);
  const [imgcoffre3, setImgcoffre3] = useState(coffre);
  const [imgcoffre4, setImgcoffre4] = useState(coffre);
  const [imgcoffre5, setImgcoffre5] = useState(coffre);
  const [imgcoffre6, setImgcoffre6] = useState(coffre);
  const [imgcoffre7, setImgcoffre7] = useState(coffre);
  //------------------------

  const [item, setitem] = useState([null]);
  const [token, setToken] = useState("");
  const [authorization, setAuthorization] = useState("");
  const [showengristre, setshowengristre] = useState(true);
  const [showeCoffre, setshowCoffre] = useState(false);
  const [animation, setAnimation] = useState("");
  const [animation2, setAnimation2] = useState("");
  const [showetext, setshowtxet] = useState(false);
  const [showcharge, setcharge] = useState(false);
  const [showetage1, setetage1] = useState(false);
  const [givecoffre, setgivecoffre] = useState(false);

  //----------------------
  const [fond, setfond] = useState(fond1);
  const [desc, setdesc] = useState("");
  const [showport1, setshowport1] = useState("");
  const [rep , setrep] =useState("");
  //----- enigme 1 etage 1
  const [crype, setcrype] = useState("");
  const [createur, setcreateur] = useState("");
  const [messagecrype, setmessagecrype] = useState("");
  const [showenigime1, setshowenigme1] = useState(false);
  const [ouvricoffre, setouvriecoffre] = useState(false);
  const [showetage1coffre, setshowetage1coffre] = useState(false);


  let audio = new Audio(openSong);

  var myHeaders = new Headers();
  myHeaders.append("Authorization", authorization);
  myHeaders.append("x-auth-token", token);
  myHeaders.append("Content-Type", "text/plain");



  const charger = () => {
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("/reset", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result.retreived_tresors[1]);
        setitem(result);
        for (var i = 0; i < result.retreived_tresors.length; i++) {
          console.log(result.retreived_tresors[i])
          switch (result.retreived_tresors[i]) {
            case '/tresor':
              setImgcoffre1(coffreOpen);
              break;
            case '/vieux':
              setImgcoffre2(coffreOpen);
              setImgcoffre3(coffreOpen);
              break;
            case '/dragon':
              setImgcoffre4(coffreOpen);
              break;
            case '/couloir/1':
              setImgcoffre5(coffreOpen);
              break;
            case '/1':
              setImgcoffre6(coffreOpen);
              break;
            case '/36':
              setImgcoffre7(coffreOpen);
              break;
            default:
              break;
          }

        }
        setcharge(false);
        setetage1(true);
        setfond(fond2);
        setdesc("Le Donjon est dangereux mais vous êtes ici en sécurité.N'oubliez pas votre quête.")
      })
      .catch(error => console.log('error', error));

    setshowport1(false);
    setgivecoffre(false);
    console.log(item);
  }

  const open1 = () => {

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    if (imgcoffre1 !== coffreOpen) {
      fetch("/tresor", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      audio.play();
      setImgcoffre1(coffreOpen);
    }
  }



  const enregister = () => {
    if (token !== "") {
      localStorage.setItem('token', token);

    }
    if (authorization !== "") {
      localStorage.setItem('authorization', authorization);
      setshowengristre(false);
      setcharge(true);

    }

  }


  const port1 = () => {
    setfond(porte1);
    setetage1(false);
    setdesc(false);
    if (imgcoffre2 !== coffreOpen) {
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      fetch("/1", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

      audio.play();
      setImgcoffre2(coffreOpen);

    }
    setgivecoffre(true);
    setshowport1(true)
  }


  const routeenigme1 = () => {
    setetage1(false)
    setshowetage1coffre(true);
    setshowenigme1(true);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("/coffre", requestOptions)
      .then(response => response.json())
      .then(result => {
        setmessagecrype(result.message)
      })
      .catch(error => console.log('error', error));
  }


  const enigemeetage1 = () => {

    if (crype === "aes-256-ctr" && createur === "roy fielding") {
      setdesc("36");
      setshowenigme1(false);
      setouvriecoffre(true);
    }

  }

  const resolut = () => {

    switch (rep) {
      case "36" :
        setImgcoffre3(coffreOpen);
        if (imgcoffre2 !== coffreOpen) {
          var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
          };
          fetch("/36", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    
          audio.play();
          setImgcoffre2(coffreOpen);
    
        }else{
          console.log('oui');
        }
        break;
    }
  }





  // use feect en temps relle


  useEffect(() => {

    if (Gettoken !== 0) {

      setshowengristre(false)
      setToken(localStorage.getItem('token'));
      setAuthorization(localStorage.getItem('authorization'));
      console.log(token);
      setcharge(true);

    }



    fetch("/inscription")
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));




    setTimeout(() => {
      setshowCoffre(true);
      setAnimation("animation");
    }, 2000);



    setTimeout(() => {
      setshowtxet(true);
      setAnimation2("textimg");
    }, 3000);


  }, [])



  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="logo" className='logo' />
        <div className='map'>
          <img src={fond} alt="fond" />
          {
            givecoffre ?

              <div className={'ajustebando ' + animation2}>
                <div className='bandocoffre'><h1 className='coffredecover'>COFFRE DECOUVERT</h1></div>
              </div>
              : null
          }
          <div className='textandimage'>
            {
              showetext ?
                <div className='ajuste'>
                  <p className={animation2}>{desc}</p>
                </div>
                : null
            }
          </div>
        </div>
        {
          showeCoffre ?

            <div id='CollectCoffre' className={animation}>
              <button className='coffre1' onClick={open1}>
                <img src={imgcoffre1} alt="coffre" className='coffre' />
              </button>
              <button className='coffre1' onClick={open1}>
                <img src={imgcoffre2} alt="coffre" className='coffre' />
              </button>
              <button className='coffre1' onClick={open1}>
                <img src={imgcoffre3} alt="coffre" className='coffre' />
              </button>
              <button className='coffre1' onClick={open1}>
                <img src={imgcoffre4} alt="coffre" className='coffre' />
              </button>
              <button className='coffre1' onClick={open1}>
                <img src={imgcoffre5} alt="coffre" className='coffre' />
              </button>
              <button className='coffre1' onClick={open1}>
                <img src={imgcoffre6} alt="coffre" className='coffre' />
              </button>
              <button className='coffre1' onClick={open1}>
                <img src={imgcoffre7} alt="coffre" className='coffre' />
              </button>
            </div>
            : null
        }
        {
          showengristre ?


            <div className={'conteneur ' + animation2}>
              <h2>Trouvez le token et l'autorisation de cette page Web.</h2>
              <label className='indice'>Une inspection s'impose.</label>
              <input type="text" placeholder='Ecrire ici x-object-token' onChange={(e) => setToken(e.target.value)} />
              <input className='cham2' type="text" placeholder='Ecrire ici la valeur de Authorization' onChange={(e) => setAuthorization(e.target.value)} />
              <button className='valide' onClick={enregister} id="enregister">Valider</button>
            </div>
            : null
        }
        {
          showcharge ?
            <div className={'conteneur ' + animation}>
              <h2 className='titre1'>Bravo ! Vous avez réussi la première épreuve. Bienvenu dans Donjon Ring.</h2>
              <label htmlFor="" className='indice'>PS : Margit n'était pas là.</label>
              <button className='btn-debut' onClick={charger} id="enregister">Allez au rez-de-chaussée</button>
            </div>
            : null
        }

        {
          showetage1 ?
            <div className='conteneur'>
              <div className={'question ' + animation}>
                <button className='choix' onClick={port1} id="enregister"><p className='quetiontext'> Passez par la porte /1</p></button><br />
                <button className='choix' onClick={routeenigme1} id="enregister"><p className='quetiontext'> Ouvrir le coffre</p></button><br />
                <button className='choix' onClick={charger} id="enregister"><p className='quetiontext'> Monter à l'étage </p></button>
              </div>
            </div>
            : null
        }
        {
          showport1 ?

            <div>
              <div className={'conteneur ' + animation}>
                <h2 className='titre1'>Ce trésor est bien mérité.</h2>
                <button className='btn-debut' onClick={charger} id="enregister">Allez au rez-de-chaussée</button>
              </div>
            </div>
            : null
        }
        {

          showetage1coffre ?
            <div>
              <div className={'conteneur ' + animation}>
                {
                  showenigime1 ?

                    <div className={'conteneur ' + animation}>
                      <h2 className='titre1'> {messagecrype} Quelle type d'encryptage est utilisé dans ce message ?</h2>
                      <label htmlFor="" className='indice'>PS : Margit n'était pas là.</label>
                      <input type="text" placeholder='Ecrire ici type d encryptage' onChange={(e) => setcrype(e.target.value)} />
                      <input className='cham2' type="text" placeholder='Ecrire ici nom créateur du REST' onChange={(e) => setcreateur(e.target.value)} />
                      <button className='valide' onClick={enigemeetage1} id="enregister">Valider</button>
                    </div>
                    : null
                }
                {
                  ouvricoffre ?
                    <div className={'conteneur ' + animation}>
                      <input type="text" placeholder='Reponse' onChange={(e) => setrep(e.target.value)} />
                      <button className='valide' onClick={resolut} id="enregister">Valider</button>
                    </div>
                    : null
                }
                <button className='btn-debut' onClick={charger} id="enregister">Allez au rez-de-chaussée</button>


              </div>
            </div>
            : null
        }
      </div>
    </div>
  );
}

export default App;
