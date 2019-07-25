import React, { useEffect } from 'react';


function Deconnexion(props){

  // Similaire à componentDidMount et componentDidUpdate :
  useEffect(() => {

    const { history } = props;

    localStorage.removeItem('data')
    history.push('/connexion');
  });

  return null;
}
export default Deconnexion;
